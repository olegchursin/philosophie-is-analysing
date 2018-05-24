import React from 'react'

const Basics = ({articles}) => {
  let totalArticles = articles.length;
  let totalWords = 0
  let totalVowels = 0
  let totalConsonants = 0
  let totalSymbols = 0
  articles.forEach(article => totalWords += article.words)
  articles.forEach(article => totalVowels += article.vowels)
  articles.forEach(article => totalConsonants += article.consonants)
  articles.forEach(article => totalSymbols += article.symbols)
  const wordsPerArticle = Math.floor(totalWords/totalArticles)

  return (
    <div className="numbers">
      <h1>Naked Numbers</h1>
      <div className="numbersGrid">
        <div className="numbersItem">
          <h2 className="huge">
            {totalArticles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
          <p>articles</p>
        </div>
        <div className="numbersItem">
          <h2 className="huge">
            {totalWords.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
          <p>words</p>
        </div>
        <div className="numbersItem">
          <h2 className="huge">
            {wordsPerArticle.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
          <p>words/article avg.</p>
        </div>
        <div className="numbersItem">
          <h2 className="huge">
            {totalSymbols.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
          <p>symbols</p>
        </div>
        <div className="numbersItem">
          <h2 className="huge">
            {totalVowels.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
          <p>vowels</p>
        </div>
        <div className="numbersItem">
          <h2 className="huge">
            {totalConsonants.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
          <p>consonants</p>
        </div>
      </div>
    </div>
  )
}

export default Basics
