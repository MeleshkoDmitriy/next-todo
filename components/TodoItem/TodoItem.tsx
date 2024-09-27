import { TTodo } from "@/types/types";
import styles from "./TodoItem.module.scss";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import Link from "next/link";

export default function TodoItem(todo: TTodo) {
  const { title, id } = todo;

  return (
    <div className={styles.wrapper}>
      <Link href={`/tasks/${todo.id}`} key={todo.id}>
        <span className={styles.text}>{title}</span>
      </Link>
      {/* <SquarePen strokeWidth={1} /> */}
      <DeleteButton id={id} />
    </div>
  );
}
