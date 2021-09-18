import styled from "styled-components";

export const ArticlesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
`;

export const Loading = styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 3em;
`;

export const Error = styled(Loading)`
  color: red;
`;
