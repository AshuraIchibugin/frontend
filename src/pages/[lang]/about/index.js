import React from 'react'
import fetch from 'node-fetch'
import AboutUs from './_AboutUs'

const AboutEn = ({ data, lang }) => {
  console.log(lang)
  return <AboutUs data={data[0]} />
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

export default AboutEn
