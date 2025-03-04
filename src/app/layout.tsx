import { Roboto } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Providers } from "./_components/providers";

import { BaseLayout } from "@/components/base-layout";

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
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
