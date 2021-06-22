import React from 'react';
import { Typography, Tooltip } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { Container, Info, ContainerAction } from './style';
import { Character } from 'model/character';
import { FavoriteButton } from 'components/FavoriteButton';

interface CharacterListItemProps {
  character: Character;
}
export const CharacterListItem = ({ character }: CharacterListItemProps) => {
  const history = useHistory();

  return (
    <Container>
      <img src={character.image} alt={character.name} />

      <Info onClick={() => history.push(`character/${character.id}`)}>
        <Typography style={{ textAlign: 'justify' }}>
          {character.name} - {character.origin?.name}
        </Typography>
      </Info>
      <ContainerAction>
        <Tooltip title="Ver mais" arrow>
          <Link to={`character/${character.id}`}>
            <ArrowForwardIcon />
          </Link>
        </Tooltip>
        <FavoriteButton character={character} />
      </ContainerAction>
    </Container>
  );
};
