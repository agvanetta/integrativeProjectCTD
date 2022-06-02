import React from 'react'
import "../../styles/products/productsPolitics.css";

function ProductsPolitics() {
  return (
    <div className='productsPolitics'>
        <div className='productsfeatures__title'>Qué tenés que saber</div>
        <div className='productsfeatures__line'></div>
        <div className="productsPolitics__details">
            <div className='productsPolitics__details__sections'>
                <h3>Normas de la casa</h3>
                <div>
                    <span>Check-out: 10:00</span>
                    <span>No se permiten fiestas</span>
                    <span>No fumar</span>
                </div>
            </div>
            <div className='productsPolitics__details__sections'>
                <h3>Salud y seguridad</h3>
                <div>
                    <span>Se aplican las pautas de distanciamiento social y otras formas relacionadas con el coronavirus</span>
                    <span>Detector de humo</span>
                    <span>Depósito de seguridad</span>
                </div>
            </div>
            <div className='productsPolitics__details__sections'>
                <h3>Política de cancelacíon</h3>
                <div>
                    <span>Agregá las fechas de tu viaje para obtener los detalles de esta estadía.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsPolitics