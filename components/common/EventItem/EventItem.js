import React from 'react'
import styled from 'styled-components'

const EventItem = ({eventData}) => {
  return (
    <Wrapper>
		<EventContext>
			<EventThumbnail src={eventData?.thumbnail} />
			<EventDateWrapper>
				<EventTime>
					<span class="event-card-grid__time__icon fa fa-clock"></span>10:00 aM - 2.00 PM
				</EventTime>
				<EventDate>03 Sep</EventDate>
			</EventDateWrapper>
		</EventContext>
		<Info>
			<Title>{eventData?.name || "Unnamed"}</Title>
			<OrganizerInfo>
				<li>
					<h5 class="event-card-grid__meta__title">Organizer</h5>
					Ashton Porter
				</li>
				<li>
					<h5 class="event-card-grid__meta__title"><span class="icon-location"></span> Venue</h5>
					350 5th AveNew York, NY 10118
				</li>
			</OrganizerInfo>
		</Info>
	</Wrapper>
  )
}

const Wrapper = styled.div`
	position: relative;
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	&:nth-child(even) {
		& > div:nth-child(1) {
			order: 1;
		}

		& > div:nth-child(2) {
			border-radius: 20px 20px 0 0;
			border-bottom: none;
			border-top: 1px solid #D7D3CB;
		}
	}
`;

const EventContext = styled.div`
	height: 366px;
	position: relative;
`;

const EventThumbnail = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const EventDateWrapper = styled.div`
	position: absolute;
	left: 0;
	top: 30px;
	z-index: 1;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const EventTime = styled.div`
	padding: 0 19px 0 30px;
    line-height: 36px;
    display: inline-block;
    border-radius: 0px 100px 100px 0px;
    background-color: #965995;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
`;

const EventDate = styled.div`
	padding: 0 31px 0 13px;
    line-height: 36px;
    display: inline-block;
    border-radius: 100px 0px 0px 100px;
    background-color: var(--cleenhearts-secondary, #F6D469);
    font-size: 16px;
    font-weight: 700;
    color: var(--cleenhearts-base, #351C42);
    text-transform: uppercase;
`;

const Info = styled.div`
	position: relative;
	border: 1px solid #D7D3CB;
	border-top: none;
	padding: 31px 30px 29px;
	border-radius: 0 0 20px 20px;
`;

const Title = styled.h3`
	text-transform: capitalize;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 30px;
	font-family: "Quicksand", sans-serif;
    color: #351C42;
`;

const OrganizerInfo = styled.ul`
	margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px 0;

	li {
		font-family: "DM Sans", sans-serif;
		text-transform: capitalize;
		color: #351C42;
		position: relative;

		&:nth-child(2) {
			margin-left: 20px;
			padding-left: 20px;

			&::before {
				content: "";
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				width: 1px;
				height: 41px;
				background-color: #D7D3CB;
			}
		}
	}

	h5 {
		font-family: "DM Sans", sans-serif;
		color: #351C42;
		font-size: 16px;
		line-height: 1.75;
		margin-bottom: 0;
		text-transform: capitalize;
	}
`;

export default EventItem