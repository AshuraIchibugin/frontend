import React from 'react'
import Link from 'next/link'

import translate from '../../utils/i18n/translate'

const HomeHead = ({ data }) => {
  const { API_URL } = process.env
  return (
    <div>
      <div>
        <div>{translate('aboutTitle', { value: data.title })}</div>
        <div>{translate('aboutSubTitle', { value: data.sub_title })}</div>
        <div>{translate('aboutDescription', { value: data.description })}</div>
        <img src={`${API_URL}${data.image.url}`} alt="1image" />
        <div>
          {data.ourpurposes.map((item) => (
            <div key={item.id}>
              <img src={`${API_URL}${item.logo.url}`} alt="logo" />
              <div>{item.title}</div>
              <div>{item.description}</div>
              <Link href={`${item.slug}`}>
                <a>{`go to card: ${item.title}`}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeHead
