import React from 'react'
import fetch from 'node-fetch'
import HomePage from './_HomePage'
import Layout from '../components/Layout/de'

export const getStaticProps = async () => {
  const { API_URL } = process.env
  const response = await fetch(`${API_URL}/homepages?lang=de`)
  const data = await response.json()
  return {
    props: {
      data,
    },
  }
}

const HomePageDe = ({ data }) => {
  return (
    <Layout>
      <HomePage data={data[0]} />
    </Layout>
  )
}

export default HomePageDe
