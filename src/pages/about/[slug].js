import React from 'react'
import fetch from 'node-fetch'

const Cards = ({ post }) => {
  console.log(post)
  return <h1>slug</h1>
}

export const getStaticPaths = async () => {
  const responce = await fetch('http://localhost:1337/cards')
  const data = await responce.json()
  const paths = data.map((file) => ({
    params: {
      slug: file.slug,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const responce = await fetch(`http://localhost:1337/cards?slug=${slug}`)
  const post = await responce.json()
  return {
    props: {
      post,
    },
  }
}

export default Cards
