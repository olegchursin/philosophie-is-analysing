import React from 'react'
import styled from 'styled-components'
import articles from '../data/data'

// Components
import Hero from './Hero'
import Basics from './Basics'
import Sentiment from './Sentiment'

const Intro = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 60vh;
  color: #3a3c47;
  background-color: #F9F9F9;
  border-bottom: 1px solid #D8D8D8

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`


class MainContainer extends React.Component {

  state = {
    articles: []
  }

  componentDidMount() {
    this.setState({
      articles: articles
    })
  }

  render () {
    return (
      <div>
        <Hero />
        <Intro>
          <h1>Lightweight linguistic analysis <br/>of Philosophie's <a href="https://philosophie.is/blog" className="pink">blog</a> posts</h1>
        </Intro>
        <Basics articles={this.state.articles}/>
        <Sentiment articles={this.state.articles}/>
      </div>
    )
  }
}

export default MainContainer;
