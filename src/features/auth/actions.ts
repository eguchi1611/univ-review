"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { createClient } from "@/utils/supabase/server";

import "@/lib/zod-setup";

const inputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

interface ReturnType {
  message?: string;
  fieldErrors?: z.inferFlattenedErrors<
    typeof inputSchema,
    { message: string; code: string }
  >["fieldErrors"];
}

export async function signIn(
  _prevState: unknown,
  formData: FormData,
): Promise<ReturnType> {
  const supabase = await createClient();

  const result = inputSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!result.success) {
    return {
      fieldErrors: result.error.flatten(({ message, code }) => ({
        message,
        code,
      })).fieldErrors,
    };
  }

  const { email, password } = result.data;
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    let message = error.message;
    if (error.code === "invalid_credentials") {
      message = "メールアドレスまたはパスワードが間違っています";
    }
    return { message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signUp(
  _prevState: unknown,
  formData: FormData,
): Promise<ReturnType> {
  const supabase = await createClient();

  const result = inputSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!result.success) {
    return {
      fieldErrors: result.error.flatten(({ message, code }) => ({
        message,
        code,
      })).fieldErrors,
    };
  }

  const { email, password } = result.data;
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { message: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
