import React, {useEffect, useRef, useState} from 'react';

import movies from '../../api/movies';
import MoviesList from './movie-list.component';

import './movie-container.styles.scss';

const MovieContainer = ({term}) => {
  console.log(term);
  const [movieList, setMovieList] = useState([]);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const getMovies = async () => {
      const response = await movies.get('search/movie', {
        params: {
          query: term,
        },
      });
      console.log(term);
      console.log(response);
      setMovieList(response.data.results);
    };
    getMovies();
  }, [term]);

  return (
    <>
      <section>
        <MoviesList movies={movieList} />
      </section>
    </>
  );
};

export default MovieContainer;
