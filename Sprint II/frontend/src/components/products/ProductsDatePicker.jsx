import React from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';
import es from "date-fns/locale/es";
import "../../styles/products/productsCalendar.css";

registerLocale("es", es);

function ProductsDatePicker() {

  return (
      <>
    <div className="productsDatePicker">
      <DatePicker
      excludeDates={[
         addDays(new Date(), 1),
         addDays(new Date(), 5),
         addDays(new Date(), 15),
         addDays(new Date(), 16),
         addDays(new Date(), 17),
         addDays(new Date(), 18),
         addDays(new Date(), 37),
         addDays(new Date(), 38),
         addDays(new Date(), 39),
         addDays(new Date(), 50),
         addDays(new Date(), 51),
         addDays(new Date(), 52),
         addDays(new Date(), 72),
         addDays(new Date(), 73),
         addDays(new Date(), 92),
         addDays(new Date(), 93),
        ]}
      minDate={new Date()}
      inline
      monthsShown={2}
      locale="es"
      disabledKeyboardNavigation
    />
    </div>
    <div className="productsDatePicker__mobile">
    <DatePicker
      excludeDates={[
         addDays(new Date(), 1),
         addDays(new Date(), 5),
         addDays(new Date(), 15),
         addDays(new Date(), 16),
         addDays(new Date(), 17),
         addDays(new Date(), 18),
         addDays(new Date(), 37),
         addDays(new Date(), 38),
         addDays(new Date(), 39),
         addDays(new Date(), 50),
         addDays(new Date(), 51),
         addDays(new Date(), 52),
         addDays(new Date(), 72),
         addDays(new Date(), 73),
         addDays(new Date(), 92),
         addDays(new Date(), 93),
        ]}
      minDate={new Date()}
      inline
      monthsShown={1}
      locale="es"
      disabledKeyboardNavigation
    />
    </div>
    </>
  );
}
export default ProductsDatePicker;
