"use client";

import { TTodo } from "@/types/types";
// import styles from "./TodoEdit.module.scss";

import { SquareCheckBig } from "lucide-react";
import { useState } from "react";
import { updateTodo } from "@/actions/actions";
import { useRouter } from "next/navigation";

export const TodoEditForm = (todo: TTodo) => {
  const { id, title } = todo;
  const [todoTitle, setTodoTitle] = useState(title);
  const router = useRouter();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  return (
    <form
      action={async () => {
        await updateTodo({ id, title: todoTitle });
        await router.push("/");
      }}
    >
      <input
        type="text"
        value={todoTitle}
        onChange={onChangeHandler}
        required
      />
      <button>
        <SquareCheckBig />
      </button>
    </form>
  );
};
