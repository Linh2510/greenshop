import React from 'react';
import PropTypes from 'prop-types';

ProductBuy.propTypes = {
    
};

function ProductBuy(props) {
    return (

        <div className="d-flex">
            <div className="images">
                <img src="../images/product/spx2-2.png" />
            </div>
            <div className="product-content_side">
                <h3 className="title"><a href="#">Cây ngọc lan</a></h3>
                 <ul className="rating">
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star" />
                 </ul>
                 <div className="price"> 250.000đ
                 </div>
               </div>
        </div>
    );
}

export default ProductBuy;