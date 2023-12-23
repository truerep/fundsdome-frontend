import React from 'react'
import styled from 'styled-components';

import { Container } from '../common/UiElements'
import { CampaignItem } from '../common';

const Campaigns = ({groupsList}) => {
  return (
    <CampaignsWrapper>
		{
			groupsList?.groups.map((group) => (
				<CampaignItem key={group._id} groupData={group} />
			))
		}
		{console.log(groupsList, "<--groupsList")}
    </CampaignsWrapper>
  )
}

const CampaignsWrapper = styled(Container)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	padding: 70px 0;
`;

export default Campaigns