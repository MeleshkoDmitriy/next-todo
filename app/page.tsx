import Form from '@/components/Form/Form'
import styles from './page.module.css'
import TodoList from '@/components/TodoList/TodoList'

export default function Home () {
  return (
    <main className={styles.main}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Form />
          <TodoList />
        </div>
      </div>
    </main>
  )
}