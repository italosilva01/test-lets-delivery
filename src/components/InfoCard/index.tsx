import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { Location } from "model/character";

interface InfoCardProps {
  status: string;
  species: string;
  gender: string;
  type?: string;
  location?: Location;
  origin?: Location;
}

export const InfoCard = ({
  status,
  species,
  gender,
  type,
  location,
  origin,
}: InfoCardProps) => {
  return (
    <Box>
      <Typography variant="h4">
        <Brightness1Icon
          color={status === "Alive" ? "primary" : "secondary"}
          fontSize="small"
        />{" "}
        {status} - {species}
      </Typography>
      <Typography color="textSecondary">Gender - {gender}</Typography>
      <br />
      <Typography variant="h5">Origin</Typography>
      <Typography variant="body1">{origin?.name}</Typography>
      <Typography variant="h5">Last known location</Typography>
      <Typography variant="body1">{location?.name}</Typography>
    </Box>
  );
};
