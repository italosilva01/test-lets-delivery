import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';

import { api } from 'service/api';
import { Character } from 'model/character';
import { MediaCard } from '../MediaCard';
import { Container, Content } from './style';

export const CharacterList = () => {
  const [firstTenCharacters, setFirstTenCharacters] = useState<Character[]>([]);

  const getFirstTenCharacters = async () => {
    const response = await api.get('character/1,2,3,4,5,6,');
    setFirstTenCharacters(response.data);
  };

  useEffect(() => {
    getFirstTenCharacters();
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Grid container spacing={2} style={{ margin: 'auto' }}>
            {firstTenCharacters.map((character: Character) => (
              <Grid key={character.id} item>
                <MediaCard character={character} />
              </Grid>
            ))}
          </Grid>
        </Content>
      </Container>
    </>
  );
};
