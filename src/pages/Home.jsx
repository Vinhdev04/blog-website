import FeaturedPost from "../components/FeaturedPost";
import HomeSubscribe from "../components/HomeSubscribe";
import LatestPosts from "../components/LatestPosts";
import "../css/Home.css";

const Home = () => (
  <div className="home-root">
    <div className="container">
      <FeaturedPost />
    </div>
    <div className="container">
      <LatestPosts />
    </div>
    <HomeSubscribe />
  </div>
);

export default Home;