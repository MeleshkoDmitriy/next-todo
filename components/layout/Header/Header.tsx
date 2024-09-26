import Link from "next/link";
import styles from "./Header.module.scss";

import { LogIn, Search, CircleUserRound, ListTodo } from "lucide-react";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <ListTodo strokeWidth={1} />
            </Link>
          </div>
          <div className={styles.menu}>
            <LogIn strokeWidth={1} />
            <Search strokeWidth={1} />
            <CircleUserRound strokeWidth={1} />
          </div>
        </div>
      </div>
    </header>
  );
}
