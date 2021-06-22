import React, { useEffect, useState } from 'react';
import { Typography, Tooltip, IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store';
import { insert, remove } from 'store/Favorite.store';
import { Container, Info, ContainerAction } from './style';
import { Character } from 'model/character';

interface CharacterListItemProps {
  character: Character;
}
export const CharacterListItem = ({ character }: CharacterListItemProps) => {
  const favorites = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const exist = favorites.filter((item) => item.id === character.id);
    exist.length > 0 ? setIsFavorite(true) : setIsFavorite(false);
  }, [favorites]);

  return (
    <Container>
      <img src={character.image} alt={character.name} />

      <Info onClick={() => history.push(`character/${character.id}`)}>
        <Typography style={{ textAlign: 'justify' }}>
          {character.name}
        </Typography>
      </Info>
      <ContainerAction>
        <Tooltip title="Ver mais" arrow>
          <Link to={`character/${character.id}`}>
            <ArrowForwardIcon />
          </Link>
        </Tooltip>
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
      </ContainerAction>
    </Container>
  );
};
