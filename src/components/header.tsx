"use client";

import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

import {
  openAuthModal,
  setAuthModalType,
} from "@/features/auth/auth-modal-slice";
import { useAppDispatch } from "@/lib/hooks";

export function Header() {
  const dispatch = useAppDispatch();

  const handleOpenSignInAuthModal = () => {
    dispatch(setAuthModalType("signin")); // TODO: ログイン状態を切り替える
    dispatch(openAuthModal());
  };

  const handleOpenSignUpAuthModal = () => {
    dispatch(setAuthModalType("signup")); // TODO: ログイン状態を切り替える
    dispatch(openAuthModal());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box component={NextLink} href="/" sx={{ flexGrow: 1 }}>
          <Image
            alt=""
            src="/logo.svg"
            width={349}
            height={45}
            style={{ height: 24, width: "auto", display: "block" }}
          />
        </Box>
        <Button
          variant="text"
          color="inherit"
          onClick={handleOpenSignInAuthModal}
        >
          ログイン
        </Button>
        <Button
          variant="text"
          color="inherit"
          onClick={handleOpenSignUpAuthModal}
        >
          新規登録
        </Button>
      </Toolbar>
    </AppBar>
  );
}
