import PropTypes from 'prop-types';
import errorImage from './oops.jpg';
import s from './ErrorView.module.css';

function ErrorView({ message }) {
  return (
    <div role="alert" className={s.wrapper}>
      <img src={errorImage} width="550" alt="sadcat" />
      <p text={message} className={s.text}>
        {message}
      </p>
    </div>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorView;
