import React from 'react';
import styled from 'styled-components';
import articles from '../data/data';

import ArticlesList from './ArticlesList';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  height: 25vh;
  color: #fff;
  background-color: #7c3d4f;
`;

class ArticlesContainer extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.setState({
      articles: articles
    });
  }

  render() {
    return (
      <div>
        <Header>
          <h1 className="skewed">Articles</h1>
        </Header>
        <ArticlesList articles={this.state.articles} />
      </div>
    );
  }
}

export default ArticlesContainer;
