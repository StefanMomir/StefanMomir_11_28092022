import Accordion from "../components/Accordion";
import accordionData from "../data/aboutData.js";

const Content = () => {
  /* Create Template */
  return (
    <>
      <div className="about">
        {accordionData.map((item, index) => {
          return <Accordion key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default Content;
