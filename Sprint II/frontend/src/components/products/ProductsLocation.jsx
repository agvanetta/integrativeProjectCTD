import React from 'react'
import "../../styles/products/productsLocation.css";
import mapaDes from './img/mapaDes.png'


function ProductsLocation() {
  return (
    <div className='productsLocation'>
        <div className='productsLocation__title'>¿Dónde vas a estar?</div>
        <div className='productsfeatures__line'></div>
        <div className='productsLocation__subtitle'>Buenos Aires, Argentina</div>
        <div className='productsLocation__imgContainer'>
        <img className='productsLocation__img' src={mapaDes} alt="perfil" /> 
        </div>
    </div>
  )
}

export default ProductsLocation