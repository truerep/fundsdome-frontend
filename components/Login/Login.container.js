import React, { useState } from 'react'

import { loginUser } from '@/api';

import Login from './Login'

const LoginContainer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await loginUser(username, password);
      console.log('Token:', token);
    } catch (error) {}
  };
    
  return (
    <Login 
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  )
}

export default LoginContainer