import React from 'react'

const Author = ({name, title, img_url}) => {
  return (
    <div className="author-card">
      <img src={img_url} alt={name}/>
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  )
}

export default Author
