import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, movieSelector } from '../../features/movieSlice';
import movieApi from '../../common/apis/movieApi';
import { apiKey } from '../../common/apis/movieApiKey';

const Movielisting = () => {
  const movies = useSelector(movieSelectorSelector);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await movieApi
        .get(`?apikey=${apiKey}&s=Hary&type=movies`)
        .catch((err) => {
          console.log('error', err);
        });
    };
  });

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
