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


  // script.js

// Initialize Three.js
const scene = new Scene();
scene.background = new Color ('aqua');

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
const geometry = new BoxBufferGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new Mesh(geometry, material);
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

// Update renderer size when window is resized
window.addEventListener('resize', updateRendererSize);
