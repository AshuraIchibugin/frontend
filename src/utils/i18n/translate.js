import React from 'react'
import { FormattedMessage } from 'react-intl'

const translate = (key, value) => (
  <FormattedMessage id={key} values={{ ...value }} />
)

export default translate
