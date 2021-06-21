import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -4rem;
`;

export const Content = styled.main`
  width: 1120px;
  padding: 50px;
  margin: 0 auto;
`;

export const PhotoContainer = styled(Grid)`
  /* background-color: red; */
  margin-top: 5% !important;
`;

export const Image = styled.img`
  width: 390px;
  height: 390px;
`;

export const ContainerAction = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 2rem;
  align-items: center;
  width: 100%;
  transition: filter 0.2s;
  margin-top: 10%;
  :hover {
    filter: brightness(0.9);
  }
`;
