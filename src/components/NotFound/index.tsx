import React from 'react';
import { Typography } from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { Container, Content } from './style';
export const NotFound = () => {
  return (
    <Container>
      <Content>
        <NotInterestedIcon fontSize="large" />
        <Typography variant="h4">nothing was found</Typography>
        <Typography variant="h5">
          Go back to the previous page and search for another character 😉
        </Typography>
      </Content>
    </Container>
  );
};
