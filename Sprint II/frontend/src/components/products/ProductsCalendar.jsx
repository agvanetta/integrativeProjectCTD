import React  from 'react'
import "../../styles/products/productsCalendar.css";
import ProductsDatePicker from './ProductsDatePicker';

function ProductsCalendar() {
  return (
    <div className='productsCalendar'>
        <div className='productsCalendar__title'>Fechas Disponibles</div>
        <div className='productsCalendar__blockCalendar'>
            <div className='productsCalendar__calendar'>
                 <ProductsDatePicker/>
            </div>
            <div className='productsCalendar__reservation'>
                <p>Agregá tus fechas de viaje para obtener precios exactos</p>
                <div>Iniciar reserva</div>
            </div>
        </div>
    </div>
  )
}

export default ProductsCalendar