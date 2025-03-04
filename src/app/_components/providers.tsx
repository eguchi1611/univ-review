"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { PropsWithChildren } from "react";

import { AuthProvider } from "@/components/auth-provider";
import { StoreProvider } from "@/components/store-provider";
import theme from "@/theme";

export function Providers({ children }: PropsWithChildren) {
  return (
    <StoreProvider>
      <AuthProvider>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </AuthProvider>
    </StoreProvider>
  );
}
