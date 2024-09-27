"use server";

import { revalidatePath } from "next/cache";
import { BASE_URL } from "./api";
import { TTodo } from "@/types/types";

export async function addTodo(formData: FormData) {
  const title = formData.get("title");

  try {
    await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}

export async function deleteTodo(id: number) {

  try {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE"
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}

export async function updateTodo(todo: TTodo) {

  try {
    await fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}
