import React from 'react'
import { IntlProvider } from 'react-intl'

import { LANGUAGES } from './languages'
import massages from './messages'

const Provider = ({ children, lang = LANGUAGES.ENGLISH }) => (
  <IntlProvider locale={lang} messages={massages[lang]}>
    {children}
  </IntlProvider>
)

export default Provider
