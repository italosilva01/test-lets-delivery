import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
});
interface MediaCardProps {
  name: string;
  status: string;
  species?: string;
  type: string;
  gender: string;
  origin?: object;
  localtionName?: string;
  image: string;
  dimension?: string;
}

export const MediaCard = ({
  name,
  status,
  species,
  type,
  gender,
  origin,
  localtionName,
  image,
  dimension,
}: MediaCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${image}`}
          title={`${name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {name}
          </Typography>
          <Box style={{ display: "flex" }}>
            <Brightness1Icon
              color={status == "Alive" ? "primary" : "secondary"}
              fontSize="small"
            />
            <Typography>
              {"  "}
              {status} - {species}
            </Typography>
          </Box>

          {/* <Typography variant="h6">Last known location:</Typography>
          {console.log(localtionName)}
          <Typography>{localtionName}</Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
