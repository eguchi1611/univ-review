"use client";

import { useAppSelector } from "@/lib/hooks";

export function Sample() {
  const session = useAppSelector((state) => state.session.session);

  return (
    <div>
      <h1>Sample</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
