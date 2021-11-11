import React, { useState } from "react";
import styled from "styled-components";
import FormField from "components/molecules/FormField/FormField";
import { FormTitle } from "components/atoms/FormTitle/FormTitle";
import Button from "components/atoms/Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40vw;
  margin: 2em 0 2em 0;
`;

const SignUpButton = styled.button`
  text-decoration: underline;
  cursor: pointer;
`;

const SignIn = () => {
  const [signInForm, setSignInForm] = useState(true);

  const handleChange = () => {};

  const handleSignUp = () => setSignInForm(false);

  return (
    <form>
      <Wrapper>
        <FormTitle>{signInForm ? "Sign In" : "Sign Up"}</FormTitle>
        <FormField label="E-mail:" name="" value="" onChange={handleChange} />
        <FormField label="Password:" name="" value="" onChange={handleChange} />
        {signInForm && (
          <SignUpButton onClick={handleSignUp}>Sign Up!</SignUpButton>
        )}
        {!signInForm && (
          <FormField
            label="Confirm password:"
            name=""
            value=""
            onChange={handleChange}
          />
        )}
        <Button>Submit</Button>
      </Wrapper>
    </form>
  );
};

export default SignIn;
