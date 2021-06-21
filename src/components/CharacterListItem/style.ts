import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  height: 5rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: var(--background-white);
  width: 100%;
  height: 100%;
  transition: filter 0.2s;
  :hover {
    filter: brightness(0.9);
  }
`;

export const ContainerAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 2rem;
  align-items: center;
  background-color: #d3d3d3;

  transition: filter 0.2s;
  :hover {
    filter: brightness(0.9);
  }
`;
