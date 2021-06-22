import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Tooltip,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { RootState } from 'store';
import { Character } from 'model/character';
import { insert, remove } from 'store/Favorite.store';

interface FavoriteProps {
  character: Character;
}
export const FavoriteButton = ({ character }: FavoriteProps) => {
  const favorite = useSelector((state: RootState) => state.favorite);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const exist = favorite.filter(({ id }) => id === character.id);
    exist.length > 0 ? setIsFavorite(true) : setIsFavorite(false);
  }, [favorite, character]);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleRemove = () => {
    dispatch(remove(character));
    handleClose();
  };

  return (
    <>
      {!isFavorite ? (
        <Tooltip title="Favorite" arrow>
          <IconButton
            onClick={() => {
              dispatch(insert(character));
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Not favorite" arrow>
          <IconButton
            onClick={() => {
              // dispatch(remove(character));
              setDialogOpen(true);
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      )}

      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Remove from favorites?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to remove this character from your favorites list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancel
          </Button>
          <Button onClick={handleRemove} color="primary" autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
