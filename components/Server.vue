<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  PointLight,
  AnimationMixer,
  AnimationClip,
  Vector2,
  ReinhardToneMapping,
  Vector3,
  Clock,
} from 'three'

import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
// @ts-ignore
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'
import { useWindowSize } from '@vueuse/core'

let renderer: WebGLRenderer
let controls: OrbitControls
let mixer: any
let composer: any
const clock = new Clock()

const experience = ref<HTMLCanvasElement | null>(null)

const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value)

const scene = new Scene()

//camera
const x = 0
const y = 10
const z = 0
const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000)
camera.position.set(x, y, z)
scene.add(camera)

//lights
const directionalLight = new DirectionalLight(0xffffff, 2)

scene.add(directionalLight)

const pointLight = new PointLight(0x11f2ff, 500)
pointLight.position.set(0, 5, 0)
const pointLight2 = new PointLight(0xf03fff, 500)
pointLight2.position.set(0, 10, 0)
scene.add(pointLight)
scene.add(pointLight2)
//--end lights

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderConfig({ type: 'js' })
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

//server-model
let model: any
gltfLoader.load('tashi-server-draco/tashi-server.gltf', gltf => {
  model = gltf.scene

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
  composer.setSize(width.value, height.value)
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({
      canvas: experience.value,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
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

// star animation

const animationLoop = () => {
  // Calculate delta time since the last frame
  console.log(camera.position)
  const delta = clock.getDelta()
  const elapsedTime = clock.getElapsedTime()

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
  composer.render()
  requestAnimationFrame(animationLoop)
}
</script>

<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>
