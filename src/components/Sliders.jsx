import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../data/logements.json";
import ArrowButton from "../components/NavSlider";

const ImageSlider = () => {
  /* Get ID */
  const { id } = useParams();

  /* Set State */
  const [currentState, setCurrent] = useState(0);

  /* Filter Data */
  const lodgingFilter = jsonData.filter(
    (lodgingFilter) => lodgingFilter.id === id
  );

  const slidesLength = lodgingFilter.map((dataLength) => {
    return dataLength.pictures.length;
  });

  /* Create Slide Fade Effect */
  useEffect(() => {
    const sliderTimeout = setInterval(() => {
      setCurrent((currentState) =>
        currentState < slidesLength - 1 ? currentState + 1 : 0
      );
    }, 8000);
    return () => clearInterval(sliderTimeout);
  }, [slidesLength]);

  /* Create Slide Navigation */
  const next = () => {
    setCurrent(currentState === slidesLength - 1 ? 0 : currentState + 1);
  };

  const previous = () => {
    setCurrent(currentState === 0 ? slidesLength - 1 : currentState - 1);
  };

  /* Create Slide Template */
  return (
    <>
      <div className="slider-count">
        {currentState + 1}/{slidesLength}
      </div>
      {/* MODIFICATION POUR SOUTENANCE - NO ARROW IF THERE IS ONLY ONE SLIDE */}
      {slidesLength > 1 ? (
        <ArrowButton direction={next} change={"right"} />
      ) : (
        ""
      )}
      {slidesLength > 1 ? (
        <ArrowButton direction={previous} change={"left"} />
      ) : (
        ""
      )}
      <div className="slider">
        {lodgingFilter.map((dataSlide) => {
          return (
            <div key={currentState}>
              <img src={dataSlide.pictures[currentState]} alt="slide" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageSlider;
