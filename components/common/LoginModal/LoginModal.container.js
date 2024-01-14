import React, { useState } from 'react'

import { loginUser } from '@/api';

import LoginModal from './LoginModal'

const LoginModalContainer = ({
    setShowLoginModal
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await loginUser(username, password);
      setShowLoginModal(false)
    } catch (error) {}
  };

  return (
    <LoginModal 
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  )
}

export default LoginModalContainer