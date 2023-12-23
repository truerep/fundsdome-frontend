import React, { useEffect, useState } from 'react'

import { useOrganizationContext } from '@/context/OrganizationContext';

import { getUserInfo } from '@/api';

import Posts from './Posts'

const PostsContainer = () => {
  const organizationData = useOrganizationContext();
  const [isAdmin, setIsAdmin] = useState(false)

  const userInfo = async () => {
    const userInfo = await getUserInfo();
    if(userInfo?._id === organizationData?.chat?.groupAdmin?._id) {
      setIsAdmin(true)
    }
    console.log(userInfo)
  }

  useEffect(() => {
    userInfo()
  }, [])
  
  return (
    <Posts 
      isAdmin={isAdmin}
      organizationData={organizationData}
    />
  )
}

export default PostsContainer