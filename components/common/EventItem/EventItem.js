import React from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import LoginModal from '../LoginModal'

const EventItem = ({
	donationTotal,
	eventData,
	showAmountModal,
	setShowAmountModal,
	donationAmount,
	showLoginModal,
	setShowLoginModal,
	setDonationId,
	setDonationAmount,
	handleDonation
}) => {
  return (
    <Wrapper>
		{
			console.log(donationTotal, "<---donto")
		}
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
					{eventData?.chatId?.chatName}
				</li>
				<li>
					<h5 class="event-card-grid__meta__title"><span class="icon-location"></span> Venue</h5>
					{/* 350 5th AveNew York, NY 10118 */}
					Remote | Virtual
				</li>
			</OrganizerInfo>
			{
				donationTotal?.targetAmount ? (
					<DonationWrapper>
						<Donation>
							<ProgressBox>
								<ProgressBar>
									<ProgressFilled percentage={donationTotal?.percentage}>
										<ProgressNumber>{donationTotal?.percentage}%</ProgressNumber>
									</ProgressFilled>
								</ProgressBar>
							</ProgressBox>
							<DonationAmount>
								<h5>Raised ${donationTotal?.currentAmount}</h5>
								<h5>Goal ${donationTotal?.targetAmount}</h5>
							</DonationAmount>
						</Donation>
						<DonateBtn
                                onClick={() => {
                                    setDonationId(donationTotal._id)
                                    setShowAmountModal(true)
                                }}
                            >
                                Donate
                            </DonateBtn>
					</DonationWrapper>
				) : ("")
			}
		</Info>
		<Modal 
            showModal={showAmountModal}
            setShowModal={setShowAmountModal}
        >
            <AmountModalWrapper>
                <input type="text" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} placeholder='Enter Amount USD $' />
                <DonateBtn onClick={() => handleDonation()}>
                    Donate
                </DonateBtn>
            </AmountModalWrapper>
        </Modal>
        <Modal
            showModal={showLoginModal}
            setShowModal={setShowLoginModal}
        >
            <LoginModal setShowLoginModal={setShowLoginModal} />
        </Modal>
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

			div {
				top: unset;
				bottom: 30px;
			}
		}

		& > div:nth-child(2) {
			border-radius: 20px 20px 0 0;
			border-bottom: none;
			border-top: 1px solid #D7D3CB;
		}
	}
	
	@media (max-width: 768px) {
		max-width: 510px;
		margin: 0 auto;
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
    margin-bottom: 22px;
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

const DonationWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	margin-top: 30px;
	border-top: 1px solid #D7D3CB;
`;

const DonateBtn = styled.button`
    margin-left: auto;
    display: inline-block;
    background-color: #fff;
    padding: 9px 18px;
    border-radius: 10px;
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #9F85F7;
    color: #9F85F7;
	transform: translateY(7px);

    &:hover {
        background-color: #9F85F7;
        color: #fff;
    }
`;

const Donation = styled.div`
	padding: 45px 20px 0;
	flex: 1;
`;

const ProgressBox = styled.div``;

const ProgressBar = styled.div`
	width: 100%;
    height: 7px;
    border: 1px solid #965995;
    border-radius: 10px;
    position: relative;
`;

const ProgressFilled = styled.div`
	position: relative;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #965995;
    transition: all 1500ms linear;
    border-radius: 10px;
    width: ${props => props.percentage}%;
    z-index: 1;	

	&::after {
		content: "";
		width: 8px;
		height: 8px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		z-index: 11;
	}

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		right: -1px;
		transform: translateY(-50%);
		background-color: #965995;
		border: 0;
		height: 18px;
		width: 18px;
		border-radius: 50%;
		z-index: 11;
	}
`;

const ProgressNumber = styled.div`
	position: absolute;
    bottom: calc(100% + 13px);
    right: 0;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.166;
    text-transform: capitalize;
    color: var(--cleenhearts-purple, #965995)
`;

const DonationAmount = styled.div`
	margin-top: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;	

	h5 {
		font-size: 12px;
		color: #351C42;
		font-weight: 500;
		line-height: 14px;
		text-transform: capitalize;
		margin-bottom: 0;
		font-family: "Quicksand", sans-serif;
	}
`;

const AmountModalWrapper = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 220px;

    input {
        border-radius: 10px;
        padding: 10px;
        width: calc(100% - 20px);
        border: 1px solid #965995;
        outline: 0;
    }

    button {
        margin-top: 20px;
    }
`;

export default EventItem