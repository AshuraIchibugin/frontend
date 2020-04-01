import React from 'react'
import translate from '../../utils/i18n/translate'

const HomeHead = ({ data }) => (
  <div>
    <div>
      <div>{translate('title', { value: data.title })}</div>
      <div>{translate('subTitle', { value: data.sub_title })}</div>
      <div>{translate('description', { value: data.description })}</div>
    </div>
  </div>
)

export default HomeHead
