import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Container = styled.section`
  background: var(--background-black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-title);
  height: 24rem;
  margin-bottom: -4rem;
`;

export const Content = styled.div`
  width: 1120px;
  padding: 50px;
  margin: 0 auto;

  span {
    text-align: center;
  }
`;

export const HomeOptions = styled(Box)`
  display: flex;
  flex-direction: column;
`;
// export const TextFieldStyled = styled(TextField)`
//   border-color: red;
// `;
