import React from "react";
import styled from "styled-components";
import SignIn from "components/organisms/SignIn/SignIn";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <SignIn />
    </LoginWrapper>
  );
};

export default Login;
