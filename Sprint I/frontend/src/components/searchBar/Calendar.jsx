import React from "react";
import "react-multi-date-picker/styles/colors/teal.css";
import '../../styles/main/calendar.css';
import "react-multi-date-picker/styles/layouts/mobile.css";
import MediaQuery from 'react-responsive';
import DatepickerCustom from "./DatepickerCustom";

// const months = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre",
// ];
// const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

function Calendar() {
  return (
    <div className="App">
      <MediaQuery minWidth={768}>
        <DatepickerCustom numberOfMonths = {2} className={"custom-calendar teal doubleDatePicker"}/>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <DatepickerCustom numberOfMonths = {1} className={"custom-calendar teal singleDatePicker"}/>
      </MediaQuery>
  
    
    </div>
  );
}


export default Calendar;