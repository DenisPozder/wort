"use client";

import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider(props) {
  const { children, ...restProps } = props;

  return <NextThemeProvider {...restProps}>{children}</NextThemeProvider>;
}
