import React from 'react';
import Author from './Author';

const AuthorsList = props => {
  // console.log(props.authors) // works
  const authorsArr = props.authors;

  return (
    <div className="authors">
      {authorsArr.reverse().map(author => {
        return (
          <div key={author.id} className="authors-item">
            <Author
              name={author.name}
              img_url={author.img_url}
              title={author.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AuthorsList;
