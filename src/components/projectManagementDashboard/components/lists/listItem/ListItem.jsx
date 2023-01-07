import styles from "./listItem.module.scss";
import React from "react";
import Header from "../../Header";
import Card from "../card/Card";
import CardInput from "../card/CardInput";

const ListItem = ({
  listIndex = null,
  listItem: { id = null, title = "", cards = [] },
  handleDeleteList = () => {},
  cardHandlers: { handleAddCard = () => {}, handleDeleteCard = () => {} },
  dragHandlers: { onDrop = () => {}, onDragOver = () => {}, onDrag = () => {} },
}) => {
  return (
    <div
      className={styles.container}
      onDrop={() => onDrop({ newParentId: id })}
      onDragOver={onDragOver}
    >
      <Header customWrapperStyle={styles.header}>
        <div className={styles.title}>{title}</div>
        <span
          className={styles.closeIcon}
          onClick={() => handleDeleteList({ listIndex })}
        >
          &times;
        </span>
      </Header>

      {cards?.map((card, index) => (
        <Card
          key={index}
          cardIndex={index}
          parentId={id}
          draggable={true}
          cardData={card}
          onDrop={() => onDrop({ cardCurrentIndex: index })}
          onDrag={() =>
            onDrag({ cardCurrentIndex: index, currentParentId: id })
          }
          handleDeleteCard={handleDeleteCard}
        />
      ))}

      <div className={styles.inputWrapper}>
        <CardInput handleAddCard={handleAddCard} parentId={id} />
      </div>
    </div>
  );
};

export default ListItem;
