import React from "react";
import categories from "../dataBase/categories.json";
import "../styles/categories.css";

const Categories = () => {
  return (
    <div className="categoriesContainer">
      <h2>Buscar por tipo de alojamiento</h2>
      {categories.map((categ) => {
        return (
          <div className="categoriesCard" key={categ.id.toString()}>
            <img src={categ.img} alt={categ.name} />
            <h3>{categ.name}</h3>
            <h5>{categ.quant}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
