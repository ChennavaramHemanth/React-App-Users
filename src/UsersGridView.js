import React, { Fragment, useEffect, useState } from "react";
import { DeleteButton } from "./DeleteBtn";
import {FavoriteButton} from "./FavoriteBtn";
import { UpdateRow } from "./UpdateUser";
import userMapData from "./usersData";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonClick from './ButtonClick'
import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import DeleteIcon from "@material-ui/icons/Delete";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export const UserRow = ({ user, deleteHandler, favoriteHandler, updateHandler }) => {
  const [isModified, setIsModified] = useState(false);
  const { id, name, email, image, phone,  website, status } = user || {};

  useEffect(() => {
    setIsModified(status === "changed");

    return () => {
      console.log(`user name ${name} has been deleted`);
    };
  }, [status]);

  const handleUpdate = () => {
    updateHandler(id);
  };
  const handleDelete = () => {
    deleteHandler(id);
  };

  const handleFavorite = () => {
    favoriteHandler(id);
  }

  return (
    <div key={id}>
      {isModified && <span>User modified</span>}&nbsp;&nbsp;

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            <Grid item xs={2} sm={4} md={4} key={id}>
              <Item>
                <Link to={`/Users/${id}`}><img src={image} alt="" className="imageDisplay" /></Link>
                <h3>
                  <Link to={`/Users/${id}`}>{name}</Link>
                </h3>
                <div className="userData">
                  <div>Eamil: {email}</div>
                  <div>Phone: {phone}</div>
                  <div>Website: {website}</div>
                  <FavoriteButton handleFavorite={handleFavorite}></FavoriteButton>
                  <UpdateRow
                    isModified={isModified}
                    handleUpdate={handleUpdate}
                  ></UpdateRow>
                  <DeleteButton handleDelete={handleDelete}></DeleteButton>
                </div>

              </Item>
            </Grid>
        </Grid>
      </Box>

    </div>
  );
};
