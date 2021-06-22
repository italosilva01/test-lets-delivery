import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { ContainerProgress } from './style';

export const Progress = () => {
  return (
    <ContainerProgress>
      <CircularProgress size={120} color="inherit" />
    </ContainerProgress>
  );
};
