import { BASE_URL } from "@/actions/api";
import styles from "./TaskPage.module.scss";
import TodoItem from "@/components/TodoItem/TodoItem";

interface TaskPageProps {
  params: { id: number };
}

export default async function TaskPage({ params }:TaskPageProps) {
  const res = await fetch(`${BASE_URL}/todos/${params.id}`);
  const todo = await res.json();

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}></div>
        <TodoItem {...todo} />
      </div>
    </main>
  );
}
