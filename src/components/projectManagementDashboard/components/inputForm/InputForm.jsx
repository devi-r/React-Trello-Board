import styles from "./inputForm.module.scss";
import React from "react";

const InputForm = ({
  children = null,
  buttonText = "",
  handleSubmit = () => {},
}) => {
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.children}>{children}</div>
      <button className={styles.button} type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default InputForm;
