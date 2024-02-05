import React from 'react'
import { SideBar } from '../common'
import styled from 'styled-components'
import { Posts } from './components'

const HomePage = () => {
  return (
    <>
        <HomePageWrapper>
            <SideBar />
            <Content>
                <Posts />
            </Content>
            <p>Suggested Campaigns</p>
        </HomePageWrapper>
    </>
  )
}

const HomePageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const Content = styled.div`
    padding: 50px 0;
`;

export default HomePage