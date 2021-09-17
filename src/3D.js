import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

var camera, scene, renderer;
var dodecahedron;

init();
animate();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg")
    })

    const material = new THREE.MeshStandardMaterial({ color: 0x007bff, wireframe: false });

    const dodecahedronGeo = new THREE.DodecahedronGeometry(10);
    dodecahedron = new THREE.Mesh(dodecahedronGeo, material);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.setZ(30);
    const pointLight = new THREE.PointLight(0xffffff);
    const pointLight2 = new THREE.PointLight(0xffffff);
    pointLight.position.set(30, 30, 5)
    pointLight2.position.set(30, 0, 5)

    scene.add(dodecahedron);
    scene.add(pointLight, pointLight2);
    renderer.setClearColor(0x001a3d, 1);
}

window.addEventListener('resize', onWindowResize, false);
window.addEventListener("mousemove", onmousemove, false);

var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // it's up to you how you will create THREE.Plane(), there are several methods
var raycaster = new THREE.Raycaster(); //for reuse
var mouse = new THREE.Vector2(); //for reuse
var intersectPoint = new THREE.Vector3(); //for reuse

function onmousemove(event) {
    //get mouse coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera); //set raycaster
    raycaster.ray.intersectPlane(plane, intersectPoint); // find the point of intersection
    dodecahedron.lookAt(intersectPoint); // face our arrow to this point

    dodecahedron.position.x += mouse.x * 0.2;
    dodecahedron.position.y += mouse.y * 0.2;

    dodecahedron.rotation.z = mouse.x - mouse.y;
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}