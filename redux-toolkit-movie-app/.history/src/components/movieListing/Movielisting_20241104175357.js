import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_MOVIES,
  fetchMovies,
  movieSelector,
} from '../../features/movieSlice';
import movieApi from '../../common/apis/movieApi';
import { apiKey } from '../../common/apis/movieApiKey';
import MovieCard from '../movieCard/MovieCard';
import './Movielisting.scss';

const Movielisting = () => {
  const movies = useSelector(movieSelector);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);

  useEffect(() => {
    // const fetchMovies = async () => {
    //   const res = await movieApi
    //     .get(`?apikey=${apiKey}&s=Harry&type=movie`)
    //     .catch((err) => {
    //       console.log('error', err);
    //     });
    //   dispatch(ADD_MOVIES(res.data));
    // };

    // fetchMovies();
    dispatch(fetchMovies());
  }, [dispatch]);
  console.log('i am movies from listing', movies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies.Response === 'True' ? (
            movies.Search.map((movie, index) => {
              return <MovieCard key={index} data={movie} />;
            })
          ) : (
            <div className="movies-error">
              <h3>{movies.Error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movielisting;
