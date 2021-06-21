import { useState, useEffect } from "react";

import {
  IconButton,
  TextField,
  Typography,
  Box,
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      margin: theme.spacing(1),
      borderColor: "white",
      width: "90%",
      "& focus-visible": {
        borderColor: "white",
      },
    },
    input: {
      color: "white",
      borderColor: "white",
    },
  })
);
import { Container, Content, PaperStyled } from "./style";
import { api } from "service/api";

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const [searchCharacter, setSearchCharacter] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCharacter(event.target.value);
  };

  return (
    <Container>
      <Content>
        <span>
          <Typography variant="h1" style={{ color: "white" }}>
            Wiki: Rick and Morty
          </Typography>
        </span>
        <Box>
          <form action="/search">
            <TextField
              className={classes.textField}
              label="Pesquisar"
              name="name"
              placeholder="Pesquisar personagem"
              value={searchCharacter}
              onChange={handleChange}
              inputProps={{
                className: classes.input,
              }}
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </form>
        </Box>
      </Content>
    </Container>
  );
};
