import React, { useEffect, useState } from 'react'

import { getEventDonation } from '@/api'

import EventItem from './EventItem'
import { authService } from '@/services'

const EventItemContainer = ({eventData}) => {
  const [donationTotal, setDonationTotal] = useState({})
  const [donationId, setDonationId] = useState()
  const [donationAmount, setDonationAmount] = useState()
  const [showAmountModal, setShowAmountModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const getDonations = async (eventId) => {
    const res = await getEventDonation(eventId);
    
    const targetAmount = res.reduce((acc, obj) => acc + obj.targetAmount, 0);
    const currentAmount = res.reduce((acc, obj) => acc + obj.currentAmount, 0);
    const percentage = parseInt((currentAmount / targetAmount) * 100);

    setDonationTotal({
      targetAmount,
      currentAmount,
      percentage
    })
  }

  useEffect(() => {
    getDonations(eventData?._id)
  }, [eventData])

  const handleDonation = async () => {
    const isAuthenticated = await authService()
    if (donationAmount && isAuthenticated) {
      window.open(`https://app.fundsdome.com/contribute?amount=${donationAmount}&donationId=${donationId}`, '_blank');
    } else {
      setShowLoginModal(true)
    }
  }

  return (
    <EventItem  
      donationTotal={donationTotal}
      eventData={eventData} 
      showAmountModal={showAmountModal}
      setShowAmountModal={setShowAmountModal}
      donationAmount={donationAmount}
      showLoginModal={showLoginModal}
      setShowLoginModal={setShowLoginModal}
      setDonationId={setDonationId}
      setDonationAmount={setDonationAmount}
      handleDonation={handleDonation}
    />
  )
}

export default EventItemContainer