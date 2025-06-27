'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SphereProps {
    className?: string;
    style?: React.CSSProperties;
}

const RotatingWireframeSphere: React.FC<SphereProps> = ({ className = '', style }) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#1A1818');

        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // ❗ Clear previous canvas on hot reload / refresh
        mountRef.current.innerHTML = '';
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const geometry = new THREE.IcosahedronGeometry(2, 1);
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xEE2A6D,
            transparent: true,
            opacity: 0.8,
        });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);

        const vertices = geometry.attributes.position.array;
        const dotGeometry = new THREE.SphereGeometry(0.03, 8, 8);
        const dotMaterial = new THREE.MeshBasicMaterial({
            color: 0xEE2A6D,
            transparent: true,
            opacity: 0.9,
        });

        const dotsGroup = new THREE.Group();
        for (let i = 0; i < vertices.length; i += 3) {
            const dot = new THREE.Mesh(dotGeometry, dotMaterial);
            dot.position.set(vertices[i], vertices[i + 1], vertices[i + 2]);
            dotsGroup.add(dot);
        }

        const sphereGroup = new THREE.Group();
        sphereGroup.add(wireframe);
        sphereGroup.add(dotsGroup);
        scene.add(sphereGroup);

        const animate = () => {
            frameRef.current = requestAnimationFrame(animate);
            sphereGroup.rotation.x += 0.002;
            sphereGroup.rotation.y += 0.003;
            sphereGroup.rotation.z += 0.001;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            if (!mountRef.current) return;
            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className={`w-full h-full ${className}`}
            style={style}
        />
    );
};

export default RotatingWireframeSphere;
