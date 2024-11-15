import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector, fetchMovies } from '../../features/movieSlice';

const Movielisting = () => {
  const movies = useSelector(dataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log(movies);
  return (
    <div>
      {movies.map((movie) => {
        const { imdbID, Actors, Language } = movie;

        return (
          <div key={imdbID}>
            <p>Actirs are : {Actors}</p>
            <p>Lnaguage: {Language}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Movielisting;
