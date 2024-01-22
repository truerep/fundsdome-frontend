import React, { useEffect, useState } from 'react'

import { getGroupDonations, getLatestGroupPost } from '@/api';

import CampaignItem from './CampaignItem'

const CampaignItemContainer = ({groupData}) => {
  const [campaignBanner, setCampaignBanner] = useState('https://i.stack.imgur.com/IA7jp.gif');
  const [donationTotal, setDonationTotal] = useState({})

  const getGroupBanner = async (groupId) => {
    const res = await getLatestGroupPost(groupId);
    if(res?.posts?.length) {
      setCampaignBanner(res.posts[0].image)
    } else {
      setCampaignBanner('https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg')
    }
  }
  
  const getDonations = async (groupId) => {
    const res = await getGroupDonations(groupId);
    
    const targetAmount = res.reduce((acc, obj) => acc + obj.targetAmount, 0);
    const currentAmount = res.reduce((acc, obj) => acc + obj.currentAmount, 0);
    const percentage = parseInt((currentAmount / targetAmount) * 100);

    setDonationTotal({
      targetAmount,
      currentAmount,
      percentage
    })
  }

  if(groupData?._id) {
    getGroupBanner(groupData?._id)
  }

  useEffect(() => {
    getDonations(groupData?._id)
  }, [groupData])

  return (
    <CampaignItem 
      groupData={groupData} 
      campaignBanner={campaignBanner}
      donationTotal={donationTotal}
    />
  )
}

export default CampaignItemContainer