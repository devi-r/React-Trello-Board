import styles from "./lists.module.scss";
import React, { useEffect, useState } from "react";
import ListItem from "./listItem/ListItem";
import ListItemInput from "./listItem/ListItemInput";

const Lists = ({
  lists = [],
  listHandlers: { handleAddList = () => {}, handleDeleteList = () => {} },
  cardHandlers = {},
}) => {
  const [dragState, setDragState] = useState({});

  useEffect(() => {
    if (dragState?.hasOwnProperty("newParentId")) {
      cardHandlers?.handleDragCard?.(dragState);
      setDragState({});
    }
  }, [dragState]);

  const dragHandlers = {
    onDrop: (payload) => {
      setDragState((dragState) => ({ ...dragState, ...payload }));
    },

    onDragOver: (e) => {
      e.preventDefault();
    },

    onDrag: (payload) => {
      setDragState((dragState) => ({ ...dragState, ...payload }));
    },
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {lists?.map((listItem, index) => (
          <ListItem
            key={index}
            listIndex={index}
            listItem={listItem}
            handleDeleteList={handleDeleteList}
            cardHandlers={cardHandlers}
            dragHandlers={dragHandlers}
          />
        ))}
      </div>
      <div className={styles.inputWrapper}>
        <ListItemInput handleAddList={handleAddList} />
      </div>
    </section>
  );
};

export default Lists;
