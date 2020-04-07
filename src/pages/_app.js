import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import { getCurrentLangKey } from 'ptz-i18n'
import { LANGUAGES } from '../utils/i18n/languages'
import messages from '../utils/i18n/messages'

const Layout = ({ Component, pageProps, lang = LANGUAGES.ENGLISH, router }) => {
  console.log(router)
  const [language, setLanguage] = useState(lang)
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default Layout
