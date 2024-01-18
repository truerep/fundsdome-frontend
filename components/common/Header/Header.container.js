import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import { authService } from '@/services';

import Header from './Header'

const HeaderContainer = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  useEffect(() => {
      authService()
      .then((res) => {setIsAuthenticated(res)})
  }, [showLoginModal])

  return (
    <Header 
      router={router}
      isAuthenticated={isAuthenticated}
      showLoginModal={showLoginModal}
      setShowLoginModal={setShowLoginModal}
    />
  )
}

export default HeaderContainer