import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export function Icosaedro() {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const autoRotation = useRef({ x: 0.005, y: 0.005 });
  const lastInteractionTime = useRef(Date.now());
  const INACTIVITY_DELAY = 1000; // milissegundos

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      40,
      mount.clientWidth / mount.clientHeight,
      0.5,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Material rubi
    const material = new THREE.MeshStandardMaterial({
      color: "#11f041",
      flatShading: true,
      metalness: 0.8,
      roughness: 0.2,
    });

    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: "#888888" });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    scene.add(wireframe);

    // Luz pontual e ambiente
    const pointLight = new THREE.PointLight("#11f041", 500);
    pointLight.position.set(-4, 0, 20);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight("#0000ff", 1);
    scene.add(ambientLight);

    // Estados de rotação
    let targetRotation = { x: 0, y: 0 };
    let isUserInteracting = false;

    const animate = () => {
      requestAnimationFrame(animate);

      const now = Date.now();
      const timeSinceLastInteraction = now - lastInteractionTime.current;

      if (timeSinceLastInteraction < INACTIVITY_DELAY) {
        // Modo interativo: segue o mouse
        mesh.rotation.x += (mouse.current.y - mesh.rotation.x) * 0.1;
        mesh.rotation.y += (mouse.current.x - mesh.rotation.y) * 0.1;
      } else {
        // Modo automático: rotação contínua
        mesh.rotation.x += autoRotation.current.x;
        mesh.rotation.y += autoRotation.current.y;
      }

      wireframe.rotation.copy(mesh.rotation);
      renderer.render(scene, camera);
    };
    animate();

    const onMouseMove = (event) => {
      const { width, height } = mount.getBoundingClientRect();
      mouse.current.x = ((event.clientX / width) * 2 - 1) * Math.PI;
      mouse.current.y = ((event.clientY / height) * 2 - 1) * Math.PI;
      lastInteractionTime.current = Date.now(); // Atualiza o tempo de interação
    };

    mount.addEventListener("mousemove", onMouseMove);

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      mount.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="icosaedro-container" ref={mountRef}></div>;
}
