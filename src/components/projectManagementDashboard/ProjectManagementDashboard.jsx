import styles from "./projectManagementDashboard.module.scss";
import React, { Fragment } from "react";
import Header from "./components/Header";
import Lists from "./components/lists/Lists";
import { connect } from "react-redux";
import {
  addList,
  deleteList,
  addCard,
  deleteCard,
  updateCardDragStatus,
} from "../../actions/dashboardActions";

const ProjectManagementDashboard = ({
  lists = [],
  addList = () => {},
  deleteList = () => {},
  addCard = () => {},
  deleteCard = () => {},
  updateCardDragStatus = () => {},
}) => {
  const listHandlers = {
    handleAddList: (listTitle) => {
      addList({
        listTitle,
      });
    },

    handleDeleteList: (payload) => {
      deleteList(payload);
    },
  };

  const cardHandlers = {
    handleAddCard: (payload) => {
      addCard(payload);
    },

    handleDeleteCard: (payload) => {
      deleteCard(payload);
    },

    handleDragCard: (dragState) => {
      updateCardDragStatus(dragState);
    },
  };

  return (
    <Fragment>
      <Header customWrapperStyle={styles.header}>Dashboard</Header>
      <Lists
        lists={lists}
        listHandlers={listHandlers}
        cardHandlers={cardHandlers}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return { lists: state.lists };
};

const mapDispatchToProps = (dispatch) => ({
  addList: (payload) => dispatch(addList(payload)),
  deleteList: (payload) => dispatch(deleteList(payload)),
  addCard: (payload) => dispatch(addCard(payload)),
  deleteCard: (payload) => dispatch(deleteCard(payload)),
  updateCardDragStatus: (payload) => dispatch(updateCardDragStatus(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectManagementDashboard);
