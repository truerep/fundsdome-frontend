import React from 'react'
import styled from 'styled-components';

import { Container } from '../common/UiElements'
import { EventItem } from '../common';

const Events = ({eventsList}) => {
  return (
    <EventsWrapper>
		{
			eventsList?.events.map((event) => (
				<EventItem key={event._id} eventData={event} />
			))
		}
		{console.log(eventsList, "<--eventsList")}
    </EventsWrapper>
  )
}

const EventsWrapper = styled(Container)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	padding: 70px 0;
`;

export default Events