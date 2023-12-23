import React from 'react'
import Head from 'next/head'

import { getAllEvents } from '@/api'

import { Events } from '@/components'

const events = ({data}) => {
  return (
		<>
			<Head>
				<title>
					Events | FundsDome
				</title>
			</Head>
			<Events eventsList={data} />
		</>
  )
}

export async function getServerSideProps() {
	try {
		const res = await getAllEvents()
		return { props: { data: res } }
	} catch (err) {
		return { props: { data: null } }
	}
}

export default events;