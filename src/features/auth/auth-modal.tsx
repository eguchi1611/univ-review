"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";

import { signIn, signUp } from "./actions";

import { closeAuthModal } from "@/features/auth/auth-modal-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export function AuthModal() {
  const { open, type } = useAppSelector((state) => state.authModal);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeAuthModal());
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      slotProps={{
        paper: {
          component: "form",
        },
      }}
    >
      <DialogTitle>{type === "signin" ? "ログイン" : "新規登録"}</DialogTitle>
      <DialogContent>
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
            />
          </FormControl>
        </Stack>
        <Divider sx={{ my: 2 }}>もしくは</Divider>
        <Stack spacing={2}>
          <Button variant="outlined" color="inherit" fullWidth>
            Googleで続ける
          </Button>
          <Button variant="outlined" color="inherit" fullWidth>
            Twitterで続ける
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="text" color="inherit">
          閉じる
        </Button>
        <Button formAction={type === "signin" ? signIn : signUp} type="submit">
          {type === "signin" ? "ログイン" : "新規登録"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
