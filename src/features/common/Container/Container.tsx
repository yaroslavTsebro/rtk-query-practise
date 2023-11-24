import { ClassNameChildrenProps } from "../props";
import styles from "./Container.module.scss";

type ContainerProps = ClassNameChildrenProps;

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  const containerClass = `${styles.container} ${className}`.trim();

  return <div className={containerClass}>{children}</div>;
};

export default Container;
