import styles from "./card.module.scss";
import React, { useState } from "react";
import InputForm from "../../inputForm/InputForm";

const CardInput = ({ parentId = null, handleAddCard = () => {} }) => {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    if (e?.target) {
      setInput((state) => {
        return { ...state, [e.target.name]: e.target.value };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCard({ cardData: input, parentId });
    setInput({
      title: "",
      description: "",
    });
  };

  return (
    <InputForm handleSubmit={handleSubmit} buttonText="Add card">
      <input
        className={styles.cardInput1}
        type="text"
        name="title"
        placeholder="Enter title"
        value={input?.title}
        onChange={handleInputChange}
        required
      />
      <input
        className={styles.cardInput2}
        type="text"
        name="description"
        placeholder="Enter the text for this card..."
        value={input?.description}
        onChange={handleInputChange}
        required
      />
    </InputForm>
  );
};

export default CardInput;
