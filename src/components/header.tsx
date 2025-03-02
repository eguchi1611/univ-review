"use client";

import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

import {
  openAuthModal,
  setAuthModalType,
} from "@/features/auth/auth-modal-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export function Header() {
  const dispatch = useAppDispatch();

  const handleOpenSignInAuthModal = () => {
    dispatch(setAuthModalType("signin"));
    dispatch(openAuthModal());
  };

  const handleOpenSignUpAuthModal = () => {
    dispatch(setAuthModalType("signup"));
    dispatch(openAuthModal());
  };

  const handleSignOutClick = () => {
    supabase.auth.signOut();
  };

  const session = useAppSelector((state) => state.session.session);

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
        {session ? (
          <Button variant="text" color="inherit" onClick={handleSignOutClick}>
            ログアウト
          </Button>
        ) : (
          <>
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
