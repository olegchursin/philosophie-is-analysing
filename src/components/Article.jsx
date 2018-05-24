import React from 'react';
import Keyword from './Keyword';

const styles = {
  wrapper: {
    margin: '40px 0 80px',
    padding: '0 25%'
  },
  smallText: {
    fontSize: '0.8em'
  },
  link: {
    color: '#e22d5f'
  },
  stats: {
    backgroundColor: '#acadb1',
    color: 'white',
    padding: '0px 5px',
    borderRadius: '5px'
  },
  img: {
    maxWidth: '600px',
    height: 'auto'
  },
  positive: {
    backgroundColor: '#7ab800',
    color: 'white',
    padding: '3px 10px',
    borderRadius: '5px'
  },
  negative: {
    backgroundColor: '#e22d5f',
    color: 'white',
    padding: '3px 10px',
    borderRadius: '5px'
  },
  neutral: {
    backgroundColor: '#acadb1',
    color: 'white',
    padding: '3px 10px',
    borderRadius: '5px'
  }
};

const Article = ({ article }) => {
  const isPositive = article.sentiment === 'positive';
  const isNegative = article.sentiment === 'negative';
  const keywords = article.keywords;
  return (
    <div style={styles.wrapper}>
      <div>
        <img style={styles.img} src={article.img_url} alt={article.title} />
      </div>
      <p style={styles.smallText}>
        {article.date} // {article.author}
      </p>
      <h2>
        <a style={styles.link} href={article.url} target="_blank">
          {article.title}
        </a>
      </h2>

      <p>
        Overall sentiment is{' '}
        <span
          style={
            isPositive
              ? styles.positive
              : isNegative ? styles.negative : styles.neutral
          }
        >
          {article.sentiment}
        </span>{' '}
        with the score of{' '}
        <span
          style={
            isPositive
              ? styles.positive
              : isNegative ? styles.negative : styles.neutral
          }
        >
          {article.sentiment_score}
        </span>
      </p>
      <h4>Stats</h4>
      <p>
        The article has <span style={styles.stats}>{article.symbols}</span>{' '}
        symbols that are grouped into{' '}
        <span style={styles.stats}>{article.words}</span> words.{' '}
      </p>
      <p>
        Phonetically, it consists of{' '}
        <span style={styles.stats}>{article.vowels}</span> vowels and{' '}
        <span style={styles.stats}>{article.consonants}</span> consonants.
      </p>
      <div>
        <h4>Tier 1 keywords:</h4>
        {keywords
          .slice(0, 10)
          .map(keyword => <Keyword key={keyword} keyword={keyword} />)}
        <h4>Tier 2 keywords:</h4>
        {keywords
          .slice(10)
          .map(keyword => <Keyword key={keyword} keyword={keyword} />)}
      </div>
    </div>
  );
};

export default Article;
