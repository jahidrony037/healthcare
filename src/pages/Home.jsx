import AppointmentBanner from "../components/AppointmentBanner";
import Banner from "../components/Banner";
import Care from "../components/Care";
import DocSolutions from "../components/DocSolutions";
import Faq from "../components/Faq";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <div className="container mx-auto space-y-10">
        <Navbar />
        <Banner />
        <Care />
        <DocSolutions />
        <Services />
        <Faq />
        <AppointmentBanner />
      </div>
    </>
  );
};

export default Home;
