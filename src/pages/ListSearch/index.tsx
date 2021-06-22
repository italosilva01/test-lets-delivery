import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  List,
  ListItem,
  Typography,
  CircularProgress,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import queryString from 'query-string';

import { CharacterListItem } from 'components/CharacterListItem';
import { NotFound } from 'components/NotFound';
import { Character } from 'model/character';
import { api } from 'service/api';
import { Container, Content, ContainerProgress } from './style';

export const ListSearch = () => {
  const { search } = useLocation();
  const { name } = queryString.parse(search);
  const [foundCharacters, setFoundCharacters] = useState<Character[]>([]);
  const [requestMade, setRequestMade] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getSearchParam = async () => {
      setRequestMade(false);
      try {
        const response = await api.get(`character/?name=${name}`);
        setFoundCharacters(response.data.results);
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
      setRequestMade(true);
    };

    getSearchParam();
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
          {'  '}
          Search result
        </Typography>
        {foundCharacters.length === 0 && !requestMade && (
          <ContainerProgress>
            <CircularProgress size={120} color="inherit" />
          </ContainerProgress>
        )}
        {foundCharacters.length == 0 && requestMade && <NotFound />}
        <List>
          {foundCharacters.map((character: Character) => (
            <ListItem key={character.id}>
              <CharacterListItem character={character} />
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};
