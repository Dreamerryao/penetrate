import styles from "./index.module.less";
import type { ReactNode } from "react";
import NavBar from "../../components/NavBar";
import { useHistory, useLocation } from "react-router-dom";
import Footer from "src/components/Footer";
import cn from "classnames";
interface BasicLayoutPropss {
  children?: ReactNode;
}
const BasicLayout = ({ children }: BasicLayoutPropss) => {
  const history = useHistory();
  const handleClick = () => {
    history.replace("/");
  };
  // 路由参数: name 为 测试名称  id 为 唯一标识，以id来取题目
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  return (
    <div className={cn("container", styles.container)}>
      <NavBar handleClick={handleClick} name={params.get("name") || ""} />
      {children}
      <Footer />
    </div>
  );
};
export default BasicLayout;
