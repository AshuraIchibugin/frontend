import React from 'react'
import fetch from 'node-fetch'
import parser from 'html-react-parser'

const Cards = ({ post }) => {
  const data = post[0]
  return (
    <section>
      <div>
        <h1>{data.title}</h1>
        <div>{parser(data.description)}</div>
        <img
          src={`http://localhost:1337${data.main_image.url}`}
          alt={data.slug}
        />
      </div>
    </section>
  )
}

export const getStaticPaths = async () => {
  const responce = await fetch('http://localhost:1337/cards')
  const data = await responce.json()
  const paths = data.map((file) => ({
    params: {
      card: file.slug,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params: { card } }) => {
  const responce = await fetch(`http://localhost:1337/cards?slug=${card}`)
  const post = await responce.json()
  return {
    props: {
      post,
    },
  }
}

export default Cards
