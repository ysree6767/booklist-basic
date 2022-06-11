import React from 'react'

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
      // onMouseOver={() => {
      //   console.log(title)
      // }}
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

export default Book
