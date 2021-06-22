import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip, IconButton } from '@material-ui/core';
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
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const exist = favorite.filter(({ id }) => id === character.id);
    exist.length > 0 ? setIsFavorite(true) : setIsFavorite(false);
  }, [favorite, character]);

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
              dispatch(remove(character));
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};
