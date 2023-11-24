import React, { ReactNode } from "react";
import Container from "../../common/Container/Container";
import Menu from "../Menu/Menu";
import MenuList from "../Menu/MenuList/MenuList";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./Header.module.scss";

export type LinkType = {
  to: string;
  children: ReactNode;
};

const navigation: LinkType[] = [
  { to: "/", children: "Home" },
  { to: "/user", children: "Users" },
  { to: "/post", children: "Post" },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Menu className={styles.headerMenu}>
          <MenuList>
            {navigation.map(({ to, children: text }) => (
              <MenuItem key={`${to} | ${text}`} to={to}>
                {text}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Container>
    </header>
  );
};

export default Header;
