import React from 'react';

const styles = {
  keyword: {
    display: 'inline-block',
    border: '1px solid grey',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '5px'
  }
};

const Keyword = ({ keyword }) => {
  return <div style={styles.keyword}>{keyword}</div>;
};

export default Keyword;
