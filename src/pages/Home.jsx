import HomeContent from "../layouts/Home";
import Top from "../layouts/Top";

const Home = () => {
  const topImage = "top-bg-home";
  return (
    <>
      <Top topImage={topImage} />
      <HomeContent />
    </>
  );
};
export default Home;
