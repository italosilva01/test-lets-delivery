import React from 'react';
import { Typography } from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { Container, Content } from './style';

interface AlertProps {
  title: string;
  textBody: string;
  icon?: boolean;
}

export const Empty = ({ title, textBody, icon = false }: AlertProps) => {
  return (
    <Container>
      <Content>
        {icon && <NotInterestedIcon fontSize="large" />}
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{textBody}😉</Typography>
      </Content>
    </Container>
  );
};
