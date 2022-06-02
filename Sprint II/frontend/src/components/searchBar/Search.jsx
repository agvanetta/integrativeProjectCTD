import React, { useState } from "react";
import Calendar from "./Calendar";
import "../../styles/searchBar/search.css";
import { imgCalendar } from "../../styleAux/fontAwesoneIcon";
import Select from "./Select";

const initialOpenSelect = true;

const Search = () => {
  const [selected, setSelected] = useState("¿A dónde vamos?");

  const [openSelect, setOpenSelect] = useState(initialOpenSelect);

  const handleOpenSelect = () => {
    setOpenSelect(!openSelect);
  };

  const handleModal = (e) => e.stopPropagation();

  return (
    <div
      onClick={handleOpenSelect}
      className={!openSelect ? "containerSearch" : "closeHeigth"}
    >
      <div onClick={handleModal} className="searchDiv">
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        <div className="searchForm">
          <div onClick={handleOpenSelect} className="containerSelect">
            <Select
              selected={selected}
              setSelected={setSelected}
              openSelect={openSelect}
              handleOpenSelect={handleOpenSelect}
            />
          </div>
          <div className="containerCalendar">
            <span className="customIconCalendar">{imgCalendar}</span>
            <Calendar className="calendarSearch" />
          </div>
          <button className="searchButton" type="submit">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
