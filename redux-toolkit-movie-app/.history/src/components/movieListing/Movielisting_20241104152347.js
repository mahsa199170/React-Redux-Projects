import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_MOVIES,
  fetchMovies,
  movieSelector,
} from '../../features/movieSlice';
import movieApi from '../../common/apis/movieApi';
import { apiKey } from '../../common/apis/movieApiKey';

const Movielisting = () => {
  const movies = useSelector(movieSelector);
  const dispatch = useDispatch();
  console.log('from here', movies);

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await movieApi
        .get(`?apikey=${apiKey}&s=Harry&type=movie`)
        .catch((err) => {
          console.log('error', err);
        });
      dispatch(ADD_MOVIES(res.data));
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      {/* {movies.Search.map((movie) => {
        return (
          <div key={movie.Actors}>
            <p>Actirs are : {movie.Actors}</p>
            <p>Lnaguage: </p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Movielisting;
