import React from 'react'
import fetch from 'node-fetch'

import HomeHead from '../components/HomeHead'
import { I18nProvider, LANGUAGES } from '../utils/i18n/index'

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:1337/homepages')
  const data = await response.json()
  return {
    props: {
      data,
    },
  }
}

const HomePage = ({ data }) => {
  const languageData = (lang, myArray) => {
    if (lang === LANGUAGES.ENGLISH) return myArray.find((x) => x.id === 1)
    if (lang === LANGUAGES.GERMAN) return myArray.find((x) => x.id === 2)
    return ''
  }
  return (
    <I18nProvider lang={LANGUAGES.ENGLISH}>
      <HomeHead data={languageData(LANGUAGES.GERMAN, data)} />
    </I18nProvider>
  )
}

export default HomePage
