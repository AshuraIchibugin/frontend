import React from 'react'
import fetch from 'node-fetch'
import Link from 'next/link'

const Cards = ({ data, lang }) => {
  console.log(data)
  return (
    <>
      <div>lol</div>
      <Link href="[lang]/about" as={`${lang}/about`}>
        <a>{lang}, go to about us page</a>
      </Link>
    </>
  )
}

export const getStaticPaths = async () => {
  const { API_URL } = process.env
  const responce = await fetch(`${API_URL}/languages`)
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
  const responce = await fetch(`${API_URL}/languages?lang=${lang}`)
  const data = await responce.json()
  return {
    props: {
      data,
      lang,
    },
  }
}

export default Cards
