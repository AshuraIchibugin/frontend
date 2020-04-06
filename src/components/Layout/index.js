import React, { Children, cloneElement } from 'react'
import { IntlProvider } from 'react-intl'
import { getCurrentLangKey } from 'ptz-i18n'
import languages from '../../utils/i18n/messages'
import { LANGUAGES } from '../../utils/i18n/languages'

export const Layout = ({
  children,
  i18nMessages,
  location,
  lang = LANGUAGES.ENGLISH,
}) => {
  // const [language, setLanguage] = useState(LANGUAGES.ENGLISH)
  // useEffect(() => {
  //   if (localStorage.getItem('currentLanguage')) {
  //     return setLanguage(localStorage.getItem('currentLanguage'))
  //   }
  //   return ''
  // }, [])
  // useEffect(() => localStorage.setItem('currentLanguage', language), [language])
  // const langKey = getCurrentLangKey(
  //   languages.langs,
  //   languages.defaultLangKey,
  //   url
  // )
  const childProps = Children.map(children, (child) =>
    cloneElement(child, {
      currentLangKey: lang,
    })
  )
  return (
    <IntlProvider locale={lang} messages={i18nMessages[lang]}>
      {childProps}
    </IntlProvider>
  )
}

export default Layout
