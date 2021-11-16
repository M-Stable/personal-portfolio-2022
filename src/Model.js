import React, { useRef } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const modelRef = useRef();
  const { viewport } = useThree();

  const { scene } = useLoader(GLTFLoader, "/scene.gltf");
  const group = useRef();
  // const [mixer] = useState(() => new THREE.AnimationMixer());
  // useEffect(() => {
  //   mixer.clipAction(animations[3], group.current).play();
  // }, [animations, mixer]);
  useFrame(({ clock }) => {
    // modelRef.current.rotation.y += 0.005;
    modelRef.current.rotation.y = window.scrollY / 100;
    modelRef.current.position.x = window.scrollY / 50;
    modelRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.2;
    // mixer.update(delta);
  });

  return (
    <group ref={group} position={[0, -0.2, 0]} scale={viewport.width / 10}>
      <mesh ref={modelRef}>
        <primitive object={scene} dispose={null} />
      </mesh>
    </group>
  );
};

export default Model;
