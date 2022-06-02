import React from "react";
import hostList from "../dataBase/hostList.json";
import "../styles/listImageCard.css";
import { Link } from "react-router-dom";

const ListImageCard = () => {
  return (
    <div className="listImageContainer">
      <h2>Recomendaciones</h2>
      {hostList.map((host) => {
        return (
          <div key={host.id.toString()} className="cardListImageContainer">
            <div className="imgContainer">
              <img src={host.img} alt={host.title} />
            </div>
            <div className="characteristics">
              <h5>{host.category}</h5>
              <h2>{host.title}</h2>
              <p>{host.location}</p>
              <p>
                {host.description}
                <span>&nbsp;más...</span>
              </p>
              <Link to={"/products"}>
              <button>Ver más</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListImageCard;
