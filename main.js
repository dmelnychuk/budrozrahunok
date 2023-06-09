import {
  Camera,
  Material,
  Texture,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  BoxBufferGeometry,
  Color
} from "https://cdn.skypack.dev/three@0.132.2";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

import { getFoundationSize } from './foundation.js';

// Initialize Three.js
const scene = new Scene();
scene.background = new Color('whitesmoke');

const camera = new PerspectiveCamera(75, 1, 0.1, 1000); // Use an initial aspect ratio of 1
const renderer = new WebGLRenderer();
document.getElementById('canvasContainer').appendChild(renderer.domElement);

// Function to update renderer size
function updateRendererSize() {
  const containerWidth = document.getElementById('canvasContainer').clientWidth;
  const containerHeight = document.getElementById('canvasContainer').clientHeight;
  renderer.setSize(containerWidth, containerHeight);
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
}

// Call the function initially
updateRendererSize();

// Add objects, lights, etc. to the scene
const geometry = new BoxBufferGeometry(1, 1, 1, 9, 9, 9);
const material = new MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new Mesh(geometry, material);
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Animation variables
let animationId = null;

// Render the scene
function renderScene() {
  const foundationSize = getFoundationSize();
  const width = foundationSize.fdwidth;
  const length = foundationSize.fdlength;
  const depth = foundationSize.fddepth;

  cube.scale.set(width, length, depth);
  renderer.render(scene, camera);
}

// Animation function
function animate() {
  animationId = requestAnimationFrame(animate);
  cube.rotation.x += 0;
  cube.rotation.y += 0;
  renderScene();
}

// Update renderer size when window is resized
window.addEventListener('resize', updateRendererSize);

// Trigger the scene rendering and animation when the "Calculate" button is clicked
window.addEventListener('click', () => {
  renderScene();
  if (!animationId) {
    animate();
  }
});


const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  animationId = requestAnimationFrame(animate);
  cube.rotation.x += 0;
  cube.rotation.y += 0;

  // Update the controls
  controls.update();

  renderScene();
}
