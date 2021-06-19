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
import { useEffect } from "react";
import { useState } from "react";

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

export const Header = () => {
  const classes = useStyles();
  const [searchCharacter, setSearchCharacter] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCharacter(event.target.value);
  };

  const handleSearchCharacter = () => {
    console.log(searchCharacter);
  };
  return (
    <Container>
      <Content>
        <span>
          <Typography variant="h1">Wiki: Rick and Morty</Typography>
        </span>
        <Box>
          <TextField
            className={classes.textField}
            label="Pesquisar"
            placeholder="Pesquisar personagem"
            value={searchCharacter}
            onChange={handleChange}
            inputProps={{
              className: classes.input,
            }}
          />
          <IconButton onClick={handleSearchCharacter}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Content>
    </Container>
  );
};
