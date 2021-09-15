import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

const camera, scene, renderer;

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
    const dodecahedron = new THREE.Mesh(dodecahedronGeo, material);

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


function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {
    requestAnimationFrame(animate);

    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.005;

    renderer.render(scene, camera);
}