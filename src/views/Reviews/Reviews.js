import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowMore from 'react-simple-show-more';
import * as apiService from '../../services/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Status from '../../services/status';
import LoaderComponent from '../../components/LoaderComponent';
import ErrorView from '../../components/ErrorView';
import s from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    apiService
      .getMovieReviews(movieId)
      .then(({ results }) => {
        if (results.length === 0) {
          toast.error("💩 We don't have any reviews for this movie.");
          setStatus(Status.IDLE);
          return;
        }
        setReviews(results);
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
          {reviews.map(review => (
            <li key={review.id} className={s.item}>
              <h4 className={s.author}>Author: {review.author}</h4>
              <p className={s.content}>
                <ShowMore
                  text={review.content}
                  length={700}
                  showMoreLabel=" Show more >>"
                  showLessLabel=" Show less <<"
                  style={{
                    cursor: 'pointer',
                    color: '#fa7584',
                    fontWeight: 'bold',
                  }}
                />
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Reviews;
