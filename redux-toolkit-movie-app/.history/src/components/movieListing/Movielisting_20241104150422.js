import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, movieSelector } from '../../features/movieSlice';

const Movielisting = () => {
  const movies = useSelector(movieSelectorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log('from listing', movies);
  return (
    <div>
      {/* {movies.map((movie) => {
        const { imdbID, Actors, Language } = movie;

        return (
          <div key={imdbID}>
            <p>Actirs are : {Actors}</p>
            <p>Lnaguage: {Language}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Movielisting;
