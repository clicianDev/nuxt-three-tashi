<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  AnimationMixer,
  AnimationClip,
  Clock,
  BufferGeometry,
  BufferAttribute,
  Points,
  PointsMaterial,
  FogExp2,
  TextureLoader,
  AmbientLight,
  Vector2,
  PointLight,
  LinearToneMapping,
  ReinhardToneMapping,
  Vector3,
} from 'three'

import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
// @ts-ignore
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'
import { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

let renderer: WebGLRenderer
let controls: OrbitControls
let mixer: any
let position: any
let composer: any

const clock = new Clock()
const experience = ref<HTMLCanvasElement | null>(null)

const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value)

const scene = new Scene()

//camera
const x = -37.68983166466052
const y = 93.52576546128967
const z = -24.431681355388086
const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000)
camera.position.set(x, y, z)
scene.add(camera)

//camera-lerping
const targetPosition = new Vector3(-4.615946300296653, 11.418237923140756, -2.96037275028072) // Your initial camera position
const currentCameraPosition = new Vector3().copy(camera.position)
const lerpFactor = 0.02 // Adjust this value for the speed of the zoom-in effect
let zoomInProgress = true // Flag to track if the zoom-in is in progress

const loader = new TextureLoader()
const cross = loader.load('/cross.png')

//lights
const directionalLight = new DirectionalLight(0xffffff, 2)

scene.add(directionalLight)

const pointLight = new PointLight(0x11f2ff, 500)
pointLight.position.set(0, 5, 0)
const pointLight2 = new PointLight(0xf03fff, 500)
pointLight2.position.set(0, 10, 0)
scene.add(pointLight)
scene.add(pointLight2)

//stars-paricles
const particlesGeometry = new BufferGeometry()
const particlesCount = 500

const posArray = new Float32Array(particlesCount * 3)

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * (Math.random() * 250)
}

particlesGeometry.setAttribute('position', new BufferAttribute(posArray, 3))

const materials = new PointsMaterial({
  size: 1,
  map: cross,
  transparent: true,
})
const particlesMesh = new Points(particlesGeometry, materials)

scene.add(particlesMesh)

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderConfig({ type: 'js' })
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

//server-model
let model: any
gltfLoader.load('tashi-server-draco/tashi-server.gltf', gltf => {
  model = gltf.scene
  position = model.position.set(-4, 2.5, 2)
  scene.add(model)
  mixer = new AnimationMixer(model)
  const clips = gltf.animations
  const clip = AnimationClip.findByName(clips, 'Animation')
  const action = mixer.clipAction(clip)
  action.play()

  // Start the zoom-in effect when the model is loaded
  startZoomIn()
})

function updateCamera() {
  camera.aspect = aspectRatio.value
  camera.updateProjectionMatrix()
}

function startZoomIn() {
  zoomInProgress = true
}

function updateRenderer() {
  renderer.setSize(width.value, height.value)
  renderer.render(scene, camera)
  composer.setSize(width.value, height.value)
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({
      canvas: experience.value,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: false,
      logarithmicDepthBuffer: true,
    })
    const renderScene = new RenderPass(scene, camera)
    const bloomPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 0.08, 0.5, 0.5)

    const outputPass = new OutputPass()

    composer = new EffectComposer(renderer)
    composer.addPass(renderScene)
    composer.addPass(bloomPass)
    composer.addPass(outputPass)

    renderer.toneMapping = ReinhardToneMapping
    renderer.toneMappingExposure = Math.pow(1, 4.0)

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = true
    controls.enableRotate = true
    updateRenderer()
  }
}

watch(aspectRatio, () => {
  updateCamera()
  updateRenderer()
})

onMounted(() => {
  setRenderer()
  animationLoop()
})
//mouse
document.addEventListener('mousemove', animateParticles)

let mouseX = 0
let mouseY = 0

function animateParticles(event: any) {
  mouseY = event.clientY
  mouseX = event.clientX
}

// star animation

const animationLoop = () => {
  // Calculate delta time since the last frame

  const delta = clock.getDelta()
  const elapsedTime = clock.getElapsedTime()

  particlesMesh.rotation.y = -0.05 * elapsedTime

  // if (mouseX > 0 || mouseY > 0) {
  //   particlesMesh.rotation.y = -mouseY * (elapsedTime * 0.00005)
  //   particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00005)
  // }

  // if (mouseX > 0 || mouseY > 0) {
  //   model.rotation.y = -mouseY * (elapsedTime * 0.00001)
  // }
  // Update the animation mixer with the delta time
  if (mixer) {
    mixer.update(delta)
  }

  if (zoomInProgress) {
    camera.position.lerp(targetPosition, lerpFactor)
    controls.target.lerp(targetPosition, lerpFactor)

    // Check if the camera is close to the target position
    if (camera.position.distanceTo(targetPosition) < 0.1) {
      zoomInProgress = false // Zoom-in is complete
    }
  }

  controls.update()
  updateRenderer()
  composer.render()
  requestAnimationFrame(animationLoop)
}
</script>
<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>
