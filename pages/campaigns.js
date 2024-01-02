import React from 'react'
import Head from 'next/head'

import { Campaigns, Footer, Header } from '@/components'
import { getAllGroups } from '@/api'

const campaigns = ({data}) => {
  return (
		<>
			<Head>
				<title>
					Campaigns | FundsDome
				</title>
			</Head>
			<Header />
			<Campaigns groupsList={data} />
			<Footer />
		</>
  )
}

export async function getServerSideProps() {
	try {
		const res = await getAllGroups()
		return { props: { data: res } }
	} catch (err) {
		return { props: { data: null } }
	}
}

export default campaigns