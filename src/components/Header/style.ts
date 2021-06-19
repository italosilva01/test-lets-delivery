import styled from "styled-components";
import { Paper, TextField } from "@material-ui/core";

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

export const PaperStyled = styled(Paper)`
  background-color: blue;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

// export const TextFieldStyled = styled(TextField)`
//   border-color: red;
// `;
