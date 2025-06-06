"use client";

import { Box, Divider } from "@mui/material";
import { useActionState } from "react";

import { AuthTabs } from "@/components/auth-tabs";
import { signUp } from "@/features/auth/actions";
import { AuthForm } from "@/features/auth/auth-form";
import { SocialLogin } from "@/features/auth/social-login";

export default function SignUpPage() {
  const [state, formAction, pending] = useActionState(signUp, {
    status: "pending",
  });

  const errors = state.status === "error" ? state.fieldErrors || {} : {};

  return (
    <Box maxWidth="sm" mx="auto">
      <AuthTabs />
      {state.status === "error" && (
        <Box mt={2} color="error.main">
          {state.status === "error" && state.message}
        </Box>
      )}
      <Box mt={2} component="form" action={formAction}>
        <AuthForm type="signup" errors={errors} disabled={pending} />
      </Box>
      <Divider sx={{ my: 2 }}>または</Divider>
      <SocialLogin />
    </Box>
  );
}
