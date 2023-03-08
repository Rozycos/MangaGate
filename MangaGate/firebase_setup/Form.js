import React, { useReducer } from "react";
import styled from "styled-components";
import { auth } from "./firebase";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,} from "firebase/auth";


const StyledForm = styled.form`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Montserrat";
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  width: 25.5rem;
  text-align: left;
  font-size: 1.2rem;
  padding: 1rem 0;
`;

const StyledInput = styled.input`
  width: 24rem;
  font-size: 1rem;
  background-color: hsla(204, 26%, 96%, 1);
  padding: 15px 20px;
  border: none;
  outline: none;

  :placeholder {
    letter-spacing: 1px;
    color: hsla(0, 0%, 33%, 0.5);
  }
`;

const StyledButtonsWrapper = styled.div`
  width: 24rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
`;

const StyledButton = styled.button`
  color: #fff;
  font-size: 1.1rem;
  background-color: #ffbb4a;
  width: 8rem;
  height: 3rem;
  padding: 0.5rem;
  border: none;
`;

const Form = () => {
  const [inputsContent, setInputsContent] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: ""
    }
  );
  const { email, password } = inputsContent;

  const handleInputChange = e => {
    setInputsContent({
      [e.target.name]: e.target.value
    });
  };

  const handleSignIn = e => {
    e.preventDefault();
    //auth
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage + email);
      });
    //   catch(error =>
    //     alert(
    //       `Your email or password is incorrect, please check your data, ${error}`
    //     )
    //   );
  };

  const handleSignUp = e => {
    e.preventDefault();
    //auth
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
    //   catch(error =>
    //     alert(`Email is already in use, sign in or use other email, ${error}`)
    //   );
  };

  return (
    <StyledForm>
      <StyledWrapper>
        <StyledLabel htmlFor="email-input">Email</StyledLabel>
        <StyledInput
          placeholder="jondoe@gmail.com"
          id="email-input"
          type="email"
          name="email"
          required
          onChange={handleInputChange}
          value={email}
        />
      </StyledWrapper>
      <StyledWrapper>
        <StyledLabel htmlFor="password-input">Hasło</StyledLabel>
        <StyledInput
          placeholder="********"
          type="password"
          name="password"
          id="password-input"
          required
          onChange={handleInputChange}
          value={password}
        />
      </StyledWrapper>
      <StyledButtonsWrapper>
        <StyledButton
          type="submit"
          name="submit"
          value="1"
          onClick={handleSignIn}
        >
          zaloguj się
        </StyledButton>
        <StyledButton
          type="submit"
          name="submit"
          value="1"
          onClick={handleSignUp}
        >
          zarejestruj się
        </StyledButton>
      </StyledButtonsWrapper>
    </StyledForm>
  );
};

export default Form;