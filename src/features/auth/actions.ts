"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function signIn(formData: FormData) {
  const supabase = await createClient();

  const { email, password } = Object.fromEntries(formData.entries());

  if (typeof email !== "string" || typeof password !== "string") {
    throw redirect("/error");
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signUp(formData: FormData) {
  const supabase = await createClient();

  const { email, password } = Object.fromEntries(formData.entries());

  if (typeof email !== "string" || typeof password !== "string") {
    throw redirect("/error");
  }

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    throw redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
