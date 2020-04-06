import React, { useState } from 'react'
import fetch from 'node-fetch'
import HomePage from './_HomePage'
import Layout from '../components/Layout/en'

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

const HomePageEn = ({ data }) => {
  return (
    <Layout>
      <HomePage data={data[0]} />
    </Layout>
  )
}

export default HomePageEn
