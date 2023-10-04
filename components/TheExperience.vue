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
} from 'three'

import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

import { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

let renderer: WebGLRenderer
let controls: OrbitControls
let mixer: any
let position: any
let composer: any
const params = {
  threshold: 0.8,
  strength: 1,
  radius: 1,
  exposure: 1,
}
const clock = new Clock()
const experience = ref<HTMLCanvasElement | null>(null)

const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value)

const scene = new Scene()
scene.fog = new FogExp2(0x0000ff, 0.001)
scene.add(new AmbientLight(0xff68ff))

//camera
const x = -8.411034952096102
const y = 7.221221819001871
const z = -2.8261805545029453
const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000)
camera.position.set(x, y, z)
scene.add(camera)

const loader = new TextureLoader()
const cross = loader.load('/cross.png')

//lights
const directionalLight = new DirectionalLight(0xffffff, 2)
scene.add(directionalLight)

const pointLight = new PointLight(0x11f2ff, 2)
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
  size: 2.5,
  map: cross,
  transparent: true,
})
const particlesMesh = new Points(particlesGeometry, materials)

scene.add(particlesMesh)

//server-model
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderConfig({ type: 'js' })
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

let model: any
gltfLoader.load('tashi-server-draco/tashi-server.gltf', gltf => {
  model = gltf.scene
  position = model.position.set(-4, 2.5, 2)
  model.receiveShadow = false
  scene.add(model)
  mixer = new AnimationMixer(model)
  const clips = gltf.animations
  const clip = AnimationClip.findByName(clips, 'Animation')
  const action = mixer.clipAction(clip)
  action.play()
})

function updateCamera() {
  camera.aspect = aspectRatio.value
  camera.updateProjectionMatrix()
}

function updateRenderer() {
  renderer.setSize(width.value, height.value)
  renderer.render(scene, camera)
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value, alpha: true, antialias: true })
    const renderScene = new RenderPass(scene, camera)
    const bloomPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 1.5, 0.1, 0.1)
    bloomPass.threshold = params.threshold
    bloomPass.strength = params.strength
    bloomPass.radius = params.radius

    composer = new EffectComposer(renderer)
    composer.addPass(renderScene)
    composer.addPass(bloomPass)

    renderer.toneMapping = ReinhardToneMapping
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
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

  composer.render()
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

  controls.update()
  updateRenderer()
  requestAnimationFrame(animationLoop)
}
</script>
<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>
