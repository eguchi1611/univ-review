import { Button, Stack } from "@mui/material";
import GitHubOriginalIcon from "react-devicons/github/original";
import GoogleOriginalIcon from "react-devicons/google/original";
import TwitterOriginalIcon from "react-devicons/twitter/original";

export function SocialLogin() {
  return (
    <Stack spacing={2}>
      <Button
        variant="outlined"
        color="info"
        fullWidth
        startIcon={<GoogleOriginalIcon />}
      >
        Googleで続ける
      </Button>
      <Button
        variant="outlined"
        color="info"
        fullWidth
        startIcon={<TwitterOriginalIcon />}
      >
        Twitterで続ける
      </Button>
      <Button
        variant="outlined"
        color="info"
        fullWidth
        startIcon={<GitHubOriginalIcon />}
      >
        GitHubで続ける
      </Button>
    </Stack>
  );
}
