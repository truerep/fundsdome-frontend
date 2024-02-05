import React from 'react'
import styled from 'styled-components'

import { Container } from '@/components/common/UiElements'
import { Events, Posts } from './components'

const PageWrapper = () => {
  return (
    <PageContainer>
        <Posts />
        <Events />
    </PageContainer>
  )
}

const PageContainer = styled(Container)`
    display: flex;
    gap: 55px;
    margin-bottom: 60px;

    @media (max-width: 1200px) {
      margin: 0 20px 60px;
      flex-direction: column;
      gap: 30px;
    }
`;

export default PageWrapper