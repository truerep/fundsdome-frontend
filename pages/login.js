import { Login } from '@/components'
import Head from 'next/head'
import React from 'react'

const login = () => {
  return (
    <>
      <Head>
        <title>Login | FundsDome</title>
      </Head>
      <Login />
    </>
  )
}

export default login