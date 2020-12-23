import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Route, useParams, useRouteMatch } from 'react-router-dom';
import * as apiService from '../../services/apiService';
import Status from '../../services/status';
import LoaderComponent from '../../components/LoaderComponent';
import ErrorView from '../../components/ErrorView';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../Cast' /* webpackChunkName: "cast-subview"*/),
);

const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "reviews-subview"*/),
);

function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    apiService
      .getMovieDetails(movieId)
      .then(({ poster_path, original_title, popularity, overview, genres }) => {
        setMovie({
          src: `https://image.tmdb.org/t/p/w500/${poster_path}`,
          title: original_title,
          score: popularity.toFixed(0),
          overview,
          genres,
        });
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <main className={s.main}>
      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorView message={error} />}

      {status === Status.RESOLVED && (
        <>
          <div className={s.wrapper}>
            <img className={s.poster} src={movie.src} alt={movie.title} />
            <div>
              <h2 className={s.movieTitle}>{movie.title}</h2>
              <p className={s.info}>User Score: {movie.score} %</p>
              <h3 className={s.title}>Overview</h3>
              <p className={s.info}>{movie.overview}</p>
              <h3 className={s.title}>Genres</h3>
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id} className={s.info}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className={s.nav}>
            <li>
              <NavLink
                to={`${url}/cast`}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/reviews`}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<LoaderComponent />}>
            <Route path={`${path}/cast`}>
              {status === Status.RESOLVED && <Cast />}
            </Route>

            <Route path={`${path}/reviews`}>
              {status === Status.RESOLVED && <Reviews />}
            </Route>
          </Suspense>
        </>
      )}
    </main>
  );
}

export default MovieDetailsPage;
