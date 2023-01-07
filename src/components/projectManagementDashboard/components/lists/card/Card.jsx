import React from "react";
import styles from "./card.module.scss";

const Card = ({
  cardIndex = null,
  cardData: { id = null, title = "", description = "", parentId = null },
  onDrag = () => {},
  onDrop = () => {},
  draggable = true,
  handleDeleteCard = () => {},
}) => {
  return (
    <div
      className={styles.wrapper}
      draggable={draggable}
      onDragStart={onDrag}
      onDrop={onDrop}
    >
      {!isNaN(id) ? (
        <>
          <span
            className={styles.closeIcon}
            onClick={() => handleDeleteCard({ cardIndex, parentId })}
          >
            &times;
          </span>

          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </>
      ) : null}
    </div>
  );
};

export default Card;
