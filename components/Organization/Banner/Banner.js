/* eslint-disable @next/next/no-img-element */

import React from 'react'
import styled from 'styled-components'

import { Container } from '@/components/common/UiElements'

const Banner = ({
    organizationData
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
    
`;

export default Banner