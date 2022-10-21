import "./styles/App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./routes/routes";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
