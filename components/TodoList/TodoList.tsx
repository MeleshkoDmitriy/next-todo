import { BASE_URL } from "@/actions/api";
import styles from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { TTodo } from "@/types/types";
import Link from "next/link";

export default async function TodoList() {
  const res = await fetch(`${BASE_URL}/todos`, {
    next: {
      revalidate: 60,
    },
  });
  const todos = await res.json();

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Todos</h2>
      <div className={styles.list}>
        {todos.map((todo: TTodo) => (
          <Link href={`/tasks/${todo.id}`}>
            <TodoItem {...todo} key={todo.id} />
          </Link>
        ))}
      </div>
    </section>
  );
}
