import React from "react";
import Lottie from "react-lottie";
import LoadingData from "../../assets/Lottie/spinner.json";
import AnimatedPage from "./AnimatedPage";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <AnimatedPage style={{ flex: 1, display: "flex", zIndex: 2 }}>
      <div className="container">
        <Lottie options={defaultOptions} height={30} width={30} />
      </div>
    </AnimatedPage>
  );
};

export default Loading;
