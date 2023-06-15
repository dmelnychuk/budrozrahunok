// // script.js

// // Initialize Three.js
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Use an initial aspect ratio of 1
// const renderer = new THREE.WebGLRenderer();
// document.getElementById('canvasContainer').appendChild(renderer.domElement);

// // Function to update renderer size
// function updateRendererSize() {
//   const containerWidth = document.getElementById('canvasContainer').clientWidth;
//   const containerHeight = document.getElementById('canvasContainer').clientHeight;
//   renderer.setSize(containerWidth, containerHeight);
//   camera.aspect = containerWidth / containerHeight;
//   camera.updateProjectionMatrix();
// }

// // Call the function initially
// updateRendererSize();

// // Add objects, lights, etc. to the scene
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Position the camera
// camera.position.z = 5;

// // Render the scene
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }

// animate();

// // Update renderer size when window is resized
// window.addEventListener('resize', updateRendererSize);
