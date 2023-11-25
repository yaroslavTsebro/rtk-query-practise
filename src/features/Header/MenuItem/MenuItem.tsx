import React from "react";
import { Link } from "react-router-dom";
import { LinkType } from "../Header/Header";
import style from "./MenuItem.module.scss";

const MenuItem: React.FC<LinkType> = ({ to, children }) => {
  return (
    <li className={style.menuItem}>
      <Link to={to} className={style.menuLink}>
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
