import React from 'react';

import Movie from './movie.component';

import './movie-list.styles.scss';

const MovieList = ({movies}) => {
  return (
    <ul className="movie-list">
      {movies.map(({id, title, release_date, overview}) => (
        <Movie
          key={id}
          title={title}
          releaseDate={release_date}
          openingText={overview}
        />
      ))}
    </ul>
  );
};

export default MovieList;
