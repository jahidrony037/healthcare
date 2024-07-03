import Banner from "../components/Banner";
import Care from "../components/Care";
import DocSolutions from "../components/DocSolutions";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto space-y-10">
      <Navbar />
      <Banner />
      <Care />
      <DocSolutions/>
    </div>
  );
};

export default Home;
