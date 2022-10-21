import jsonData from "../data/logements.json";
import { NavLink } from "react-router-dom";

const Boxes = () => {
  /* Create Template */
  return (
    <div className="card-elements">
      {jsonData.map((data) => (
        <figure key={data.id}>
          <NavLink to={"/lodging/" + data.id}>
            <img key={data.id} src={data.cover} alt="cover" />
          </NavLink>
          <figcaption>
            <p className="fig-text" key={data.id}>
              {data.title}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Boxes;
