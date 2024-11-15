import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector, fetchMovies } from '../../features/movieSlice';

const Movielisting = () => {
  const movies = ['luna', 'ellie'];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log('from listing', movies);
  return (
    <div>
      {movies.map((movie) => {
        // const { imdbID, Actors, Language } = movie;

        return (
          <div>
            <p>movie</p>
            <p>Lnaguage: {Language}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Movielisting;
