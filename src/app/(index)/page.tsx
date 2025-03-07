import { Button } from "@mui/material";

import { createClient } from "@/utils/supabase/server";

export default async function IndexPage() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <div>
      <h1>Index Page</h1>
      <p>Hello, {data.user?.email}</p>
      <div>
        <Button>Hello</Button>
      </div>
    </div>
  );
}
