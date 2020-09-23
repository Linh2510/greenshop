import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Banner() {
 
    const settings = {
      dots: true,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slide">
            <img src="../images/slider1.png"  width="100%"/>
            <div className="caption text-center">
                <h1>GREEN SHOP</h1>
                <h2>CHO THUÊ CÂY CẢNH TẾT 2020</h2>
                <p>( Miễn phí vận chuyển với những đơn hàng có giá trị trên 5.000.000đ )</p>
            </div>
          </div>
          <div className="slide">
            <img src="../images/slider1.png"  width="100%"/>
            <div className="caption text-center">
                <h1>GREEN SHOP</h1>
                <h2>CHO THUÊ CÂY CẢNH TẾT 2020</h2>
                <p>( Miễn phí vận chuyển với những đơn hàng có giá trị trên 5.000.000đ )</p>
            </div>
          </div>
        </Slider>
      </div>
    );

}
export default Banner;