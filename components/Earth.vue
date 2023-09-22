<script setup lang="ts">
import { Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight, AmbientLight, PointLight } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useWindowSize } from '@vueuse/core'
import MapData from './MapData.json'

let renderer: WebGLRenderer
let controls: OrbitControls
const experience = ref<HTMLCanvasElement | null>(null)

const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value)

const scene = new Scene()

//lights
const directionalLight = new DirectionalLight(0xffffff, 2)
scene.add(directionalLight)

const pointLight = new PointLight(0x11f2ff, 2)
pointLight.position.set(0, 5, 0)
const pointLight2 = new PointLight(0xf03fff, 500)
pointLight2.position.set(0, 10, 0)
scene.add(pointLight)
scene.add(pointLight2)
scene.add(new AmbientLight(0xff68ff))

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000)
camera.position.set(4, 4, 4)
scene.add(camera)

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderConfig({ type: 'js' })
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

let model: any
gltfLoader.load('tashi-earth/earth.gltf', gltf => {
  model = gltf.scene
  model.position.set(0, 0, 0)
  scene.add(model)
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

    // const bloomPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 1.5, 0.1, 0.1)
    // bloomPass.threshold = params.threshold
    // bloomPass.strength = params.strength
    // bloomPass.radius = params.radius

    // composer = new EffectComposer(renderer)
    // composer.addPass(renderScene)
    // composer.addPass(bloomPass)

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

const animationLoop = () => {
  controls.update()
  updateRenderer()
  requestAnimationFrame(animationLoop)
  model.rotation.y += 0.01
}
</script>
<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>
