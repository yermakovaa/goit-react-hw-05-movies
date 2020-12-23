import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import AppBar from './components/AppBar';
import LoaderComponent from './components/LoaderComponent';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-view" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-view" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movies-details-view" */
  ),
);

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3700} />
    </Container>
  );
}

export default App;
