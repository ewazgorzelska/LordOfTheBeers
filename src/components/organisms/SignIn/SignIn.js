import React, { useState, useReducer } from "react";
import styled from "styled-components";
import FormField from "components/molecules/FormField/FormField";
import { FormTitle } from "components/atoms/FormTitle/FormTitle";
import Button from "components/atoms/Button/Button";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
  const handleButtonSignUp = () => setSignInForm(false);

  const [inputsContent, setInputsContent] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
    }
  );
  const { email, password } = inputsContent;

  const handleInputChange = (e) => {
    setInputsContent({
      [e.target.name]: e.target.value,
    });
  };

  const auth = getAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        alert(
          `Your email or password is incorrect, please check your data, ${errorCode} ${errorMessage}`
        );
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(
          `Email is already in use, sign in or use other email, ${errorCode} ${errorMessage}`
        );
      });
  };

  return (
    <form>
      <Wrapper>
        <FormTitle>{signInForm ? "Sign In" : "Sign Up"}</FormTitle>
        <FormField
          label="E-mail:"
          htmlFor="email-input"
          name="e-mail"
          type="email"
          id="email-input"
          onChange={handleInputChange}
          value={email}
          required
        />
        <FormField
          label="Password:"
          htmlFor="password-input"
          name="password"
          type="password"
          id="password-input"
          onChange={handleInputChange}
          value={password}
          required
        />
        {signInForm && (
          <SignUpButton type="button" onClick={handleButtonSignUp}>
            Sign Up!
          </SignUpButton>
        )}
        {!signInForm && (
          <FormField
            label="Confirm password:"
            htmlFor="confirm-password-input"
            name="confirm-password"
            type="password"
            id="confirm-password-input"
            onChange={handleInputChange}
            value={password}
            required
          />
        )}
        <Button
          type="submit"
          name="submit"
          value="1"
          onClick={signInForm ? handleSignIn : handleSignUp}
        >
          Submit
        </Button>
      </Wrapper>
    </form>
  );
};

export default SignIn;
