import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import OpenToggleContext from "../../context/OpenToggleContext";
import { imgBars } from "../../styleAux/fontAwesoneIcon";
import LogedUserNav from "./LogedUserNav";
import SocialNet from "../SocialNet";
import "../../styles/header/navBar.css";
import "../../styles/customProperties.css";
import SweetAlert from "../../helpers/SweetAlert";

const initialValue = localStorage.getItem("login") || false;
const NavBar = () => {
  const { openNav, handleToggle } = useContext(OpenToggleContext);
  const [isLoged, setIsLoged] = useState(initialValue);

  useEffect(() => {
    localStorage.getItem("login") ? setIsLoged(true) : setIsLoged(false);
  }, []);

  const handleSessionClose = () => {
    SweetAlert.messageCloseSession(
      "¿Estás seguro que quieres cerrar sesión?",
      () => {
        setIsLoged(false);
        localStorage.removeItem("usuario");
        localStorage.removeItem("login");
      }
    );
  };

  const handleModalMenu = (e) => e.stopPropagation();

  return (
    <nav onClick={handleToggle} className={openNav ? "modalContainer" : ""}>
      <ul
        onClick={handleModalMenu}
        className={`menu ${openNav ? "modalOpen" : ""}`}
      >
        <div className={openNav ? "menuFirst" : ""}>
          {openNav ? (
            <li className="modalClose" onClick={handleToggle}>
              X
            </li>
          ) : (
            <li className="toggle" onClick={handleToggle}>
              {imgBars}
            </li>
          )}
          {isLoged ? (
            <>
              {console.log("dentro return", isLoged)}
              <LogedUserNav handleSessionClose={handleSessionClose} />
            </>
          ) : (
            <li className={openNav ? "open menuItem" : "close"}>Menú</li>
          )}
        </div>
        {!isLoged && (
          <>
            {window.location.pathname === "/signup" ? (
              ""
            ) : (
              <Link
                className={`item ${openNav ? "open" : "close"}`}
                to={"/signup"}
              >
                <li>Crear cuenta</li>
              </Link>
            )}

            {window.location.pathname === "/login" ? (
              ""
            ) : (
              <Link
                className={`item ${openNav ? "open" : "close"}`}
                to={"/login"}
              >
                <li>Iniciar sesión</li>
              </Link>
            )}
          </>
        )}
        {openNav && (
          <div className="socialNetMB">
            <SocialNet />
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
