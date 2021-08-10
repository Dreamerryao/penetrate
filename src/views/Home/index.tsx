import styles from "./index.module.less";
import Head from "./Head";
import Body from "./Body";
import Footer from "@/components/Footer";
import cn from "classnames";
const Home = () => {
  return (
    <div className={cn("container", styles.container)}>
      <Head />
      <Body />
      <Footer />
    </div>
  );
};
export default Home;
