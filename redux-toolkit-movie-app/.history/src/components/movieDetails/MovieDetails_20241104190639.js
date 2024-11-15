import React, { useEffect } from 'react';
import './MovieDetails.scss';
import {
  fetchMovies,
  fetchShowOrMovieDetails,
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
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
          </span>

          <span>
            IMDB Votes <i className="fa fa-star"></i> : {data.imdbRating}
          </span>

          <span>
            Runtime <i className="fa fa-star"></i> : {data.imdbRating}
          </span>

          <span>
            Year <i className="fa fa-star"></i> : {data.imdbRating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
