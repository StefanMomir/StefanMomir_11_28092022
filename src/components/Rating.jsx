import React from "react";
import jsonData from "../data/logements.json";
import { useParams } from "react-router-dom";
import noStar from "../assets/empty_star.svg";
import rateStar from "../assets/filled_star.svg";

const Rating = () => {
  const { id } = useParams();

  const maxStars = 5;

  /* Filter/Map Result */
  let ratingStars = jsonData
    .filter((lodgingFilter) => lodgingFilter.id === id)
    .map((item) => {
      return item.rating;
    });

  /* Check Rated Stars Number */
  let ratedStars = [...Array(parseInt(ratingStars)).keys()].map((index) => {
    return <img key={index} src={rateStar} alt="none" />;
  });

  /* Check Difference Between Rated and NonRated Number of Stars */
  let nonRatedStars = [
    ...Array(parseInt(maxStars) - ratedStars.length).keys(),
  ].map((index) => {
    return <img key={index} src={noStar} alt="none" />;
  });

  /* Return Total Numbers - Rated NonRated Stars */
  return (
    <div>
      {ratedStars}
      {nonRatedStars}
    </div>
  );
};

export default Rating;
