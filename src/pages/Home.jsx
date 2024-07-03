import Banner from "../components/Banner";
import Care from "../components/Care";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto space-y-10">
      <Navbar />
      <Banner />
      <Care />
    </div>
  );
};

export default Home;
