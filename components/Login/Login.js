import React from 'react'
import styled from 'styled-components'

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin
}) => {
  return (
    <LoginWrapper>
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
  gap: 20px;
  padding: 20px;
  border: 1px solid lightgray;
  max-width: 450px;
  border-radius: 10px;

  button {
    width: fit-content;
    margin-left: auto;
  }
`;

export default Login