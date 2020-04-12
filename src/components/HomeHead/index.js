import React from 'react'
import Link from 'next/link'
import translate from '../../utils/i18n/translate'
// import './styles.scss'

const HomeHead = ({ data, currentLangKey }) => (
  <div>
    <div>
      <div>{data.title} </div>
      <div> {data.description}</div>
      <div>{translate('text')}</div>
    </div>
  </div>
)

export default HomeHead
