import React, { useState } from 'react'
import fetch from 'node-fetch'
import HomePage from './_HomePage'
import Layout from '../components/Layout/de'

export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:1337/homepages?lang=de`)
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
