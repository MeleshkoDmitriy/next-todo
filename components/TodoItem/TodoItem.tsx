import { TTodo } from "@/types/types";
import styles from "./TodoItem.module.scss";
// import { SquarePen } from 'lucide-react'
import { DeleteButton } from "../DeleteButton/DeleteButton";

export default function TodoItem(todo: TTodo) {
  const { title, id } = todo;

  return (
      <div className={styles.wrapper}>
        <span className={styles.text}>{title}</span>
        {/* <SquarePen strokeWidth={1} /> */}
        <DeleteButton id={id} />
      </div>
  );
}
