import React from 'react'
import fetch from 'node-fetch'
import AboutLayouts from '../../../layouts/About'

const AboutEn = ({ data, lang }) => {
  return (
    <>
      <AboutLayouts data={data[0]} lang={lang} />
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

export default AboutEn
