import { Typography, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Container, Info, ContainerAction } from "./style";
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
    <Link to={`character/${id}`}>
      <Container>
        <img src={image} alt={name} />
        <Info>
          <Typography style={{ textAlign: "justify" }}>{name}</Typography>
        </Info>
        <ContainerAction>
          <Tooltip title="Ver mais" arrow>
            <Link to={`character/${id}`}>
              <ArrowForwardIcon />
            </Link>
          </Tooltip>
          <Tooltip title="Favoritar" arrow>
            <FavoriteBorderIcon />
          </Tooltip>
        </ContainerAction>
      </Container>
    </Link>
  );
};
