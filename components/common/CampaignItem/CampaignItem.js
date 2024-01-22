import Link from 'next/link';
import React from 'react'
import styled from 'styled-components'

const CampaignItem = ({
	groupData,
	campaignBanner,
	donationTotal
}) => {
  return (
	<Container>
		<Link href={`/${groupData?.slug}`}>
			<Wrapper>
				<CampaignContext>
					<CampaignThumbnail src={campaignBanner} />
					{
						donationTotal?.targetAmount ? (
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
						) : ("")
					}
				</CampaignContext>
				<Info>
					<Title>{groupData?.chatName}</Title>
					<Description>{groupData?.description}</Description>
				</Info>
			</Wrapper>
		</Link>
	</Container>
  )
}

const Container = styled.div`
	a {
		text-decoration: none;
	}
`;

const Wrapper = styled.div`
	padding: 22px;
	position: relative;
	background-color: #EFECE7;
	border-radius: 20px;
	background-image: url("https://truerep.github.io/fundsdome-ui/assets/images/backgrounds/donation-bg-1-1.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	border-radius: 20px;
	color: #351C42;
	text-decoration: none;
`;

const CampaignContext = styled.div`
	height: 220px;
	position: relative;
`;

const Donation = styled.div`
	padding: 38px 20px 11px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(50%);
	width: calc(100% - 80px);
	background-color: #fff;
	border-radius: 10px;
`;

const CampaignThumbnail = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 20px;
`;

const Info = styled.div`
	padding-top: 65px;
`;

const Title = styled.h3`
	font-size: 22px;
	line-height: 1.5;
	letter-spacing: -0.66px;
	text-transform: capitalize;
	margin-bottom: 15px;
	font-family: Quicksand, sans-serif;
`;

const Description = styled.p`
	font-family: "DM Sans", sans-serif;
	font-size: 16px;
	color: #757277;
	font-weight: 400;
	line-height: 1.75;
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

export default CampaignItem