import React from "react";
import Review from "./Review";

function Slider({ people, index }) {
  return people.map((person, personIndex) => {
    let position = "nextSlide";
    if (personIndex === index) {
      position = "activeSlide";
    }
    if (
      personIndex === index - 1 ||
      (index === 0 && personIndex === people.length - 1)
    ) {
      position = "lastSlide";
    }
    return <Review person={person} position={position} />;
  });
}

export default Slider;
