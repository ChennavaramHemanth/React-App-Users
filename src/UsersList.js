
import { connect } from "react-redux";
import { UserRow } from "./UsersGridView";
import * as actions from "./ButtonClick";
import React, { useState } from "react";

const usersDataListView = (props) => {
  console.log(
    "Checking props Data",
    props
  );

  const { usersDataList, deleteUser, addColor, updateUser } = props;

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleFavorite = (id) => {
    addColor(id);
  }

  const handleUpdate = (id) => {
    updateUser(id);
  };

  return (
    <>
      {usersDataList.map((user) => (
        <UserRow
          key={user.id}
          user={user}
          deleteHandler={handleDelete}
          updateHandler={handleUpdate}
          favoriteHandler={handleFavorite}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("stateCheckkk", state);
  const { usersDataList } = state.user;
  return { usersDataList };
};

export default connect(mapStateToProps, actions)(usersDataListView);
