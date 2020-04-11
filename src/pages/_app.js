import React, { useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import { getCurrentLangKey } from 'ptz-i18n'
import Router from 'next/router'
import { langs, defaultLang } from '../utils/i18n/languages'
import messages from '../utils/i18n/messages'
import '../assets/styles/main.scss'

const Layout = ({ Component, pageProps, router }) => {
  const url = `/${router.query.lang}/`
  const langKey = getCurrentLangKey(langs, defaultLang, url)
  return (
    <IntlProvider locale={langKey} messages={messages[langKey]}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default Layout
