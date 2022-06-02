import "../../styles/products/productsHeader.css";
import React from 'react'
import { Link } from "react-router-dom";
import { imgLeft,imgLocationP,imgStar,imgStarHalf } from "../../styleAux/fontAwesoneIcon";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ProductsHeader() {
    const imgStarRegular = (
        <FontAwesomeIcon className="fa-star" icon={faStar} />
      )
  return (
      <>
    <div className="productsHeader">
        <div className="productsHeader__blockLeft">
            <h1>HOTEL</h1>
            <h2>Hermitage Hotel</h2>
        </div>
        <div className="productsHeader__blockRight">
            <Link to={"/"}>
                <span className="productsHeader__blockRight__button">{imgLeft}</span>
            </Link>
        </div>
    </div>
    <div className="productsHeaderdetails">
        <div className="productsHeaderdetails__firtsblock">
            <div className="productsHeaderdetails__firtsblock__icon">
                <span>{imgLocationP}</span>
            </div>
            <div className="productsHeaderdetails__firtsblock__text">
                <div>Buenos Aires, Ciudad Autonoma de Buenos Aires, Argentina</div>
                <div className="productsHeaderdetails__firtsblock__distance">A 940m del centro</div>
            </div>
        </div>
        <div className="productsHeaderdetails__secondblock">
            <div>
                <p>Muy Bueno</p>
                <div className="productsHeaderdetails__secondblock__stars">
                    <span>{imgStar}</span>
                    <span>{imgStar}</span>
                    <span>{imgStar}</span>
                    <span>{imgStarHalf}</span>
                    <span>{imgStarRegular}</span>
                </div>
            </div>
            <div className="productsHeaderdetails__secondblock__number">
                <div>8</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductsHeader