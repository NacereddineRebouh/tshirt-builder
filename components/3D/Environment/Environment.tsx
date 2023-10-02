"use client";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  ContactShadows,
  OrbitControls,
  OrbitControlsProps,
  Stats,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import React, { useRef } from "react";
import Lights from "./Lights";
import { Vector3 } from "three";

type Props = {};

export default function Environment({}: Props) {
  const orbitRef = useRef<any>(null);
  return (
    <>
      {/* <Stats /> */}
      <Perf />
      <Lights />
      <OrbitControls
        ref={orbitRef}
        enablePan={false}
        enableZoom={false}
        enableDamping
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxAzimuthAngle={Math.PI / 2}
      />
      {/* <AdaptiveDpr />
      <AdaptiveEvents /> */}
      <ContactShadows
        position={[0, -0.45, 0]}
        opacity={0.75}
        scale={4}
        blur={2.5}
        far={4}
      />
    </>
  );
}
