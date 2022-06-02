import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "../../styles/products/productsCarousel.css";

export default class ProductsCarousel extends Component {
  render() {
    const settings = {
      rows:1,
      arrows:true,
      dots:true,
      autoplay:true,
      autoplaySpeed:3000,
      customPaging: i => <div >{i+1}/5</div> ,
    };
    return (
      <div className="productsCarousel">
        <Slider {...settings}>
          <div>
            <h3><img
                src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/210286836.jpg?k=1a5aa7384548e615005e7ddbb1d2235c3e8641df8ccfb169994f22b1f0217a5b&o=&hp=1'
                alt="img_main"/>
                </h3>
          </div>
          <div>
            <h3><img
                src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/210286629.jpg?k=ccfcafe5c4daa5f41fff7844644325a128a9189f77ef286ac5ab55a94fcd2df4&o=&hp=1'
                alt="img_secondary"/></h3>
          </div>
          <div>
            <h3><img
                src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/163517804.jpg?k=b55b4fc687b19b621091c21bccdb5291036f355276b57f374791a33111781d4f&o=&hp=1'
                alt="img_secondary"/></h3>
          </div>
          <div>
            <h3><img
                src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/164602973.jpg?k=f7871f087e0b89fa8a759f5059e8f404396072ad45f6a26fa7b1a9cd22f78b1d&o=&hp=1'
                alt="img_secondary"/></h3>
          </div>
          <div>
            <h3><img
                src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/210290121.jpg?k=eefdac293d0e877144a034ed4b0a2e91d2fa975f5e13845898b87808b28735a3&o=&hp=1'
                alt="img_secondary"/></h3>
          </div>
        </Slider>
      </div>
    );
  }
}