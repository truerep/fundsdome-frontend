import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

import Modal from '../Modal';
import LoginModal from '../LoginModal';

const Header = ({
    router,
    isAuthenticated,
    showLoginModal,
    setShowLoginModal
}) => {
  return (
    <Wrapper>
        <Logo src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" alt="fundsdome-logo" />
        <Nav>
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
            <Item>
                <Link href="https://app.fundsdome.com/video-chat" className="btn-primary btn-outlined">
                    Dashboard
                </Link>
            </Item>
            {!isAuthenticated && (
                <Item>
                    <a 
                        // href="https://app.fundsdome.com" 
                        className="btn-primary"
                        onClick={() => setShowLoginModal(true)}
                    >
                        LogIn
                    </a>
                </Item>
            )}
            {/* {!isAuthenticated && (
                <Item>
                    <Link 
                        href="https://app.fundsdome.com" 
                        className="btn-primary"
                    >
                        LogIn
                    </Link>
                </Item>
            )} */}
        </Nav>
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
    height: 50px;
`;

const Nav = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
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