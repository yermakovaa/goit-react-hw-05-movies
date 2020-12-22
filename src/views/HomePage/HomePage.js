import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as apiService from '../../services/apiService';
// import propTypes from 'prop-types';
import s from './HomePage.module.css';

const HomePage = () => {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    apiService.getTrending().then(({ results }) => setMovies(results));
  }, []);

  return (
    <main>
      <h1 className={s.title}>Trending today</h1>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

// HomePage.propTypes = {
//   params: propTypes.
// }

export default HomePage;
