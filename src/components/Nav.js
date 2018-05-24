import React from 'react'

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav-item">
        <a href="/articles">Articles</a>
      </div>
      <div className="nav-item nav-mid"><a href="/"><img src="img/philosophie-logo-grey_1.svg" alt="Philosophie logo"/> Blog Analyser</a></div>
      <div className="nav-item">
        <a href="/authors">Authors</a>
      </div>
    </div>
  )
}

export default Nav
