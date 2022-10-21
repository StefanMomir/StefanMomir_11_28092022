import AboutContent from "../layouts/About";
import Top from "../layouts/Top";

const About = () => {
  const topImage = "top-bg-about";
  return (
    <>
      <Top topImage={topImage} />
      <AboutContent />
    </>
  );
};

export default About;
