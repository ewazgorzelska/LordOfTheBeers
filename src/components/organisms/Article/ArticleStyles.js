import styled from "styled-components";
import Button from "components/atoms/Button/Button";

export const Title = styled.h1`
  font-size: 3em;
  font-weight: 800;
  margin: 25px auto 25px auto;
  text-align: center;
`;

export const Image = styled.img`
  width: 500px;
  height: 400px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 3em;
  margin-bottom: 25px;
  padding: 1em 3em 3em 3em;
  max-width: 80vw;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 15vw;
  height: 8vh;
  font-size: 1em;
`;
