import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as apiService from '../../services/apiService';
import { addBackToTop } from 'vanilla-back-to-top';
import Status from '../../services/status';
import LoaderComponent from '../../components/LoaderComponent';
import ErrorView from '../../components/ErrorView';
import noImageFound from '../../img/noimagefound.jpg';
import s from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();

  useEffect(() => {
    setStatus(Status.PENDING);
    apiService
      .getTrending()
      .then(({ results }) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
        addBackToTop({
          backgroundColor: '#fa7584',
        });
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <main className={s.main}>
      <h1 className={s.title}>Trending today</h1>

      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorView message={error.message} />}

      {status === Status.RESOLVED && (
        <ul className={s.moviesList}>
          {movies.map(movie => (
            <li key={movie.id} className={s.moviesItem}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: location },
                }}
              >
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

export default HomePage;
