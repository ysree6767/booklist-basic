import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/813uPMOnskL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'You Can',
    author: 'George Matthew Adams',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/71I0wCu256L._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Be Your Own Sunshine',
    author: 'James Allen',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // console.log(book)
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

const Book = (prop) => {
  // console.log(prop)
  const { img, title, author } = prop
  // attribute,eventHandler
  ///onClick,onMouseOver
  const clickHandler = () => {
    alert('hello')
  }

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      {' '}
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title} </h1>
      <h4>{author} </h4>
      <button type='button' onClick={clickHandler}>
        example{' '}
      </button>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
