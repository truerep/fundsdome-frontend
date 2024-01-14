import React from 'react'
import styled from 'styled-components';

const LoginModal = ({
    username,
    setUsername,
    password,
    setPassword,
    handleLogin
}) => {
  return (
    <LoginWrapper>
        <LoginOptions>
            <button className="btn-primary">Log In</button>
            <button className="btn-primary inactive">Sign Up</button>
        </LoginOptions>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-primary" onClick={handleLogin}>Login</button>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px 25px;
  border: 1px solid lightgray;
  max-width: 450px;
  border-radius: 10px;
  background: #fff;
  min-width: 320px;

  button {
    width: fit-content;
    margin-left: auto;
  }
`;

const LoginOptions = styled.div`
  display: flex;
  align-items: center;

  & > button {
    flex: 1;
    border-radius: 5px; 

    &.inactive {
        background-color: transparent;
        color: #000;
    }
  }
`;

export default LoginModal