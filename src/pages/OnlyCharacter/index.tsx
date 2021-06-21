import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Typography,
  Tooltip,
  IconButton,
  Grid,
  Paper,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { InfoCard } from 'components/InfoCard';
import {
  Container,
  Content,
  PhotoContainer,
  Image,
  ContainerAction,
} from './style';
import { Character } from 'model/character';
import { api } from 'service/api';

interface CharacterParams {
  id: string;
}

export const OnlyCharacter = () => {
  const history = useHistory();
  const initialValue: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: 'Male',
    image: '',
  };
  const [character, setCharacter] = useState<Character>(initialValue);
  const { id } = useParams<CharacterParams>();

  useEffect(() => {
    const getOnlyCharacter = async () => {
      try {
        const response = await api.get(`/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error);
      }
    };
    getOnlyCharacter();
  }, []);

  return (
    <Container>
      <Content>
        <Typography variant="h3">
          <Tooltip title="Voltar" arrow>
            <IconButton
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          {character.name}
        </Typography>
        <Paper elevation={3} style={{ width: '80%', margin: '0 auto' }}>
          <PhotoContainer container spacing={1}>
            <Grid item lg={6}>
              <Image src={character.image} alt={character.name} />
            </Grid>

            <Grid item lg={4}>
              <InfoCard
                status={character.status}
                species={character.species}
                gender={character.gender}
                location={character.location}
                origin={character.origin}
              />
              <ContainerAction>
                <Tooltip title="Favorite" arrow>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Tooltip>
              </ContainerAction>
            </Grid>
          </PhotoContainer>
        </Paper>
      </Content>
    </Container>
  );
};
