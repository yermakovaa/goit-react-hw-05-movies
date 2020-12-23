import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as apiService from '../../services/apiService';
import Status from '../../services/status';
import LoaderComponent from '../../components/LoaderComponent';
import ErrorView from '../../components/ErrorView';
import SearchBar from '../../components/SearchBar';
import noImageFound from '../../img/noimagefound.jpg';
import s from './MoviesPage.module.css';

function MoviesPage() {
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!query) return;
    setStatus(Status.PENDING);
    apiService
      .searchMovies(query)
      .then(({ results }) => {
        if (results.length === 0) {
          setError(`No results were found for ${query}!`);
          setStatus(Status.REJECTED);
          return;
        }

        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, [query]);

  const searchImages = newSearch => {
    setQuery(newSearch);
    setMovies(null);
    setError(null);
    setStatus(Status.IDLE);
  };

  return (
    <main className={s.main}>
      <SearchBar onHandleSubmit={searchImages} />

      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorView message={error} />}

      {status === Status.RESOLVED && (
        <ul className={s.moviesList}>
          {movies.map(movie => (
            <li key={movie.id} className={s.moviesItem}>
              <Link to={`${url}/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : noImageFound
                  }
                  alt={movie.title}
                  className={s.poster}
                />
              </Link>
              <span className={s.movieTitle}>{movie.title}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default MoviesPage;
