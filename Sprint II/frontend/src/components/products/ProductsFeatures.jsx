import React from 'react'
import "../../styles/products/productsFeatures.css";
import { imgOven,imgSnow,imgPaw,imgCar,imgSw,imgWifi } from "../../styleAux/fontAwesoneIcon";
import {BsTv} from "react-icons/bs";

function ProductsFeatures() {
  return (
    <div className='productsfeatures'>
            <div className='productsfeatures__title'>¿Qué ofrece este lugar?</div>
            <div className='productsfeatures__line'></div>
            <div className='productsfeatures__icons'>
                <div><span >{imgOven}</span> <p>Cocina</p></div>
                <div><span><BsTv/></span> <p>Televisor</p></div>
                <div><span>{imgSnow}</span> <p>Aire acondicionado</p></div>
                <div><span>{imgPaw}</span> <p>Apto mascotas</p></div>
                <div><span>{imgCar}</span> <p>Estacionamiento gratiuto</p></div>
                <div><span>{imgSw}</span> <p>Pileta</p></div>
                <div><span>{imgWifi}</span> <p>Wifi</p></div>
            </div>

    </div>
  )
}

export default ProductsFeatures