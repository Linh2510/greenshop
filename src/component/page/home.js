import React from 'react';
import PropTypes from 'prop-types';
import Product from '../content/Product';
import Banner from '../content/Banner'
import ProductBuy from '../content/ProductBuy'
import ProductSlide from '../content/ProductSlide';
import ProductSlideNew from '../content/ProductSlideNew';
import Slide from '../content/Slide'
import New from '../content/New'
home.propTypes = {
    
};

function home(props) {
    return (
        <React.Fragment>
            <Banner />
        <div className="product__feature">
            <div className="container">
                <h5 className="title">
                    <a>Sản phẩm nổi bật</a>
                </h5>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                                <Product />
                        </div>
                        <div className="row t-3">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <Product />
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <Product />
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <Product />
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <Product />
                            </div>
                        </div>
                        <div className="row t-3">
                            <div className="col-12">
                                <Product />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product__item ">
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3 left">
                        <h5 className="title">
                        <a>Sản phẩm mua nhiều</a>
                        </h5>
                        <ul className="product-item-list">
                            <li><a><ProductBuy /></a></li>
                            <li><a><ProductBuy /></a></li>
                            <li><a><ProductBuy /></a></li>
                            <li><a><ProductBuy /></a></li>
                            <li><a><ProductBuy /></a></li>
                            <li><a><ProductBuy /></a></li>
                        </ul>
                            
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <h5 className="title">
                            <a>Sản phẩm khuyến mãi</a>
                        </h5>
                        <div className="row-fix">
                        <Slide />
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="banner t-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <img src="../images/banner-11140x217.png" width="100%"/>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="product__new">
            <div className="container">
                    <h5 className="title">
                            <a>Sản phẩm mới</a>
                    </h5>
                  <div className="row-fix">
                  <ProductSlideNew />
                      </div> 
            </div>
        </div>
        <div className="new">
            <div className="container">
                <h5 className="title">
                    <a>Tin tức</a>
                </h5>
                <div className="row">
                    <New />
                    <New />
                    <New />
                </div>
            </div>
        </div>
        </React.Fragment>
        
    );
}

export default home;