import type { Metadata } from "next";
import React from "react";

import { cn } from "@acme/ui";

import "../globals.css";

export const metadata: Metadata = {
  title: "Praise Beam",
  description: "PraiseBeam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("flex h-screen items-center justify-center")}
      style={{
        background: "#EDF2F9",
      }}
    >
      {children}
    </div>
  );
}
