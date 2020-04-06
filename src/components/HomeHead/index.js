import React from 'react'
import Link from 'next/link'
import translate from '../../utils/i18n/translate'
// import './styles.scss'

const HomeHead = ({ data, currentLangKey }) => (
  <div>
    <div>
      <div>{translate('homeTitle', { value: data.title })}</div>
      <div>{translate('homeSubTitle', { value: data.sub_title })}</div>
      <div>{translate('homeDescription', { value: data.description })}</div>
      <div>{translate('text')}</div>
    </div>
    <Link href="/about">
      <a>got to about page</a>
    </Link>
  </div>
)

export default HomeHead
