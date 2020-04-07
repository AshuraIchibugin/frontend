import React, { useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import { getCurrentLangKey } from 'ptz-i18n'
import languages from '../utils/i18n/messages'
import { LANGUAGES } from '../utils/i18n/languages'
import messages from '../utils/i18n/messages'

const Layout = ({ Component, pageProps, lang = LANGUAGES.ENGLISH }) => {
  useEffect(() => localStorage.setItem('lang', lang), [lang])
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Component {...pageProps} lang={lang} />
    </IntlProvider>
  )
}

export default Layout
