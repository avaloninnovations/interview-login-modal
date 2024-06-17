import React from "react";
import styles from "./LoginModal.module.scss";

type Props = {
    isOpen: boolean;
};

function LoginModal({ isOpen }: Props) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlayContainer}>
      <form
        className={styles.container}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Login</h2>
        <p>
          <label className={styles.label}>Username: </label>
          <input type="text" />
        </p>
        <p>
          <label className={styles.label}>Password: </label>
          <input type="password" />
        </p>
        <button type="submit" className={styles.submitButton}>Let me in</button>
        <button className={styles.closeButton}>
          X
        </button>
      </form>
    </div>
  );
}

export default LoginModal;