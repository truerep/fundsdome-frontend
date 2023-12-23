import React from 'react'

import { useOrganizationContext } from '@/context/OrganizationContext';

import Banner from './Banner'

const BannerContainer = () => {
  const organizationData = useOrganizationContext();
  
  return (
    <Banner 
      organizationData={organizationData}
    />
  )
}

export default BannerContainer