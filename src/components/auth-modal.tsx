"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

import { closeAuthModal } from "@/features/auth/auth-modal-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export function AuthModal() {
  const open = useAppSelector((state) => state.authModal.open);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeAuthModal());
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>ログイン</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
}
