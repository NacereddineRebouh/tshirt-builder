"use client";
import { store } from "@/lib/store/store";
import { MantineProvider } from "@mantine/core";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
        colors: {
          stone: [
            "#f7f7f5",
            "#edece7",
            "#d9d7cf",
            "#bab7a6",
            "#a8a28f",
            "#968f79",
            "#897f6d",
            "#736a5b",
            "#5f584d",
            "#4e4940",
          ],
        },
      }}
    >
      <Provider store={store}> {children}</Provider>
    </MantineProvider>
  );
}
