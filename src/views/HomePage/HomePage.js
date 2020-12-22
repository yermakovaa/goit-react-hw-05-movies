import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as apiService from '../../services/apiService';
import Status from '../../services/status';
import LoaderComponent from '../../components/LoaderComponent';
import ErrorView from '../../components/ErrorView';
// import propTypes from 'prop-types';
import s from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    apiService
      .getTrending()
      .then(({ results }) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <main>
      <h1 className={s.title}>Trending today</h1>

      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorView message={error.message} />}

      {status === Status.RESOLVED && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

// HomePage.propTypes = {
//   params: propTypes.
// }

export default HomePage;
