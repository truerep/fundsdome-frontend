import React from 'react'
import { useOrganizationContext } from '@/context/OrganizationContext';

import EventCard from './EventCard'

const EventCardContainer = () => {
  const organizationData = useOrganizationContext();

  return organizationData?.events.map((event) => (
    <EventCard 
      key={event._id}
      eventName={event?.name}
      event={event}
      thumbnail={event?.thumbnail || ''}
      eventData={event}
    />
  ))
}

export default EventCardContainer