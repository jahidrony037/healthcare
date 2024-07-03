import AppointmentBanner from "../components/AppointmentBanner";
import Banner from "../components/Banner";
import Care from "../components/Care";
import DocSolutions from "../components/DocSolutions";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <div className="container mx-auto space-y-10 px-2 md:px-0">
        <Navbar />
        <Banner />
        <Care />
        <DocSolutions />
        <Services />
        <Testimonials/>
        <Faq />
        <AppointmentBanner />
      </div>
      <Footer />
    </>
  );
};

export default Home;
