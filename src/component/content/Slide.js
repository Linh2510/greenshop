import React, { Component } from "react";
import Slider from "react-slick";
import Product from "./Product";

export default class Responsive extends Component {
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
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="">
        <Slider  ref={c => (this.slider = c)} {...settings}>
          <div>
              <div className="col-fix">
                <Product />
              </div>
              <div className="col-fix t-3">
                    <Product />
            </div>
          </div>
          <div>
          <div className="col-fix">
                <Product />
              </div>
              <div className="col-fix t-3">
                <Product />
            </div>
          </div>
          <div>
            <div className="col-fix">
                <Product />
              </div>
              <div className="col-fix t-3">
                <Product />
            </div>
          </div>
          <div>
          <div className="col-fix">
                <Product />
              </div>
              <div className="col-fix t-3">
                <Product />
            </div>
          </div>
          <div>
          <div className="col-fix">
                <Product />
              </div>
              <div className="col-fix t-3">
                <Product />
            </div>
          </div>
          <div>
            <div className="col-fix">
                <Product />
            </div>
            <div className="col-fix t-3">
                <Product />
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