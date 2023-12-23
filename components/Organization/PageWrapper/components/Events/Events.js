import React from 'react'
import styled from 'styled-components';

import { EventCard } from './components';

const Events = () => {
  return (
    <EventsWrapper>
      <EventCard />
    </EventsWrapper>
  )
}

const EventsWrapper = styled.div`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    padding: 18px 27px;
    flex: 1;
    height: fit-content;
    flex-shrink: 0;
    position: sticky;
    top: 30px;
`;

export default Events