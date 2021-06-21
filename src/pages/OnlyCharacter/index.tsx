import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Typography, Tooltip, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { Container, Content } from "./style";
import { Character } from "model/character";
import { api } from "service/api";

interface CharacterParams {
  id: string;
}

export const OnlyCharacter = () => {
  const history = useHistory();
  const initialValue: Character = {
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    image: "",
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
          console.log("Error", error.message);
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
      </Content>
    </Container>
  );
};
