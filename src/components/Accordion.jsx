import { useState } from "react";

/* Get Accordion Data from DB */
const Accordion = ({ title, description }) => {
  const [activeState, setActivated] = useState(false);
  const toggleDropDown = () => {
    setActivated(!activeState);
  };

  /* Create Accordion Template */
  return (
    <>
      <div
        onClick={toggleDropDown}
        className={`dropdown-button ${activeState ? `up` : `down`}`}
      >
        <p>{title}</p>
      </div>
      <div className="dropdown-text">{activeState && <p>{description}</p>}</div>
    </>
  );
};

export default Accordion;
