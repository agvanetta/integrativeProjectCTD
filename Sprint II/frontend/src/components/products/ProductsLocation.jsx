import React from 'react'
import "../../styles/products/productsLocation.css";
import mapaDes from './img/mapaDes.png'
import mapaPhone from './img/mapaPhone.png'
import mapaTablet from './img/mapaTablet.png'


function ProductsLocation() {
  return (
    <div className='productsLocation'>
        <div className='productsLocation__title'>¿Dónde vas a estar?</div>
        <div className='productsfeatures__line'></div>
        <div className='productsLocation__subtitle'>Buenos Aires, Argentina</div>
        <div className='productsLocation__imgContainer'>
        <img className='productsLocation__img' id="productsLocation__img__des" src={mapaDes} alt="perfil" /> 
        <img className='productsLocation__img' id="productsLocation__img__ph" src={mapaPhone} alt="perfil" /> 
        <img className='productsLocation__img' id="productsLocation__img__tb" src={mapaTablet} alt="perfil" /> 
        </div>
    </div>
  )
}

export default ProductsLocation