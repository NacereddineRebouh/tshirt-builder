"use client";
import Scene from "@/components/3D/Scene";
import Configuration from "@/components/Configuration";
export default function Home() {
  return (
    <main
      className={
        "flex w-full h-screen flex-col gap-y-1 items-start justify-start p-24"
      }
    >
      {/* title */}
      <h1 className="text-3xl text-slate-900">
        <span className="font-bold">T-Shirt</span> | ...
      </h1>
      <div className="w-full h-full flex items-start justify-start">
        {/* Left - 3DScene */}
        <div className="w-7/12 h-full bg-teal-700">
          <Scene />
        </div>
        {/* Right - Configurations */}
        <div className="w-5/12 h-full bg-stone-300">
          <Configuration />
        </div>
      </div>
    </main>
  );
}
