import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
        <Logo src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="fundsdome-logo" />
        <Nav>
            <Item>
                <Link href="/">
                    Home
                </Link>
            </Item>
            <Item>
                <Link href="/campaigns">
                    Campaigns
                </Link>
            </Item>
            <Item>
                <Link href="/events">
                    Events
                </Link>
            </Item>
        </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding: 0 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    height: 50px;
`;

const Nav = styled.ul`
    list-style: none;
    display: flex;
`;

const Item = styled.li`
    a {
        display: block;
        padding: 40px 20px;
        color: #351C42;
        font-size: 15px;
        font-weight: 500;

        &:hover {
            color: #F6D469;
        }
    }
`;

export default Header