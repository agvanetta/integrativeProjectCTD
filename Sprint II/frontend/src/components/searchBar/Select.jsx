import React, { useEffect } from "react";
import { useState } from "react";
import cities from "../../dataBase/cities.json";
import { imgLocation, imgLocation2 } from "../../styleAux/fontAwesoneIcon";
import "../../styles/searchBar/select.css";

function Select({ selected, setSelected, openSelect, handleOpenSelect }) {
  const [IsActive, setIsActive] = useState(false);

  useEffect(() => {
    if (openSelect) {
      setIsActive(false)
    }
  }, [openSelect, IsActive]);

  let inputSelect;
  if (selected === "¿A dónde vamos?") {
    inputSelect = (
      <div className="inputSelect">
        <span className="inputIconLocation">{imgLocation}</span>
        <span className="inputSelect"> {selected} </span>
      </div>
    );
  } else {
    inputSelect = (
      <div className="inputSelect">
        <div className="inputIconLocation city">{imgLocation}</div>
        <div className="inputSelect city"> {selected} </div>
        <div
          className="select__clear"
          onClick={(e) => {
            setSelected("¿A dónde vamos?");
            setIsActive(false);
          }}
        >
          ✖
        </div>
      </div>
    );
  }

  return (
    <div className='select' onClick={handleOpenSelect} >
      <div className="btnSelect" onClick={(e) => setIsActive(!IsActive)}>
        {inputSelect}
      </div>
      {IsActive && (
        <ul className='contentSelect' onClick={handleOpenSelect} >
          {cities.map((element, index) => (
            <li
              onClick={(e) => {
                setSelected(element.ciudad + ", " + element.pais);
                setIsActive(false);
              }}
              key={index}
              value={element.ciudad}
              className="liSelect"
            >
              <span className="customIconLocation">{imgLocation2}</span>
              <div className="containerOption">
                <div className="divOption">
                  <p className="paragraphCiudad">{element.ciudad}</p>
                  <p className="paragraphPais">{element.pais}</p>
                </div>
                <hr className="lineSelect"></hr>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
