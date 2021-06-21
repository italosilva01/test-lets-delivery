import { Typography } from "@material-ui/core";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import { Container, Content } from "./style";
export const NotFound = () => {
  return (
    <Container>
      <Content>
        <NotInterestedIcon fontSize="large" />
        <Typography variant="h4">Nada foi encontrado</Typography>
        <Typography variant="h5">
          Volte para a página anterior e pesquise por outro personagem 😉
        </Typography>
      </Content>
    </Container>
  );
};
