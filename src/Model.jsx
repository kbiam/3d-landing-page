import { OrbitControls } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh, Box3, Vector3 } from 'three';
import gsap from 'gsap';

function Model() {
    const gltf = useLoader(GLTFLoader, "/black_chair.glb");
    const modelRef = useRef();
    const floatAmplitude = 0.2;
    const floatSpeed = 1.5;

    let currentScroll = 0;
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Initialize and animate model
    useEffect(() => {
        if (gltf.scene) {
            const box = new Box3().setFromObject(gltf.scene);
            const center = box.getCenter(new Vector3());
            gltf.scene.position.sub(center);

            gltf.scene.rotation.set(0, 0.5, 0);

            gltf.scene.scale.set(0, 0, 0);
            gsap.to(gltf.scene.scale, {
                x: 0.5,
                y: 0.5,
                z: 0.5,
                duration: 1.5,
                ease: "power2.out",
            });

            gltf.scene.traverse((object) => {
                if (object instanceof Mesh) {
                    object.castShadow = true;
                    object.receiveShadow = true;
                    if (object.material) {
                        object.material.metalness = 2;
                        object.material.roughness = 1;
                        object.material.envMapIntensity = 5;
                    }
                }
            });
        }

        const handleScroll = () => {
            currentScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [gltf]);

    // Animate model based on scroll and floating effect
    useFrame(() => {
        if (gltf.scene) {
            const floatOffset = Math.sin(Date.now() * 0.001 * floatSpeed) * floatAmplitude;
            gltf.scene.position.y = floatOffset;

            const scrollProgress = Math.min(currentScroll / totalScrollHeight, 1);
            const baseTilt = 0.5;
            gltf.scene.rotation.x = scrollProgress * Math.PI * 4 + baseTilt;
        }
    });

    return (
        <>
            <primitive ref={modelRef} object={gltf.scene} />
            {/* Uncomment OrbitControls for debugging */}
            {/* <OrbitControls target={[0, 0.35, 0]} /> */}
        </>
    );
}

export default Model;
