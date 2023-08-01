import React, { useContext } from "react";
import classes from "../pages/Posts.module.css";
import { Link } from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import { AuthContext } from "../context/context";

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className={classes.menu}>
      <div className={classes.container}>
        {isAuth && (
          <Link className={classes.link} onClick={logout}>
            Выйти
          </Link>
        )}
        <Link className={classes.link} to="/about">
          Про нас
        </Link>
        <Link className={classes.link} to="/posts">
          Посты
        </Link>
        <Link to="/*"></Link>
      </div>
    </div>
  );
};

export default NavBar;
