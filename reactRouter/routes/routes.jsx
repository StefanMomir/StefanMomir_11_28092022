import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import Accueil from "../pages/Home";
import APropos from "../pages/About";
import Lodging from "../pages/Lodging";
import Error from "../pages/Error";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/home" element={<Accueil />} />
        <Route path="/about" element={<APropos />} />
        <Route path="/lodging/:id" element={<Lodging />} />
      </Routes>
    </main>
  );
}

/* Link Root Page With Home Page */
const Home = () => {
  return (
    <div>
      <Accueil />
    </div>
  );
};

export default Main;
