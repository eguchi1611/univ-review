"use client";

import { useRef } from "react";
import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { makeStore } from "@/lib/store";
import type { AppStore } from "@/lib/store";

export function StoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    // storeRef.current.dispatch(initializeCount(count));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
