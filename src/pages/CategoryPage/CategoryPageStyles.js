import styled from "styled-components";
import Button from "components/atoms/Button/Button";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100%;
`;

export const CategoryLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2.5em;
  margin-top: 3vh;
`;

export const StyledButton = styled(Button)`
  width: 11vw;
  font-size: 0.75em;
`;

export const CategoryProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5vw;
  margin: 3vh;
`;

export const Title = styled.div`
  font-size: 3em;
  font-weight: 800;
  text-transform: capitalize;
  margin-top: 7vh;
`;
