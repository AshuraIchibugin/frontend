import React from 'react'
import Link from 'next/link'

import translate from '../../utils/i18n/translate'

const HomeHead = ({ data, lang }) => {
  const { API_URL } = process.env
  return (
    <div className="about">
      <div>
        <Link href="/[lang]" as={`/${lang}`}>
          <a>Go to home {lang} page</a>
        </Link>
        <div>{translate('text')}</div>
        <div>{data.title}</div>
        <div>{data.sub_title}</div>
        <div>{data.description}</div>
        <img src={`${API_URL}${data.image.url}`} alt="1image" />
        <div>
          {data.ourpurposes.map((item) => (
            <div key={item.id}>
              <img src={`${API_URL}${item.logo.url}`} alt="logo" />
              <div>{item.title}</div>
              <div>{item.description}</div>
              <Link href="about/[card]" as={`about/${item.slug}`}>
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
