"use client";

import { FC, PropsWithChildren } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";

export const Lenis: FC<PropsWithChildren> = ({ children }) => (
  <ReactLenis root>{children}</ReactLenis>
);
