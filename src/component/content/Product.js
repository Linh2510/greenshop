import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import {addCart} from '../redux/action/cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
Product.propTypes = {
    
};

function Product(props) {
  const dispatch = useDispatch();
    const cart = useSelector(state => state.product.cart);
    const handleClickCart = (item,index) =>{
        toast.success("Thêm vào giỏ hàng thành công")
        const newProduct = {...item,qty:1};
        const action = addCart(newProduct)
        dispatch(action)
    }
    return (
      
        <div className="col-12">
          <ToastContainer 
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="product">

            { cart.map((item,index) =>(
              <React.Fragment>
                <div className="product-overlay">
                <img src={"../images/product/" + item.img} alt="Avatar" class="image" />
                <div className="overlay">
                  <div className="text">
                    <ul className="btn-overlay">
                      <li onClick={ () => handleClickCart(item,index)} ><a className="add-cart" >Mua ngay</a></li>
                      <li><a className="search"><i class="fa fa-search" aria-hidden="true"/></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="product-content">
            <h3 className="title"><a href="#">{item.name}</a></h3>
                 <ul className="rating">
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star checked" />
                   <li className="fa fa-star-half-o checked " />
                 </ul>
                 <div className="price"> {new Intl.NumberFormat().format(item.price)}đ
                   <span className="price-sale">{new Intl.NumberFormat().format(item.pricesale)}đ</span>
                 </div>
               </div>
               </React.Fragment>
            ))}
              
          </div>
          </div>
    );
}

export default Product;