"use client";
import colorShades from "@/lib/colors";
import {
  selectModelMaterial,
  setModelMaterial,
} from "@/lib/slices/targetSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { Tabs, ColorInput, Accordion, NumberInput } from "@mantine/core";
import React, { useState } from "react";
import { FaCubes, FaPalette } from "react-icons/fa";
import { Color, MeshPhysicalMaterial } from "three";

type Props = {};

export default function Configuration({}: Props) {
  const ModelMaterial = useAppSelector(selectModelMaterial);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full">
      <Tabs color="stone.6" variant="pills" radius="xs" defaultValue="colors">
        <Tabs.List>
          <Tabs.Tab
            value="model"
            className="text-lg !px-8 !py-2"
            disabled
            icon={<FaCubes size="1rem" />}
          >
            Model
          </Tabs.Tab>
          <Tabs.Tab
            value="colors"
            className="text-lg !px-8 !py-2"
            icon={<FaPalette size="1rem" />}
          >
            Colors
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="model" pt="xs">
          Model tab content
        </Tabs.Panel>

        <Tabs.Panel
          className="p-8 gap-y-2 flex flex-col items-start justify-start"
          value="colors"
          pt="xl"
        >
          <Accordion defaultValue="Color" className="w-full">
            {ModelMaterial &&
              Object.keys(ModelMaterial)?.map((material: any, index: any) => {
                return (
                  <Accordion.Item value={material} key={index}>
                    <Accordion.Control>{material}</Accordion.Control>
                    <Accordion.Panel>
                      <ColorInput
                        key={index}
                        placeholder="Pick color"
                        label={"Color"}
                        radius={"xs"}
                        value={
                          "#" +
                          (
                            ModelMaterial[
                              material
                            ] as unknown as MeshPhysicalMaterial
                          ).color.getHexString()
                        }
                        swatches={colorShades}
                        onChange={(color) => {
                          const rgbColor = new Color(color);
                          const tempMaterial = { ...ModelMaterial };
                          (
                            tempMaterial[
                              material
                            ] as unknown as MeshPhysicalMaterial
                          ).color.setRGB(rgbColor.r, rgbColor.g, rgbColor.b);
                          dispatch(setModelMaterial(tempMaterial));
                        }}
                      />
                      <NumberInput
                        defaultValue={0}
                        placeholder="Metalness"
                        label="Metalness"
                        min={0}
                        max={1}
                        step={0.1}
                        precision={1}
                        onChange={(value) => {
                          const tempMaterial = { ...ModelMaterial };
                          if (typeof value == "number")
                            (
                              tempMaterial[
                                material
                              ] as unknown as MeshPhysicalMaterial
                            ).metalness = value;
                          dispatch(setModelMaterial(tempMaterial));
                        }}
                      />
                      <NumberInput
                        defaultValue={1}
                        placeholder="Roughness"
                        label="Roughness"
                        min={0}
                        max={1}
                        step={0.1}
                        precision={1}
                        onChange={(value) => {
                          const tempMaterial = { ...ModelMaterial };
                          if (typeof value == "number")
                            (
                              tempMaterial[
                                material
                              ] as unknown as MeshPhysicalMaterial
                            ).roughness = value;
                          dispatch(setModelMaterial(tempMaterial));
                        }}
                      />
                    </Accordion.Panel>
                  </Accordion.Item>
                );
              })}
          </Accordion>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
