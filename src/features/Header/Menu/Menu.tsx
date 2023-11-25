import styles from "./Menu.module.scss";
import { ClassNameChildrenProps } from "../../common/props";
import MenuList from "./MenuList/MenuList";

type MenuComponent = React.FC<ClassNameChildrenProps> & {
  List: typeof MenuList;
};

const Menu: MenuComponent = ({ children, className = "" }) => {
  const menuClass = `${styles.menu} ${className}`.trim();

  return <nav className={menuClass}>{children}</nav>;
};

Menu.List = MenuList;

export default Menu;
