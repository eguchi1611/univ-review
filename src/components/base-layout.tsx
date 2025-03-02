import { Container } from "@mui/material";
import type { PropsWithChildren } from "react";

import { Header } from "./header";

import { AuthModal } from "@/features/auth/auth-modal";

export function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <AuthModal />
    </>
  );
}
