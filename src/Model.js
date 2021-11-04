import React, { useRef } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = () => {
  const modelRef = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    modelRef.current.rotation.y += 0.002;
    modelRef.current.position.x = THREE.MathUtils.lerp(
      modelRef.current.position.x,
      0 - state.mouse.x * 0.05,
      0.02
    );
    modelRef.current.position.y = THREE.MathUtils.lerp(
      modelRef.current.position.y,
      0 - state.mouse.y * 0.05,
      0.02
    );
  });

  const gltf = useLoader(GLTFLoader, "/scene.gltf");
  return (
    <group position={[0, 0.1, 0]} scale={viewport.width / 5}>
      <mesh ref={modelRef}>
        <primitive object={gltf.scene} dispose={null} />
      </mesh>
    </group>
  );
};

export default Model;
