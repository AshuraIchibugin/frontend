import React, { useState, useEffect } from 'react'
import fetch from 'node-fetch'

import AboutHead from '../../components/AboutHead'
import { I18nProvider, LANGUAGES } from '../../utils/i18n/index'

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:1337/aboutuses')
  const data = await response.json()
  return {
    props: {
      data,
    },
  }
}

const About = ({ data }) => {
  const [language, setLanguage] = useState(LANGUAGES.ENGLISH)
  useEffect(() => {
    if (localStorage.getItem('currentLanguage')) {
      return setLanguage(localStorage.getItem('currentLanguage'))
    }
    return ''
  }, [])
  useEffect(() => localStorage.setItem('currentLanguage', language), [language])
  const languageData = (lang, myArray) => {
    if (lang === LANGUAGES.ENGLISH) return myArray.find((x) => x.id === 1)
    if (lang === LANGUAGES.GERMAN) return myArray.find((x) => x.id === 2)
    return ''
  }
  return (
    <I18nProvider lang={language}>
      <AboutHead data={languageData(language, data)} />
      <button type="button" onClick={() => setLanguage(LANGUAGES.ENGLISH)}>
        EN
      </button>
      <button type="button" onClick={() => setLanguage(LANGUAGES.GERMAN)}>
        DE
      </button>
    </I18nProvider>
  )
}

export default About
