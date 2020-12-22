import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as apiService from '../../services/apiService';
import Status from '../../services/status';
import LoaderComponent from '../../components/LoaderComponent';
import ErrorView from '../../components/ErrorView';

function Cast() {
  const { movieId } = useParams();
  const [authors, setAuthors] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    apiService
      .getMovieCredits(movieId)
      .then(({ cast }) => {
        setAuthors(cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorView message={error} />}

      {status === Status.RESOLVED && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${author.profile_path}`}
                alt={author.original_name}
              />
              <h4>{author.original_name}</h4>
              <p>{author.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cast;
