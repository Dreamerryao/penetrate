import styles from "./index.module.less";
import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import { useHistory } from "react-router-dom";
import Footer from "src/components/Footer";
import cn from "classnames";
interface BasicLayoutPropss {
  children?: ReactNode;
  name: string;
}
const BasicLayout = ({ children, name }: BasicLayoutPropss) => {
  const history = useHistory();
  const handleClick = () => {
    history.replace("/penetrate");
  };
  return (
    <div className={cn("container", styles.container)}>
      <NavBar handleClick={handleClick} name={name} />
      {children}
      <Footer />
    </div>
  );
};
export default BasicLayout;
