import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Character } from 'model/character';
import { FavoriteButton } from 'components/FavoriteButton';

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
});
interface MediaCardProps {
  character: Character;
}

export const MediaCard = ({ character }: MediaCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`character/${character.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${character.image}`}
            title={`${character.name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {character.name}
            </Typography>
            <Box style={{ display: 'flex' }}>
              <Brightness1Icon
                color={character.status == 'Alive' ? 'primary' : 'secondary'}
                fontSize="small"
              />
              <Typography>
                {'  '}
                {character.status} - {character.species}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions>
        <FavoriteButton character={character} />
        <Link to={`character/${character.id}`}>View more</Link>
      </CardActions>
    </Card>
  );
};
