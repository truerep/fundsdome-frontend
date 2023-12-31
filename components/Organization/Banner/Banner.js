/* eslint-disable @next/next/no-img-element */

import React from 'react'
import styled from 'styled-components'

import { Container } from '@/components/common/UiElements'

const Banner = ({
    donationTotal,
    organizationData,
    percentage
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
                <DonateButton href="https://fundsdome.com/">
                    Donate
                </DonateButton>
            </OrganizationActionLinks>
        </OraganizationDetailsWrapper>
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
`;

const OraganizationDetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 26px;
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
`;

const OrganizationActionLinks = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
`;

const Donation = styled.div`
    width: 320px;
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

export default Banner