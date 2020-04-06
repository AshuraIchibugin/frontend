import React from 'react'
import translate from '../../utils/i18n/translate'

const HomeHead = ({ data, currentLangKey }) => {
  return (
    <div>
      <div>
        <div>{translate('homeTitle', { value: data.title })}</div>
        <div>{translate('homeSubTitle', { value: data.sub_title })}</div>
        <div>{translate('homeDescription', { value: data.description })}</div>
        <div>{translate('text')}</div>
      </div>
    </div>
  )
}

export default HomeHead
