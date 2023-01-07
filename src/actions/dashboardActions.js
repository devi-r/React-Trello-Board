export const ADD_LIST = "ADD_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const UPDATE_CARD_DRAG_STATUS = "UPDATE_CARD_DRAG_STATUS";

export const addList = (payload) => {
  return {
    type: ADD_LIST,
    payload,
  };
};

export const deleteList = (payload) => {
    console.log({payload})
  return {
    type: DELETE_LIST,
    payload,
  };
};

export const addCard = (payload) => {
  return {
    type: ADD_CARD,
    payload,
  };
};

export const deleteCard = (payload) => {
  return {
    type: DELETE_CARD,
    payload,
  };
};

export const updateCardDragStatus = (payload) => {
  return {
    type: UPDATE_CARD_DRAG_STATUS,
    payload,
  };
};
