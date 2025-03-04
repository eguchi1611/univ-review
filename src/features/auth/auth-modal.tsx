"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useActionState } from "react";
import GoogleOriginalIcon from "react-devicons/google/original";
import TwitterOriginalIcon from "react-devicons/twitter/original";

import { signIn, signUp } from "./actions";

import { closeAuthModal } from "@/features/auth/auth-modal-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export function AuthModal() {
  const { open, type } = useAppSelector((state) => state.authModal);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeAuthModal());
  };

  const [error, formAction, pending] = useActionState(
    type === "signin" ? signIn : signUp,
    {},
  );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      slotProps={{
        paper: { component: "form" },
      }}
    >
      <DialogTitle>{type === "signin" ? "ログイン" : "新規登録"}</DialogTitle>
      <DialogContent>
        {error.message && (
          <DialogContentText color="error" mb={2} whiteSpace="pre-wrap">
            {error.message}
          </DialogContentText>
        )}
        <Stack spacing={2}>
          <FormControl>
            <FormLabel htmlFor="email">メールアドレス</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@example.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              error={!!error.fieldErrors?.email}
              helperText={error.fieldErrors?.email
                ?.map((error) => error.message)
                .join("\n")}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">パスワード</FormLabel>
            <TextField
              id="password"
              type="password"
              name="password"
              autoComplete={
                type === "signin" ? "current-password" : "new-password"
              }
              required
              fullWidth
              placeholder="********"
              error={!!error.fieldErrors?.password}
              helperText={error.fieldErrors?.password
                ?.map((error) => error.message)
                .join("\n")}
            />
          </FormControl>
        </Stack>
        <Divider sx={{ my: 2 }}>もしくは</Divider>
        <Stack spacing={2}>
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            startIcon={<GoogleOriginalIcon />}
          >
            Googleで続ける
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            startIcon={<TwitterOriginalIcon />}
          >
            Twitterで続ける
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="text" color="inherit">
          閉じる
        </Button>
        <Button type="submit" formAction={formAction} disabled={pending}>
          {type === "signin" ? "ログイン" : "新規登録"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
