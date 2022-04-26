import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export const DeleteButton = ({ handleDelete }) => {
  return <IconButton aria-label="delete">
  <DeleteIcon
className="mr10"
onClick={handleDelete}></DeleteIcon>
</IconButton>

};
