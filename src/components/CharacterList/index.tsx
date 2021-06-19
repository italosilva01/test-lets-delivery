import { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";

import { api } from "service/api";
import { Character } from "model/character";
import { MediaCard } from "../MediaCard";
import { Container } from "./style";

export const CharacterList = () => {
  const [firstTenCharacters, setFirstTenCharacters] = useState<Character[]>([]);

  const getFirstTenCharacters = async () => {
    const response = await api.get("character/1,2,3,4");
    console.log(response);
    setFirstTenCharacters(response.data);
  };

  useEffect(() => {
    getFirstTenCharacters();
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={2} style={{ margin: "auto" }}>
          {firstTenCharacters.map((character: Character) => (
            <Grid item>
              <MediaCard
                key={character.id}
                image={character.image}
                type={character.type}
                gender={character.gender}
                name={character.name}
                status={character.status}
                species={character.species}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
