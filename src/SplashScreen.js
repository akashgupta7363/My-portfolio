import "./SplashScreen.css";
import splashAnimation from "./assets/splashAnimation.json";
import Lottie from "lottie-react";

export default function SplashScreen() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
  };

  return (
    <div className="splash-container">
      <div className="splash-animation-container">
        <Lottie
          animationData={splashAnimation}
          options={defaultOptions}
          isClickToPauseDisabled={true}
        />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span
          className="splash-title"
          // style={{ fontFamily: "Agustina Regular" }}
        >
          Akash kumar Gupta
        </span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
