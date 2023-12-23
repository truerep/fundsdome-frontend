import React from 'react'

import EventItem from './EventItem'

const EventItemContainer = ({eventData}) => {
  return (
    <EventItem eventData={eventData} />
  )
}

export default EventItemContainer