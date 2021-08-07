import "./index.scss";
import Head from "./Head";
import Body from "./Body";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <div className="container home-container">
      <Head />
      <Body />
      <Footer />
    </div>
  );
};
export default Home;
