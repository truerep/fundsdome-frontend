/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react'
import styled from 'styled-components'

import { Container } from '@/components/common/UiElements'
import { LoginModal, Modal } from '@/components/common'

const Banner = ({
    donationTotal,
    organizationData,
    donations,
    donationId,
    setDonationId,
    donationAmount,
    setDonationAmount,
    showModal,
    setShowModal,
    showAmountModal,
    setShowAmountModal,
    showLoginModal,
    setShowLoginModal,
    handleDonation
}) => {
  return (
    <BannerWrapper>
        <img src={organizationData?.posts[0]?.image} alt="organization-banner" />
        <OraganizationDetailsWrapper>
            <OrganizationInfoWrapper>
                <img class="logo" src="https://pkstatic.imgix.net/media/companyprofile/331/onecause-logo.png" alt="organization-logo" />
                <OrganizationContext>
                    <h1>{organizationData?.chat?.chatName}</h1>
                    <p>{organizationData?.chat?.users?.length} Members | {organizationData?.events?.length} Events Organized</p>
                    <a href="#">Organization Info</a>
                </OrganizationContext>
            </OrganizationInfoWrapper>
            <OrganizationActionLinks>
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
                <DonateButton
                    onClick={() => setShowModal(true)}
                >
                    Donate
                </DonateButton>
            </OrganizationActionLinks>
        </OraganizationDetailsWrapper>
        <Modal 
            showModal={showModal}
            setShowModal={setShowModal}
        >
            <EventsWrapper>
                {
                    donations.length && donations.map((donation, index) => (
                        <EventItem key={donation._id}>
                            <img src={donation?.event?.thumbnail} />
                            <DonationDetail>
                                <h4>{donation?.event?.name}</h4>
                                <DonationAmount>
                                    <h5>Raised ${donation?.currentAmount}</h5>
                                    <h5>Goal ${donation?.targetAmount}</h5>
                                </DonationAmount>
                                <ProgressBar className='bar'>
                                    <ProgressFilled percentage={parseInt((donation?.currentAmount / donation?.targetAmount) * 100)}></ProgressFilled>
                                </ProgressBar>
                            </DonationDetail>
                            <DonateBtn
                                onClick={() => {
                                    setDonationId(donation._id)
                                    setShowAmountModal(true)
                                }}
                            >
                                Donate
                            </DonateBtn>
                        </EventItem>
                    )) 
                }
            </EventsWrapper>
        </Modal>
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
    </BannerWrapper>
  )
}

const BannerWrapper = styled(Container)`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    margin: 40px auto 60px;

    img {
        width: 100%;
    }

    @media (max-width: 1200px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`;

const OraganizationDetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 26px;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: unset;
        gap: 50px;
    }
`;

const OrganizationInfoWrapper = styled.div`
    display: flex;
    align-items: center;

    img.logo {
        height: 110px;
        width: 110px;
        object-fit: cover;
        border-radius: 100%;
        flex-shrink: 0;
        margin-right: 12px;

        @media (max-width: 576px) {
            height: 55px;
            width: 55px;
        }
    }
`;

const OrganizationContext = styled.div`
    h1 {
        font-family: Martel;
        font-size: 32px;
        font-weight: 400;
        text-transform: capitalize;
    }

    p {
        color: #7D7D7D;
    }

    a {
        padding: 10px 0;
        display: block;
        color: #001AFF;
        text-decoration: none;
    }

    @media (max-width: 576px) {
        h1 {
            font-size: 22px;
        }
    }
`;

const OrganizationActionLinks = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;

    @media (max-width: 1200px) {
        padding-left: 30px;
        justify-content: unset;
    }

    @media (max-width: 576px) {
        padding-left: 10px;
        flex-direction: column; 
        gap: 40px;
    }
`;

const Donation = styled.div`
    width: 320px;

    @media (max-width: 576px) {
        width: 100%;
    }
`;

const DonateButton = styled.a`
    display: inline-block;
    background-color: #9F85F7;
    padding: 12px 22px;
    border-radius: 10px;
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    margin-top: -15px;
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
    }
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

const EventsWrapper = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    
    @media (min-width: 576px) {
        min-width: 450px;
    }
`;

const EventItem = styled.div`
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 15px;
    }

    .bar {
        margin-top: 5px;
        transform: scaleY(0.6);

        & > div::after, & > div::before {
            content: unset;
        }
    }

    h4 {
        font-size: 15px;
        font-weight: 400;
    }

    img {
        height: 60px;
        width: 80px;
        object-fit: cover;
        border-radius: 5px;
    }
`;

const DonationDetail = styled.div`
    padding: 0 15px;
    flex: 1;
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

    &:hover {
        background-color: #9F85F7;
        color: #fff;
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

export default Banner