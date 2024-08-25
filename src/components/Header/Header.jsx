import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selector";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={s.header}>
      <h2>Home</h2>
      <h3>{user.name}</h3>
      <ul className={s.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
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
