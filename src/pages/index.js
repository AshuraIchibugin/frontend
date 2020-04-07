import React from 'react'
import fetch from 'node-fetch'
// import { useRouter } from 'next/router'
import HomePage from './_HomePage'

const Redirect = (props) => {
  console.log(props)
  return (
    <>
      <HomePage data={props.data[0]} />
    </>
  )
}

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

export default Redirect
