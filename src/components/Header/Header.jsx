import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selector";
import { logoutThunk } from "../../redux/auth/operations";
import clsx from "clsx";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const linkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <header className={s.header}>
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      {isLoggedIn && <h3>Welcome, {user.name}!</h3>}
      <ul className={s.list}>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts" className={linkClass}>
              Contacts
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={linkClass}>
                Register
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <button
              onClick={() => dispatch(logoutThunk())}
              className={s.exitBtn}>
              Exit
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
