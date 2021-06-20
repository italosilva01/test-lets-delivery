import { Typography } from "@material-ui/core";

import { Container } from "./style";
interface CharacterListItemProps {
  image: string;
  name: string;
  id: number;
}
export const CharacterListItem = ({
  image,
  name,
  id,
}: CharacterListItemProps) => {
  return (
    <Container>
      <img src={image} alt={name} />
      <Typography style={{ textAlign: "justify" }}>{name}</Typography>
      <Typography>{id}</Typography>
    </Container>
  );
};
