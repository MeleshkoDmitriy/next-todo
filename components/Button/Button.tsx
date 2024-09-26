import { useFormStatus } from "react-dom";
import styles from "./Button.module.scss";

export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className={styles.button}>
      {pending ? "Sending..." : "Send"}
    </button>
  );
}
