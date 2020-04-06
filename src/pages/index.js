import React from 'react'
import fetch from 'node-fetch'
// import { useRouter } from 'next/router'
import HomePage from './_HomePage'
import Layout from '../components/Layout/en'

const Redirect = ({ data }) => (
  // const location = useRouter().pathname
  <Layout>
    <HomePage data={data[0]} />
  </Layout>
)

export const getStaticProps = async () => {
  const { API_URL } = process.env
  const response = await fetch(`${API_URL}/homepages?lang=en`)
  const data = await response.json()
  return {
    props: {
      data,
    },
  }
}

export default Redirect
