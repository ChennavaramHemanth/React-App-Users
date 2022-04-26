import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
export const UpdateRow = ({ isModified, handleUpdate }) => {
  const [buttonStr, setButtonStr] = useState("Update");
  useEffect(() => {
    setButtonStr(isModified ? "Reset" : "Update");
  }, [isModified]);
  return  <IconButton aria-label="delete">
      <EditIcon
      className="mr10"
      onClick={handleUpdate}>{buttonStr}</EditIcon>
      </IconButton>
};
