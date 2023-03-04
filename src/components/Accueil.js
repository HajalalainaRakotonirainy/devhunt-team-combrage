import React, { useEffect } from "react";
import Footer from "./Footer";
import Home from "./Home";
import ElevateAppBar from "./Test";

const Accueil = () => {
  let index = 0;

  function animateText() {
    const txts = document.querySelector(".animate-text").children,
      txtsLen = txts.length;
    const textInTimer = 3000,
      textOutTimer = 2800;
    for (let i = 0; i < txtsLen; i++) {
      txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function () {
      txts[index].classList.add("text-out");
    }, textOutTimer);

    setTimeout(function () {
      if (index === txtsLen - 1) {
        index = 0;
      } else {
        index++;
      }
      animateText();
    }, textInTimer);
  }

  useEffect(() => {
    animateText();
  });
  return (
    <>
      <ElevateAppBar />
      <Home />
      <Footer />
    </>
  );
};

export default Accueil;
