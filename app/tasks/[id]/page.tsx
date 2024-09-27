import { BASE_URL } from "@/actions/api";
import styles from "./TaskPage.module.scss";
import TodoItem from "@/components/TodoItem/TodoItem";

import { SquarePen } from "lucide-react";
import Link from "next/link";

interface TaskPageProps {
  params: { id: number };
}

export default async function TaskPage({ params }: TaskPageProps) {
  const res = await fetch(`${BASE_URL}/todos/${params.id}`, {
    cache: 'no-store'
  });
  const todo = await res.json();

  if (!todo) {
    return <div>Task not found</div>;
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}></div>
        <TodoItem {...todo} />
        <Link href={`/tasks/${params.id}/edit`}>
          <SquarePen />
        </Link>
      </div>
    </main>
  );
}
