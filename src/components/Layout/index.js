import React, { Children, cloneElement } from 'react'
import { IntlProvider } from 'react-intl'
import { LANGUAGES } from '../../utils/i18n/languages'

export const Layout = ({
  children,
  i18nMessages,
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
