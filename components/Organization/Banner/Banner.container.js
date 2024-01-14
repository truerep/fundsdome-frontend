import React, { useEffect, useState } from 'react'

import { useOrganizationContext } from '@/context/OrganizationContext';
import { getGroupDonations } from '@/api';

import Banner from './Banner'
import { authService } from '@/services';

const BannerContainer = () => {
  const organizationData = useOrganizationContext();
  const [donations, setDonations] = useState([])
  const [donationId, setDonationId] = useState()
  const [donationAmount, setDonationAmount] = useState()
  const [donationTotal, setDonationTotal] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [showAmountModal, setShowAmountModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(true)

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
  }

  const handleDonation = async () => {
    const isAuthenticated = await authService()
    if (donationAmount && isAuthenticated) {
      window.open(`https://app.fundsdome.com/contribute?amount=${donationAmount}&donationId=${donationId}`, '_blank');
    } else {
      setShowLoginModal(true)
    }
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
      showModal={showModal}
      setShowModal={setShowModal}
      showAmountModal={showAmountModal}
      setShowAmountModal={setShowAmountModal}
      donationId={donationId}
      setDonationId={setDonationId}
      donationAmount={donationAmount}
      setDonationAmount={setDonationAmount}
      showLoginModal={showLoginModal}
      setShowLoginModal={setShowLoginModal}
      handleDonation={handleDonation}
    />
  )
}

export default BannerContainer