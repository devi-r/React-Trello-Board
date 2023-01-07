import {
  ADD_LIST,
  DELETE_LIST,
  ADD_CARD,
  DELETE_CARD,
  UPDATE_CARD_DRAG_STATUS,
} from "../actions/dashboardActions";

const initialState = JSON.parse(localStorage.getItem("state")) ?? {
  lists: [
    {
      id: 0,
      title: "Teams",
      cards: [
        {
          id: 0,
          title: "Products",
          description: "3 pending tasks to be filled by Raj",
          parentId: 0,
        },
        {
          id: 1,
          title: "Sales",
          description: "Send proposal to Puneet for sales prices",
          parentId: 0,
        },
      ],
    },
    {
      id: 1,
      title: "Products",
      cards: [
        {
          id: 0,
          title: "UAT testing",
          description: "Ask engg to setup testing infra",
          parentId: 1,
        },
      ],
    },
  ],
};

const saveState = (state) =>
  localStorage.setItem("state", JSON.stringify(state));

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST: {
      const { listTitle } = action.payload;
      const currentLists = Object.assign([], state.lists);

      currentLists.push({
        id: currentLists?.length - 1,
        title: listTitle,
        cards: [],
      });

      saveState(state);
      return { ...state, lists: currentLists };
    }
    case DELETE_LIST: {
      const { listIndex } = action.payload;
      const currentLists = Object.assign([], state.lists);

      currentLists.splice(listIndex, 1);

      saveState(state);
      return { ...state, lists: currentLists };
    }
    case ADD_CARD: {
      const { parentId } = action.payload;
      const allLists = Object.assign([], state.lists);
      const currentList = allLists?.find((e) => e?.id === parentId);
      const currentCards = currentList?.cards;

      currentCards.push({
        ...action.payload.cardData,
        id: currentCards.length,
        parentId,
      });

      saveState(state);
      return { ...state, lists: allLists };
    }
    case DELETE_CARD: {
      const { parentId, cardIndex } = action.payload;
      const allLists = Object.assign([], state.lists);
      const currentList = allLists?.find((e) => e?.id === parentId);
      const currentCards = currentList?.cards;

      currentCards.splice(cardIndex, 1);

      saveState(state);
      return { ...state, lists: allLists };
    }
    case UPDATE_CARD_DRAG_STATUS: {
      const { cardCurrentIndex, currentParentId, newParentId } = action.payload;
      const allLists = Object.assign([], state.lists);
      const currentList = allLists?.find((e) => e?.id === currentParentId);
      const currentCards = currentList?.cards;
      const cardData = currentCards?.[cardCurrentIndex];

      currentCards.splice(cardCurrentIndex, 1);

      const newList = allLists?.find((e) => e?.id === newParentId);
      const newCards = newList?.cards;

      newCards.push({ ...cardData, parentId: newParentId });

      saveState(state);
      return { ...state, lists: allLists };
    }
    default:
      return state;
  }
};

export default dashboardReducer;
