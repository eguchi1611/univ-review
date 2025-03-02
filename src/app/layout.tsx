import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import type { PropsWithChildren } from "react";

import { AuthProvider } from "@/components/auth-provider";
import { BaseLayout } from "@/components/base-layout";
import { StoreProvider } from "@/components/store-provider";
import theme from "@/theme";

import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body className={roboto.variable}>
        <StoreProvider>
          <AuthProvider>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <BaseLayout>{children}</BaseLayout>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
