import React from 'react'
import Head from 'next/head'
import axios from 'axios'

import { OrganizationProvider } from '@/context/OrganizationContext'

import { Banner, PageWrapper } from '@/components'

const organization = ({data}) => {
  return (
    <>
      {console.log(data, "<-- from api")}
        <Head>
            <title>
                Organization Page
            </title>
        </Head>
        <OrganizationProvider data={data}>
          <Banner />
          <PageWrapper />
        </OrganizationProvider>
    </>
  )
}

export async function getServerSideProps(context) {
  const organizationSlug = context.params?.["organization-slug"]
  try {
    const res = await axios.get(`http://127.0.0.1:8000/conversation/slug/${organizationSlug}`)
    return { props: { data: res.data } }
  } catch (err) {
    return { props: { data: null } }
  }
}

export default organization