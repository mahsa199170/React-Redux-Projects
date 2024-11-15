import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_MOVIES,
  fetchMovies,
  fetchShows,
  movieSelector,
  showSelector,
} from '../../features/movieSlice';
import movieApi from '../../common/apis/movieApi';
import { apiKey } from '../../common/apis/movieApiKey';
import MovieCard from '../movieCard/MovieCard';
import './Movielisting.scss';
import Slider from 'react-slick';

const Movielisting = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  const movies = useSelector(movieSelector);
  const shows = useSelector(showSelector);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchShows());
  }, [dispatch]);

  return (
    <div className="movie-wrapper">
      {/* movie list */}
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {movies.Response === 'True' ? (
              movies.Search.map((movie, index) => {
                return <MovieCard key={index} data={movie} />;
              })
            ) : (
              <div className="movies-error">
                <h3>{movies.Error}</h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
      {/* show list */}
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {shows.Response === 'True' ? (
              shows.Search.map((show, index) => {
                return <MovieCard key={index} data={show} />;
              })
            ) : (
              <div className="shows-error">
                <h3>{shows.Error}</h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Movielisting;
