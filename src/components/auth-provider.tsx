"use client";

import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import { setSession } from "@/features/auth/session-slice";
import { useAppDispatch } from "@/lib/hooks";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export function AuthProvider({ children }: PropsWithChildren) {
  const dispath = useAppDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispath(setSession(session));
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispath(setSession(session));
    });

    return () => void subscription.unsubscribe();
  }, [dispath]);

  return <>{children}</>;
}
