import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
        <FooterText>

        </FooterText>
        © Copyright 2024 FundsDome All Rights Reserved.
    </Wrapper>
  )
}

const Wrapper = styled.div`
    text-align: center;
    padding: 25px 20px;
    font-size: 14px;
    font-weight: 600;
    color: #351C42;
    line-height: 1.5;
    font-family: "DM Sans", sans-serif;
    background-color: #F6D469;
    position: relative;
    z-index: 1;
`;

const FooterText = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url("https://truerep.github.io/fundsdome-ui/assets/images/backgrounds/footer-bottom-bg-1-2.png");
    mix-blend-mode: multiply;
`;

export default Footer