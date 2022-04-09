import React, {useCallback, useEffect, useRef, useState} from 'react';

import movies from '../../api/movies';
import MoviesList from './movie-list.component';

import './movie-container.styles.scss';

const MovieContainer = ({term}) => {
  console.log(term);
  const [movieList, setMovieList] = useState([]);
  const initialRender = useRef(true);

  const getMovies = useCallback(async () => {
    const response = await movies.get('search/movie', {
      params: {
        query: term,
      },
    });
    setMovieList(response.data.results);
  }, [term]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    getMovies();
  }, [getMovies]);

  return (
    <>
      <section>
        <MoviesList movies={movieList} />
      </section>
    </>
  );
};

export default MovieContainer;
