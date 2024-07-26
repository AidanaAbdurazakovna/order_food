import React, { useState } from "react";
import styled from "styled-components";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsFormValid(emailValue.includes("@") && password.length > 6);
  };
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setIsFormValid(password.length > 8 && email.includes("@"));
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledInput
        type="email"
        placeholder="Введите почту"
        value={email}
        onChange={handleEmailChange}
      />
      <StyledInput
        placeholder="Введите пароль"
        value={password}
        onChange={handlePasswordChange}
      />
      <StyledButton type="submit" onClick={onLogin} disabled={!isFormValid}>
        Войти
      </StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  border-radius: 12px;
  background-color: green;
  
`;

const StyledButton = styled.button`
  padding: 16px 18px;
  border-radius: 10px;
  background-color: #1ad830;
  background: green;
  border: none;
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  box-shadow: 2px 1px 15px #09d81ee2;
  cursor: pointer;
  transition: all 0.3s ease;

  

  .buttonContainer {
    display: flex;
    justify-content: flex-end;
  }

  &:disabled {
    background-color: #d51010;
    cursor: not-allowed;
  }
`;

const StyledInput = styled.input`
width: 300px;
height: 30px;
background-color: #9fe3e2;
border: none;


`