import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

export function Header() {
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
        <Button variant="text" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
