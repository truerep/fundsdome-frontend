import React, { useState } from 'react'

import { getLatestGroupPost } from '@/api';

import CampaignItem from './CampaignItem'

const CampaignItemContainer = ({groupData}) => {
  const [campaignBanner, setCampaignBanner] = useState('https://i.stack.imgur.com/IA7jp.gif');
  const getGroupBanner = async (groupId) => {
    const res = await getLatestGroupPost(groupId);
    if(res?.posts?.length) {
      setCampaignBanner(res.posts[0].image)
    } else {
      setCampaignBanner('https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg')
    }
  }
  
  if(groupData?._id) {
    getGroupBanner(groupData?._id)
  }

  return (
    <CampaignItem 
      groupData={groupData} 
      campaignBanner={campaignBanner}
    />
  )
}

export default CampaignItemContainer