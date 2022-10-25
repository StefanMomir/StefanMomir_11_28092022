import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Accueil from "./pages/Home";
import APropos from "./pages/About";
import Lodging from "./pages/Lodging";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/*" element={<Error />} />
          <Route path="/home" element={<Accueil />} />
          <Route path="/about" element={<APropos />} />
          <Route path="/lodging/:id" element={<Lodging />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

/* Link Root Page With Home Page */
const Home = () => {
  return (
    <div>
      <Accueil />
    </div>
  );
};

export default App;
