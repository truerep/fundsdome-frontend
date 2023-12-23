import React from 'react'
import Head from 'next/head'

import { getGroupDetail } from '@/api'

import { OrganizationProvider } from '@/context/OrganizationContext'

import { Banner, Header, PageWrapper } from '@/components'

const organization = ({data}) => {
  return (
    <>
      {console.log(data, "<-- from api")}
        <Head>
            <title>
                Organization Page
            </title>
        </Head>
        <Header />
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
    const res = await getGroupDetail(organizationSlug)
    return { props: { data: res } }
  } catch (err) {
    return { props: { data: null } }
  }
}

export default organization