import { Environment, useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { SpotLight, SpotLightHelper } from "three";

type Props = {};

export default function Lights({}: Props) {
  const light = useRef<any>(null);
  const light2 = useRef<any>(null);
  // useHelper(light, SpotLightHelper, "black");
  // useHelper(light2, SpotLightHelper, "black");
  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="studio" />
      {/* <spotLight
        ref={light}
        position={[20, 20, 20]}
        angle={25}
        penumbra={1}
        intensity={1.4}
        shadow-mapSize={2048}
        castShadow
      />
      <spotLight
        ref={light2}
        position={[0, 20, -20]}
        angle={25}
        penumbra={1}
        intensity={1.4}
        shadow-mapSize={2048}
        castShadow
      /> */}
      {/* <ambientLight /> */}
      <pointLight position={[10, 10, 10]} />
    </>
  );
}
