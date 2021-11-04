import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const modelRef = useRef();
  useFrame(() => (modelRef.current.rotation.y += 0.005));

  const gltf = useLoader(GLTFLoader, "/scene.gltf");
  return (
    <group position={[0, -2.5, 0]}>
      <mesh ref={modelRef} position={[0, 0, 0]}>
        <primitive object={gltf.scene} dispose={null} />
      </mesh>
    </group>
  );
};

export default Model;
