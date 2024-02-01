import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

import Modal from '../Modal';
import LoginModal from '../LoginModal';
import { appEnv } from '@/helpers';

const Header = ({
    router,
    isAuthenticated,
    showLoginModal,
    setShowLoginModal,
    toggleNav,
    setToggleNav
}) => {
  const hamburgerIcon = `${appEnv.IMAGES_CDN_URL}/hamburger-dark.png`;

  return (
    <Wrapper>
        <Logo src="https://ik.imagekit.io/sahildhingra/fundsdome-logo.jpeg?updatedAt=1705766654348" alt="fundsdome-logo" />
        <Nav className={toggleNav ? 'toggled' : ''}>
            <Item>
                <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
                    Home
                </Link>
            </Item>
            <Item>
                <Link href="/campaigns" className={router.pathname === '/campaigns' ? 'active' : ''}>
                    Campaigns
                </Link>
            </Item>
            <Item>
                <Link href="/events" className={router.pathname === '/events' ? 'active' : ''}>
                    Events
                </Link>
            </Item>
            {isAuthenticated && (
                <Item>
                    <Link href="https://app.fundsdome.com/video-chat" className="btn-primary btn-outlined">
                        Dashboard
                    </Link>
                </Item>
            )}
            {!isAuthenticated && (
                <Item>
                    <a
                        className="btn-primary"
                        onClick={() => setShowLoginModal(true)}
                    >
                        LogIn
                    </a>
                </Item>
            )}
        </Nav>
        <NavButton onClick={() => setToggleNav(!toggleNav)}>
            <img src={hamburgerIcon} alt="menu" />
        </NavButton>
        <Modal
            showModal={showLoginModal}
            setShowModal={setShowLoginModal}
        >
            <LoginModal 
                setShowLoginModal={setShowLoginModal}
                redirectUrl="https://app.fundsdome.com/video-chat"
            />
        </Modal>
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
    height: 70px;
    z-index: 9;

    @media (max-width: 768px) {
        height: 40px;
        margin: 10px 0;
    }
`;

const NavButton = styled.button`
    border: 0;
    background: transparent;
    display: none;
    z-index: 9;

    img {
        height: 22px;
    }

    @media (max-width: 768px) {
        display: block;
    }
`;

const Nav = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
        position: fixed;
        flex-direction: column;
        background: #fff;
        height: 100vh;
        width: 100vw;
        top: 0;
        right: 0;
        z-index: 8;
        align-items: flex-start;
        padding-top: 60px;

        a {
            padding: 10px 20px!important;

            &.btn-primary {
                margin: 10px 20px!important;
            }
        }

        &.toggled {
            display: flex;
        }
    }
`;

const Item = styled.li`
    a {
        display: block;
        padding: 40px 20px;
        color: #351C42;
        font-size: 15px;
        font-weight: 500;

        &:hover, &.active {
            color: #F6D469;
        }

        &.btn-primary {
            color: #fff;
            padding: 15px 25px;
            margin: 0 10px;
        }
    }
`;

export default Header