import React from 'react';
import _ from 'lodash';
import Article from './Article';

const ArticlesList = ({ articles }) => {
  return (
    <div>
      {_.map(articles, article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
