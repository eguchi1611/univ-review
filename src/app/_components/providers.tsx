"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { PropsWithChildren } from "react";

import { StoreProvider } from "@/components/store-provider";
import theme from "@/theme";

export function Providers({ children }: PropsWithChildren) {
  return (
    <StoreProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </StoreProvider>
  );
}
