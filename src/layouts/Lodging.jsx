import React from "react";
import jsonData from "../data/logements.json";
import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import rating from "../data/ratingData";
import Error404 from "./Error404";
import ImageSlider from "../components/Sliders";
import Rating from "../components/Rating";

const Block = () => {
  /* Load Id */
  const { id } = useParams();

  /* Filter/Map Result */
  let resItem = jsonData
    .filter((lodgingFilter) => lodgingFilter.id === id)
    .map((item) => {
      return { ...item };
    });

  /* Return Error */
  const err = () => {
    return <Error404 />;
  };

  if (resItem.length === 0) {
    return err();
  } else {
    resItem = resItem[0];
    const equip = resItem.equipments.map((equipment, index) => {
      return <li key={index}>{equipment}</li>;
    });

    const ratingStars = rating
      .filter((rate) => rate.rid === resItem.rating)
      .map((res) => res.icon);

    return (
      <div className="lodging">
        <div key={id} className="middle-content">
          <ImageSlider />
          <div className="location">
            <div className="location-title">
              <h1>{resItem.title}</h1>
            </div>
            <div className="location-name">
              <p>{resItem.location}</p>
            </div>
          </div>
          <div className="details">
            <div className="author-container">
              <div className="author-name">
                <p> {resItem.host.name}</p>
              </div>
              <div className="author-icon">
                <img src={resItem.host.picture} alt="author" />
              </div>
            </div>
            <div className="lodging-rating">
              {/*<img src={"../" + ratingStars} alt="rating" />*/}
              <Rating />
            </div>
          </div>
          <div className="bottom">
            <div className="description">
              <Accordion
                title="Description"
                description={resItem.description}
              />
            </div>
            <div className="equipment">
              <Accordion title="Equipments" description={equip} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Block;
