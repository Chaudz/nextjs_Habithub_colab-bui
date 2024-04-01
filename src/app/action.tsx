"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createPost(id: string) {
  try {
    // Call database
    console.log("+++++");
  } catch (error) {
    // Handle errors
  }

  revalidatePath("/posts"); // Update cached posts
  redirect(`/possdfat/${id}`); // Navigate to the new post page
}
