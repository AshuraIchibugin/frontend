import React from 'react'
import fetch from 'node-fetch'
// import { useRouter } from 'next/router'
import HomePage from './_HomePage'

const Redirect = ({ data }) => {
  return (
    <>
      <HomePage data={data[0]} />
    </>
  )
}

export const getStaticProps = async () => {
  const { API_URL } = process.env
  const response = await fetch(`${API_URL}/homepages?language.lang=en`)
  const data = await response.json()
  return {
    props: {
      data,
    },
  }
}

export default Redirect
