import React from 'react'
import fetch from 'node-fetch'

import Layout from '../../components/Layout/en'
import AboutUs from './_AboutUs'

export const getServerSideProps = async () => {
  const { API_URL } = process.env
  const response = await fetch(`${API_URL}/aboutuses?lang=en`)
  const data = await response.json()
  return {
    props: {
      data,
    },
  }
}

const AboutEn = ({ data }) => {
  return (
    <Layout>
      <AboutUs data={data[0]} />
    </Layout>
  )
}

export default AboutEn
