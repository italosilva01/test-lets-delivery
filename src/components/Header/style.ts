import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
  justify-content: space-between;
`;

export const LinkFavorites = styled(Link)`
  color: var(--background-white) !important;
  transition: filter 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    filter: brightness(0.9);
  }
`;
export const FormStyled = styled.form`
  display: flex;
  align-items: flex-end;
  width: 100%;
`;
// export const TextFieldStyled = styled(TextField)`
//   border-color: red;
// `;
