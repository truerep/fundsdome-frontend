import { eventTiming } from '@/utils';
import React from 'react'
import styled from 'styled-components'

const EventCard = ({
  eventName,
  event,
  thumbnail
}) => {
  return (
    <EventCardWrapper>
        <EventImageWrapper>
            <EventImage src={thumbnail} alt="event-icon" className='event-icon' />
        </EventImageWrapper>
        <EventInfo>
            <EventTitle>{eventName}</EventTitle>
            <EventTiming>{eventTiming(event)}</EventTiming>
            <DonationInfo>
                <DonationAmount>$ 4500 / $ 6000</DonationAmount>
                <DonationContributors>350 Contributions</DonationContributors>
            </DonationInfo>
        </EventInfo>
    </EventCardWrapper>
  )
}

const EventCardWrapper = styled.div`
    border-radius: 5px;
    border: 1px solid #9F85F7;
    background: #FAF9FC;
    overflow: hidden;
    display: flex;
    margin-bottom: 19px;
`;

const EventImageWrapper = styled.div`
    width: 100px;
    flex-shrink: 0;
`;

const EventImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const EventInfo = styled.div`
    padding: 11px 14px 13px;
    color: #7D7D7D;
    font-family: Inter;
    font-size: 15px;
    flex: 1;
`;

const EventTitle = styled.h3`
    color: #000;
    font-size: 19px;
    font-weight: 400;
    line-height: normal;
`;

const EventTiming = styled.p`
    padding: 7px 0 9px;
`;

const DonationInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
`;

const DonationAmount = styled.p`

`;

const DonationContributors = styled.p`

`;

export default EventCard