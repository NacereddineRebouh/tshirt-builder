"use client";
// import { useAppSelector } from "@/state/hook";
import {
  Instance,
  Instances,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Stage,
  Stats,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Elastic, Expo, Power1, gsap } from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Color, Group, Mesh, MeshStandardMaterial, Vector3 } from "three";
import Environment from "./Environment/Environment";
import { Shirt2 } from "./models/SHIRT2";

function Box(props: any) {
  const mesh = useRef<Mesh>(null);
  const meshMaterial = useRef<MeshStandardMaterial>(null);
  useFrame((state, delta) => {
    if (mesh?.current?.rotation) mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh castShadow receiveShadow {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial ref={meshMaterial} color={props.color} />
    </mesh>
  );
}

type Props = {
  model?: Group;
};

export default function Scene({ model }: Props) {
  const shirt = useRef<any>(null);
  useLayoutEffect(() => {
    gsap.to(shirt.current, {
      rotation: "540",
    });
  }, []);
  return (
    <>
      <Canvas className="flex-1 w-full h-full">
        <Environment />
        <Stage environment="city" intensity={0.6}>
          <Shirt2 ref={shirt} rotation={[0, Math.PI, 0]} />
        </Stage>
        <PerspectiveCamera
          makeDefault={true}
          // target
          position={[0, 1, -10]}
          // lookAt={new Vector3(0, 0, 0)}
          fov={25}
          onWheel={() => {
            // if(cameraRef.current){
            //   cameraRef.current.
            // }
          }}
        />
        {/* <PresentationControls
          config={{ mass: 2, tension: 200 }}
          snap={true}
          cursor
          speed={3}
          rotation={[0, 0, 0]}
          polar={[0, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          {/* <Box position={[-1.2, 0.5, 0]} />
        <Box position={[1.2, 0.5, 0]} /> */}
        {/* <Shirt /> */}
        {/* </PresentationControls> */}
      </Canvas>
    </>
  );
}
