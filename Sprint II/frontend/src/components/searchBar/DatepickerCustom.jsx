import React from "react";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const weekDays = ["D", "L", "M", "M", "J", "V", "S"];

const DatepickerCustom = (props) => {
  return (
    <DatePicker
      hideYear
      placeholder="Check in - Check out"
      weekDays={weekDays}
      numberOfMonths={props.numberOfMonths}
      animations={[transition()]}
      range
      months={months}
      format="DD/MMM/YY "
      className={props.className}
      arrow={false}
      inputClass="custom-input"
      containerClassName="date"
      plugins={[
        <Footer
          position="bottom"
          format="MMM DD"
          names={{
            from: "Desde:",
            to: "Hasta:",
            selectDate: "-",
            close: "Aplicar",
          }}
        />,
      ]}
    ></DatePicker>
  );
};

export default DatepickerCustom;
