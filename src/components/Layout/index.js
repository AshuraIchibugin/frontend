// import React, { useState, useEffect } from 'react'

// import { IntlProvider } from 'react-intl'
// import { LANGUAGES } from '../../utils/i18n/languages'
// import massages from '../../utils/i18n/messages'

// export const Contex = React.createContext()

// export const Layout = ({ children }) => {
//   const [language, setLanguage] = useState(LANGUAGES.GERMAN)
//   useEffect(() => {
//     if (localStorage.getItem('currentLanguage')) {
//       return setLanguage(localStorage.getItem('currentLanguage'))
//     }
//     return ''
//   }, [])
//   useEffect(() => localStorage.setItem('currentLanguage', language), [language])

//   return (
//     <Contex.Provider value={{ language, setLanguage }}>
//       <IntlProvider locale={language} messages={massages[language]}>
//         {children}
//       </IntlProvider>
//     </Contex.Provider>
//   )
// }

// export default Layout
