import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const FavoriteButton = ({ handleFavorite}) => {
  return <IconButton aria-label="favorite">
  <FavoriteIcon
className="mr10"
onClick={handleFavorite}></FavoriteIcon>
</IconButton>

};
