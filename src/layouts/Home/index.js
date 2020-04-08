import React from 'react'
import Link from 'next/link'
import HomeHead from '../../components/HomeHead'

const HomeLayouts = ({ data, lang }) => {
  return (
    <>
      <HomeHead data={data} />
      <Link href="[lang]/about" as={`${lang}/about`}>
        <a>{lang}, go to about us page</a>
      </Link>
    </>
  )
}
export default HomeLayouts
