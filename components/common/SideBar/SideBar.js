import { appEnv, colors } from '@/helpers';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

const SideBar = ({
    router,
    navMenu
}) => {
  return (
    <Wrapper>
        <Content>
            <Logo src={`${appEnv.IMAGES_CDN_URL}/fundsdome-logo.jpeg`} alt="fundsdome" />
            <NavMenu>
                {
                    navMenu.length && navMenu.map((navItem, index) => (
                        <MenuItem key={index}>
                            <Link href={navItem.url} className={router.pathname === navItem.url ? 'active' : ''}>
                                <img src={navItem.icon} />
                                <span>
                                    {navItem.title}
                                </span>
                            </Link>
                        </MenuItem>
                    ))
                }
            </NavMenu>
        </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    box-shadow: 1px 0 5px 0 rgba(0,0,0,0.05);
    height: 100vh;
    overflow: auto;
    position: sticky;
    top: 0;
`;

const Content = styled.div`
    padding: 20px;
`;

const Logo = styled.img`
    height: 45px;
    padding-right: 40px;
    margin: 20px 0 30px;
`;

const NavMenu = styled.ul`
`;

const MenuItem = styled.li`
    a {
        display: block;
        padding: 15px 10px;
        color: ${colors.ErrieBlack};
        border-radius: 5px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 15px;

        img {
            height: 22px;
        }

        &:not(last-child) {
            margin-bottom: 5px;
        }

        &.active, &:hover {
            color: ${colors.Lavender};
            background: rgba(159, 133, 247, 0.08);
        }
    }
`;

export default SideBar