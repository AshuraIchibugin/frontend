import React from 'react'
import Link from 'next/link'

import translate from '../../utils/i18n/translate'

const HomeHead = ({ data }) => {
  console.log(data)
  return (
    <div>
      <div>
        <div>{translate('aboutTitle', { value: data.title })}</div>
        <div>{translate('aboutSubTitle', { value: data.sub_title })}</div>
        <div>{translate('aboutDescription', { value: data.description })}</div>
        <img src={`http://localhost:1337${data.image.url}`} alt="1image" />
        <div>
          {data.ourpurposes.map((item) => (
            <div key={item.id}>
              <img src={`http://localhost:1337${item.logo.url}`} alt="logo" />
              <div>{item.title}</div>
              <div>{item.description}</div>
              <Link href={`template/${item.slug}`}>
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
