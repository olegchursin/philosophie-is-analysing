import React from 'react'
import _ from 'lodash'


const Sentiment = ({articles}) => {

  const styles = {
    sentiment: {
      height: 'auto',
      padding: '40px 0',
      textAlign: 'center',
      backgroundColor: '#3a3c47',
      color: '#fff',
    },
    sentimentGrid: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 80px'
    },
    sentimentItem: {
      margin: '20px 80px'
    },
  }

  let totalPositive = 0
  let totalNeutral = 0
  let totalNegative = 0

  _.forEach(articles, (article, index) => {
    if (article.sentiment === 'positive') {
      totalPositive++
    } else if (article.sentiment === 'neutral') {
      totalNeutral++
    } else {
      totalNegative++
    }
  })


  return (
    <div style={styles.sentiment}>
      <h1>Sentiment</h1>
      <div style={styles.sentimentGrid}>
        <div style={styles.sentimentItem}>
          <h1>Positive</h1>
          <p>{totalPositive} articles</p>
        </div>
        <div style={styles.sentimentItem}>
          <h1>Neutral</h1>
          <p>{totalNeutral} articles</p>
        </div>
        <div style={styles.sentimentItem}>
          <h1>Negative</h1>
          <p>{totalNegative} {totalNegative === 1 ? `article` : `articles`}</p>
        </div>
      </div>
    </div>

  )
}

export default Sentiment
