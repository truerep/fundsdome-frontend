import React, { useState, useEffect, useRef } from 'react'

import Campaigns from './Campaigns'
import { getAllGroups } from '@/api';

let allGroupsList = []

const CampaignsContainer = ({groupsList}) => {
  const sectionRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false)

  groupsList?.groups.forEach(newObj => {
    if (!allGroupsList.some(existingObj => existingObj._id === newObj._id)) {
      allGroupsList.push(newObj);
    }
  });

  const isSectionVisible = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      return rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const handleScroll = async () => {
    if (isSectionVisible()) {
      if(groupsList?.currentPage !== groupsList?.totalPages) {
        setIsLoading(true)
        let res = await getAllGroups(groupsList?.currentPage + 1)
        groupsList = res
        groupsList?.groups.forEach(newObj => {
          if (!allGroupsList.some(existingObj => existingObj._id === newObj._id)) {
            allGroupsList.push(newObj);
          }
        });
        setIsLoading(false)
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Campaigns 
      sectionRef={sectionRef} 
      isLoading={isLoading}
      groupsList={allGroupsList} 
    />
  )
}

export default CampaignsContainer