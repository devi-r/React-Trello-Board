import styles from "./listItem.module.scss";
import React, { useState } from "react";
import InputForm from "../../inputForm/InputForm";

const ListItemInput = ({ handleAddList = () => {} }) => {
  const [listTitle, setListTitle] = useState("");

  const handleInputChange = (e) => {
    if (e?.target) {
      setListTitle(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    handleAddList(listTitle);
    setListTitle("");
  };

  return (
    <InputForm handleSubmit={handleSubmit} buttonText="Add list">
      <input
        className={styles.listInput}
        type="text"
        name="listTitle"
        placeholder="Enter list title..."
        value={listTitle}
        onChange={handleInputChange}
        required
      />
    </InputForm>
  );
};

export default ListItemInput;
