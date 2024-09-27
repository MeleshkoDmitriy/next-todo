import { BASE_URL } from "@/actions/api";
import { TodoEditForm } from "@/components/TodoEditForm/TodoEditForm";
import styles from "./EditTaskPage.module.scss";

interface EditTaskPageProps {
  params: { id: number };
}

export default async function EditTaskPage({ params }: EditTaskPageProps) {
  const res = await fetch(`${BASE_URL}/todos/${params.id}`, {
    cache: 'no-store'
  });
  const todo = await res.json();

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <TodoEditForm {...todo} />
        </div>
      </div>
    </main>
  );
}
