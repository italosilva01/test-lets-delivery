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
import Pagination from '@material-ui/lab/Pagination';

import { CharacterListItem } from 'components/CharacterListItem';
import { NotFound } from 'components/NotFound';
import { Character } from 'model/character';
import { api } from 'service/api';
import { Container, Content, ContainerProgress } from './style';

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export const ListSearch = () => {
  const { search } = useLocation();
  const { name } = queryString.parse(search);
  const [foundCharacters, setFoundCharacters] = useState<Character[]>([]);
  const [requestMade, setRequestMade] = useState<boolean>(false);
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const [info, setInfo] = useState<Info>({} as Info);
  const history = useHistory();

  const getSearchParam = async (page: number = 1) => {
    setRequestMade(false);
    try {
      const response = await api.get(`character/?name=${name}&page=${page}`);
      console.log(response);
      setFoundCharacters(response.data.results);
      setInfo(response.data.info);
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

  useEffect(() => {
    getSearchParam();
  }, []);

  const handlePage = (event: object, page: number) => {
    getSearchParam(page);
  };

  return (
    <Container>
      <Content>
        <Typography variant="h3" style={{ marginBottom: '5%' }}>
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

        <List style={{ padding: '0 20%' }}>
          {foundCharacters.map((character: Character) => (
            <ListItem key={character.id}>
              <CharacterListItem character={character} />
            </ListItem>
          ))}
          {foundCharacters.length > 0 && (
            <Pagination
              style={{ display: 'flex', justifyContent: 'center' }}
              count={info.pages}
              onChange={handlePage}
            />
          )}
        </List>
      </Content>
    </Container>
  );
};
