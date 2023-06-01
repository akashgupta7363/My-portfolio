import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experiences/Experience";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          {/* <Lottie className="lottie" animationData={spanim} /> */}
          <SplashScreen />
        </>
      ) : (
        <>
          <Header />
          <Nav />
          <About />
          <Services />
          <Experience />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
