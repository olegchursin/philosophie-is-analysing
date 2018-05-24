import React from 'react'
import styled from 'styled-components'
import authors from '../data/authors'

import AuthorsList from './AuthorsList'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  height: 25vh;
  color: #fff;
  background-color: #7c3d4f;
`

class AuthorsContainer extends React.Component {

  state = {
    authors: []
  }

  componentDidMount = () => {
    this.setState({
      authors: authors
    })
  }

  render () {
    return (
      <div>
        <Header>
          <h1 className="skewed">Authors</h1>
        </Header>
        <AuthorsList authors={this.state.authors} />
      </div>
    )
  }
}

export default AuthorsContainer;
