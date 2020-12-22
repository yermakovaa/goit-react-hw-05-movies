import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/goit-react-hw-04-movies"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/goit-react-hw-04-movies/movies"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
