"use client";

import { addTodo } from "@/actions/actions";
import Button from "../Button/Button";
import { useRef } from "react";
import styles from "./Form.module.scss";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await addTodo(formData);
        ref.current?.reset();
      }}
      className={styles.form}
    >
      <input
        type="text"
        placeholder="Enter your todo..."
        name="title"
        required
        className={styles.input}
      />
      <Button />
    </form>
  );
}
