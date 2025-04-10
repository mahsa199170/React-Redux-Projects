import React, { useEffect } from 'react';
import './MovieDetails.scss';
import {
  fetchMovies,
  fetchShowOrMovieDetails,
  REMOVE_SELECTED_MOVIE_OR_SHOW,
  showOrMovieSelector,
} from '../../features/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(showOrMovieSelector);

  console.log(data);

  useEffect(() => {
    dispatch(fetchShowOrMovieDetails(imdbID));
    return () => {
      dispatch(REMOVE_SELECTED_MOVIE_OR_SHOW());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      <>
        <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
            </span>

            <span>
              IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
            </span>

            <span>
              Runtime <i className="fa fa-film"></i> : {data.Runtime}
            </span>

            <span>
              Year <i className="fa fa-calendar"></i> : {data.Year}
            </span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Genres</span>
              <span>{data.Genres}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>

          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </div>
      </>
    </div>
  );
};

export default MovieDetails;
