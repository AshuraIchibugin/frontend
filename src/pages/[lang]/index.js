import React from 'react'
import fetch from 'node-fetch'
import Link from 'next/link'

const Cards = ({ data, lang }) => {
  console.log(data)
  return (
    <>
      <div>lol</div>
      <Link href="[lang]/about" as={`${lang}/about`}>
        <a>go to about us page</a>
      </Link>
    </>
  )
}

export const getStaticPaths = async () => {
  const { API_URL } = process.env
  const responce = await fetch(`${API_URL}/aboutuses`)
  const data = await responce.json()
  const paths = data.map((file) => ({
    params: {
      lang: file.language.lang,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { lang } }) => {
  const { API_URL } = process.env
  const responce = await fetch(`${API_URL}/aboutuses?language.lang=${lang}`)
  const data = await responce.json()
  return {
    props: {
      data,
      lang,
    },
  }
}

export default Cards
