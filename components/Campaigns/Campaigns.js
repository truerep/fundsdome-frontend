import React from 'react'
import styled from 'styled-components';

import { Container } from '../common/UiElements'
import { CampaignItem, Loader } from '../common';

const Campaigns = ({
	sectionRef,
	groupsList,
	isLoading
}) => {
  return (
	<CampaignsContainer ref={sectionRef}>
		<CampaignsWrapper>
			{
				groupsList.length && groupsList.map((group) => (
					<CampaignItem key={group._id} groupData={group} />
				))
			}
		</CampaignsWrapper>
		{
			isLoading ? (
				<Loader />
			) : ("")
		}
	</CampaignsContainer>
  )
}

const CampaignsContainer = styled.div`
	padding-bottom: 70px;
`;

const CampaignsWrapper = styled(Container)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	padding: 70px 0;
`;

export default Campaigns