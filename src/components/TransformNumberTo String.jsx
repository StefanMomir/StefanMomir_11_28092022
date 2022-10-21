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

  /*
  // /* vers1 * [...Array(parseInt(ratingStars)).keys()].forEach((num) =>
    console.log(num)
  );

  //* vers2 * Array.from({ length: ratingStars }, (_, idx) =>
    console.log(idx + 1)
  );

  /* vers3 *
    Array.apply(null, { length: ratingStars }).map(Number.call, Number)
    .forEach((num) => console.log(num));

    /* vers4 * 

  let n = 1;
  let myInterval = setInterval(numberInterval);

  function numberInterval() {
    if (n > ratingStars) {
      clearInterval(myInterval);
    } else {
      console.log(n);
      n++;
    }
  }
  */
  /* vers 5
  [..."1".padEnd(parseInt(ratingStars), 1)].reduce((acc) => {
    console.log(acc);
    return ++acc;
  });
  */
};

export default Rating;
