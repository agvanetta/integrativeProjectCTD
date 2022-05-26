import React, { useState } from "react";
import Calendar from "./Calendar";
import "../../styles/main/search.css";
import { imgCalendar } from "../../styleAux/fontAwesoneIcon";
import Select from "./Select";


const Search = () => {
  const [selected, setSelected] = useState("¿A dónde vamos?");

  return (
    <div className="searchDiv">
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      <div className="searchForm">
        <div className="containerSelect">
          <Select selected={selected} setSelected={setSelected} />
        </div>
        <div className="containerCalendar">
          <span className="customIconCalendar">{imgCalendar}</span>
          <Calendar className="calendarSearch"/>
        </div>
        <button className="searchButton" type="submit">
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Search;
