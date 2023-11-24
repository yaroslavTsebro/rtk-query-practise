import { ClassNameChildrenProps } from "../../../common/props";
import styles from "./MenuList.module.scss";

const MenuList: React.FC<ClassNameChildrenProps> = ({
  children,
  className = "",
}) => {
  const menuListClass = `${styles.menuList} ${className}`.trim();

  return <ul className={menuListClass}>{children}</ul>;
};

export default MenuList;
