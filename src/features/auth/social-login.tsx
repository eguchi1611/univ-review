import { Button, Stack } from "@mui/material";
import GitHubOriginalIcon from "react-devicons/github/original";
import GoogleOriginalIcon from "react-devicons/google/original";
import TwitterOriginalIcon from "react-devicons/twitter/original";

import { signInWithProvider } from "./actions";

export function SocialLogin() {
  return (
    <Stack spacing={2} component="form">
      <Button
        variant="outlined"
        color="info"
        fullWidth
        startIcon={<GoogleOriginalIcon />}
        onClick={() => signInWithProvider("google")}
      >
        Googleで続ける
      </Button>
      <Button
        variant="outlined"
        color="info"
        fullWidth
        startIcon={<TwitterOriginalIcon />}
        onClick={() => signInWithProvider("twitter")}
      >
        Twitterで続ける
      </Button>
      <Button
        variant="outlined"
        color="info"
        fullWidth
        startIcon={<GitHubOriginalIcon />}
        onClick={() => signInWithProvider("github")}
      >
        GitHubで続ける
      </Button>
    </Stack>
  );
}
