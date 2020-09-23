import React from 'react';
import PropTypes from 'prop-types';

Product.propTypes = {
    
};

function Product(props) {
    return (
          <div className="product">
              <div className="product-overlay">
                <img src="../images/product/spx2-1.png" alt="Avatar" class="image" />
                <div className="overlay">
                  <div className="text">
                    <ul className="btn-overlay">
                      <li><a className="add-cart">Mua ngay</a></li>
                      <li><a className="search"><i class="fa fa-search" aria-hidden="true"/></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="#">Cây ngọc lan</a></h3>
                 <ul className="rating">
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star" />
                 </ul>
                 <div className="price"> 250.000đ
                   <span className="price-sale">200.000 đ</span>
                 </div>
               </div>
          </div>
    );
}

export default Product;