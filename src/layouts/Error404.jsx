import { NavLink } from "react-router-dom";

const Error404 = () => {
  /* Create Template */
  return (
    <>
      <div className="error404-container">
        <div className="error404-header">
          <h1>404</h1>
        </div>
        <div className="error404-message">
          <p>
            Oups! La page que
            <br /> vous demandez n'existe pas.
          </p>
        </div>
        <div className="error404-return">
          <NavLink to={"/home"}>
            <p>Retourner sur la page d’accueil</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error404;
