import React from "react";
import Header from "../../Header/Header/Header";
import { Outlet } from "react-router-dom";
import style from "./RootLayout.module.scss";

const RootLayout: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
