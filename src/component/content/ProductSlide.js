import React, { Component } from "react";
import Slider from "react-slick";
import Product from '../content/Product'
export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
  render() {
    const settings = {
      dots: false,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider  ref={c => (this.slider = c)} {...settings}>
          
          <div>
            <div className="row pt-4">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
            </div>
            <div className="row pt-3">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
            </div>  
          </div>
          <div>
            <div className="row pt-4">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
            </div>
            <div className="row pt-3">
                <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Product />
                    </div>
            </div>  
          </div>
         
        </Slider>
        <div className="btn_slide_edit">
          <button className="button" onClick={this.previous}>
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button className="button" onClick={this.next}>
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}