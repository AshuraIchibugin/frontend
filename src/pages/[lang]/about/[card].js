import React from 'react'
import fetch from 'node-fetch'

import Card from '../../../components/Card'

const Cards = ({ post }) => {
  const card = post[0]
  return (
    <>
      <Card card={card} />
    </>
  )
}

export const getStaticPaths = async () => {
  const { API_URL } = process.env
  const responce = await fetch(`${API_URL}/cards`)
  const data = await responce.json()
  const paths = data.map((file) => ({
    params: {
      card: file.slug,
      lang: file.language.lang,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { card, lang } }) => {
  const { API_URL } = process.env
  const responce = await fetch(
    `${API_URL}/cards?slug=${card}&language.lang=${lang}`
  )
  const post = await responce.json()
  return {
    props: {
      post,
    },
  }
}

export default Cards
