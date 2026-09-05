import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BatLogo3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 16);

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    container.appendChild(renderer.domElement);

    // 3. Exact Vector Contour of Reference Emblem
    const shape = new THREE.Shape();

    // Notch between ears
    shape.moveTo(0, 1.25);

    // Left Ear
    shape.lineTo(-0.18, 1.25);
    shape.lineTo(-0.35, 2.25); // Left Ear Tip
    shape.lineTo(-0.55, 1.05); // Left Base of Ear
    shape.lineTo(-0.75, 0.55); // Neck slope

    // Left Upper Wing Scoop
    shape.bezierCurveTo(-1.8, 0.75, -2.8, 1.9, -3.25, 2.75); // Tall Horn Tip

    // Left Outer Crescent Dip
    shape.bezierCurveTo(-3.8, 1.8, -5.2, 0.45, -6.8, -0.65); // Far Left Wingtip

    // Left Outer Underside Scoop to First Fang
    shape.bezierCurveTo(-5.7, -0.15, -4.5, 0.05, -3.2, -1.55); // First Outer Fang

    // Left Inner Underside Scoop to Tail Point
    shape.bezierCurveTo(-2.2, -0.75, -1.2, -1.15, 0, -3.25); // Needle Tail Tip

    // Right Inner Underside Scoop to First Fang (Mirror)
    shape.bezierCurveTo(1.2, -1.15, 2.2, -0.75, 3.2, -1.55); // Right Outer Fang

    // Right Outer Underside Scoop to Far Right Outer Wingtip
    shape.bezierCurveTo(4.5, 0.05, 5.7, -0.15, 6.8, -0.65); // Far Right Wingtip

    // Right Outer Crescent Rise to Tall Horn Tip
    shape.bezierCurveTo(5.2, 0.45, 3.8, 1.8, 3.25, 2.75); // Tall Horn Tip

    // Right Upper Wing Scoop back to Neck
    shape.bezierCurveTo(2.8, 1.9, 1.8, 0.75, 0.75, 0.55);

    // Right Ear
    shape.lineTo(0.55, 1.05); // Right Base of Ear
    shape.lineTo(0.35, 2.25); // Right Ear Tip
    shape.lineTo(0.18, 1.25);
    shape.lineTo(0, 1.25);    // Close Path

    // 4. Extrude into Chiseled 3D Solid Geometry
    const extrudeSettings = {
      steps: 2,
      depth: 0.65,
      bevelEnabled: true,
      bevelThickness: 0.28,
      bevelSize: 0.18,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    // 5. Snyderverse Metallic Slate / Steel Grey Armor Material (#4F504D)
    const material = new THREE.MeshStandardMaterial({
      color: 0x4F504D, // Metallic Slate / Steel Grey
      metalness: 0.85,
      roughness: 0.32,
      wireframe: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 6. Weathered Brass / Bronze Contour Rim (#8C7A4B)
    const edges = new THREE.EdgesGeometry(geometry, 28);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8C7A4B, // Weathered Brass / Bronze
      transparent: true,
      opacity: 0.9,
    });
    const edgeLines = new THREE.LineSegments(edges, lineMaterial);
    mesh.add(edgeLines);

    // 7. Snyderverse Atmospheric Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x2F302E, 1.8);
    scene.add(ambientLight);

    // Rear Warm Amber Spotlight (#8C7A4B)
    const backGlow = new THREE.PointLight(0x8C7A4B, 28, 50);
    backGlow.position.set(0, 0, -4);
    scene.add(backGlow);

    // Crimson Warehouse Rim Light (#B8321B)
    const crimsonRim = new THREE.PointLight(0xB8321B, 34, 45);
    crimsonRim.position.set(-6, -4, 4);
    scene.add(crimsonRim);

    // Front Key Light (Steel Slate White)
    const frontSpot = new THREE.DirectionalLight(0xF3F4F6, 3.8);
    frontSpot.position.set(5, 6, 8);
    scene.add(frontSpot);

    // 8. Automated Cinematic Rotation
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mesh.rotation.y = elapsedTime * 1.5;
      mesh.rotation.x = Math.sin(elapsedTime * 1.1) * 0.08;
      mesh.position.y = Math.sin(elapsedTime * 2.0) * 0.2;

      // Pulse edge lines with subtle bronze breathing
      lineMaterial.opacity = 0.7 + Math.sin(elapsedTime * 3) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      edges.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center pointer-events-none drop-shadow-[0_0_45px_rgba(184,50,27,0.35)]"
    />
  );
}