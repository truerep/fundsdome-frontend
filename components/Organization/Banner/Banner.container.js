import React, { useEffect, useState } from 'react'

import { useOrganizationContext } from '@/context/OrganizationContext';
import { getGroupDonations } from '@/api';

import Banner from './Banner'

const BannerContainer = () => {
  const organizationData = useOrganizationContext();
  const [donations, setDonations] = useState([])
  const [donationTotal, setDonationTotal] = useState({})

  const getDonations = async (groupId) => {
    const res = await getGroupDonations(groupId);
    
    const targetAmount = res.reduce((acc, obj) => acc + obj.targetAmount, 0);
    const currentAmount = res.reduce((acc, obj) => acc + obj.currentAmount, 0);
    const percentage = parseInt((currentAmount / targetAmount) * 100);

    setDonations(res)
    setDonationTotal({
      targetAmount,
      currentAmount,
      percentage
    })
    console.log(res, donationTotal, "<--donationsr")
  }

  useEffect(() => {
    console.log(organizationData?.chat?._id, "<--organizationData")
    getDonations(organizationData?.chat?._id);
  }, [])
  
  return (
    <Banner 
      donationTotal={donationTotal}
      donations={donations}
      organizationData={organizationData}
    />
  )
}

export default BannerContainer