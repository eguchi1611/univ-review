import { Container } from "@mui/material";
import type { PropsWithChildren } from "react";

import { Header } from "./header";

export function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
