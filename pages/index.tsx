import React from 'react'
// components
import DashboardComponent from 'src/components/containers/dashboard/Dashboard'
// layout
import Layout from 'src/layout'
// types
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <DashboardComponent />
    </Layout>
  )
}

export default Home
