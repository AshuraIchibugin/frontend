import React from 'react'
import fetch from 'node-fetch'
import HomeLayouts from '../../layouts/Home'

const Cards = ({ data, lang }) => {
  return (
    <>
      <HomeLayouts data={data[0]} lang={lang} />
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
  const responce = await fetch(`${API_URL}/homepages?language.lang=${lang}`)
  const data = await responce.json()
  return {
    props: {
      data,
      lang,
    },
  }
}

export default Cards
