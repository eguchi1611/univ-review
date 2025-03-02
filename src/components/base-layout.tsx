import { Container } from "@mui/material";
import type { PropsWithChildren } from "react";

import { AuthModal } from "./auth-modal";
import { Header } from "./Header";

export function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <AuthModal />
    </>
  );
}
