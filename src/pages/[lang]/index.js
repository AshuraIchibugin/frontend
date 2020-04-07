import React from 'react'
import fetch from 'node-fetch'

const Cards = ({ data, lang }) => {
  console.log(data)
  return (
    <>
      <div>{data[0].lang}</div>
    </>
  )
}

export const getStaticPaths = async () => {
  const { API_URL } = process.env
  const responce = await fetch(`${API_URL}/homepages`)
  const data = await responce.json()
  const paths = data.map((file) => ({
    params: {
      lang: file.lang,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { lang } }) => {
  const { API_URL } = process.env
  const responce = await fetch(`${API_URL}/homepages?lang=${lang}`)
  const data = await responce.json()
  return {
    props: {
      data,
    },
  }
}

export default Cards
