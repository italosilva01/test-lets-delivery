import React, { useState } from 'react';

import {
  IconButton,
  TextField,
  Typography,
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      margin: theme.spacing(1),
      borderColor: 'white',
      width: '90%',
    },
    input: {
      color: 'white',
      borderColor: 'white',
      '& focus-visible': {
        borderColor: 'white',
      },
    },
  })
);
import {
  Container,
  Content,
  HomeOptions,
  LinkFavorites,
  FormStyled,
} from './style';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const [searchCharacter, setSearchCharacter] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCharacter(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push({
      pathname: '/search',
      search: `?name=${searchCharacter}`,
    });
  };

  return (
    <Container>
      <Content>
        <span>
          <Typography variant="h1" style={{ color: 'white' }}>
            Wiki: Rick and Morty
          </Typography>
        </span>
        <HomeOptions>
          <FormStyled action="/search" onSubmit={(e) => handleSubmit(e)}>
            <TextField
              className={classes.textField}
              label="Search"
              name="name"
              placeholder="Search for character"
              value={searchCharacter}
              onChange={handleChange}
              inputProps={{
                className: classes.input,
              }}
            />
            <IconButton type="submit" style={{ color: 'white' }}>
              <SearchIcon />
            </IconButton>
          </FormStyled>
          <LinkFavorites to="/favorites">
            Favorites <FavoriteBorderIcon />
          </LinkFavorites>
        </HomeOptions>
      </Content>
    </Container>
  );
};
