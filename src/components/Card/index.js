import React from 'react'
import parser from 'html-react-parser'

// import './styles.scss'

const Card = ({ card }) => {
  const { API_URL } = process.env
  return (
    <section>
      <div>
        <h1>{card.title}</h1>
        <div>{parser(card.description)}</div>
        <img src={`${API_URL}${card.main_image[0].url}`} alt={card.slug} />
      </div>
    </section>
  )
}

export default Card
