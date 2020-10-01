import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, deleteproduct, increment } from '../redux/action/cart'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
Cart.propTypes = {
    listCart: PropTypes.array,
    
}
Cart.defaultProps = {
    listCart : []
}
function Cart() {
    const listCart = useSelector(state => state.product.listCart) ;
    let list = JSON.parse(localStorage.getItem("listCart"));
    console.log(list)
    const dispatch = useDispatch();
    const handleClickInc = (item,index) =>{
        const action = increment(item);
        dispatch(action);
    }
    const handleClickDec =(item,index ) =>{
        const action = decrement(item);
        dispatch(action);
    }
    const handleClickDel = (item,index) =>{
        const action = deleteproduct(item);
        dispatch(action)
    }
    const tongTien = (listCart) =>{
        console.log(listCart)
        let tong = 0;
        listCart.map((item,index) => {
            tong += item.price * item.qty ;
        })
        return tong
    }
        return (
           <React.Fragment >
            <div className="cart my-5">
            <div className="container">
                <div className="row">
                <div className="col-12">
                   <ul className="login__link">
                       <li><Link to='/'>Trang chủ / </Link></li>
                       <li className="active"><a>Giỏ hàng</a></li>
                   </ul>
               </div>
                </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="table-responsive">
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <th>HÌNH ẢNH</th>
                        <th>TÊN SẢN PHẨM</th>
                        <th>ĐƠN GIÁ</th>
                        <th>SỐ LƯỢNG </th>
                        <th>THÀNH TIỀN</th>
                        <th>XÓA</th>
                      </tr>
                    </thead>
                    <tbody>
                  
                        {list.map((item,index) =>
                
                            (
                            <tr>
                                <td><img src={"../images/product/"+ item.img} className="cart__img"/></td>
                                <td>{item.name}</td>
                                <td>{new Intl.NumberFormat().format(item.price)}đ</td>
                                <td>{/* <input type="text" className="form-control" id="basic-url" size={1} value={quantity} onChange={handleChange}/> */}
                                  <div className="cart_quantity_button">
                                    
                                    <a className="cart_quantity_down" onClick ={() => handleClickDec(item,index)}> - </a>
                                    <input className="cart_quantity_input text-center" type="text" name="quantity" value={item.qty} autocomplete="off" size="2" />
                                    <a className="cart_quantity_up" onClick ={() => handleClickInc(item,index)} > + </a>
                                    
                                  </div>
                                </td>
                                <td>{Intl.NumberFormat().format(item.price * item.qty)}đ</td>
                                <td><i className="fa fa-trash-o" aria-hidden="true" onClick={() => handleClickDel(item,index)}/></td>
                          </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row ">
                  <div className="col-12">
                    <div className="pb-5 cart__group">
                      <Link className="cart__btn cart__btn__outline">HỦY ĐƠN HÀNG</Link>
                      <Link to='/' className="cart__btn">TIẾP TỤC MUA </Link>
                    </div>
                    <div className="row">
                    <div className="col-6"></div>
                    <div className="colsm-12 col-md-6 col-xl-6">
                      <table class="table table-bordered cart__total">
                      
                        <tbody>
                        
                          <tr>
                            <th>TỔNG TIỀN (CHƯA THUẾ) </th>
                            <td>{new Intl.NumberFormat().format(tongTien(list))}đ</td>
                          </tr>
                          <tr>
                            <th>THUẾ VAT (10%) </th>
                            <td>{new Intl.NumberFormat().format((tongTien(list)*10)/100)}đ</td>
                          </tr>
                          <tr>
                            <th >TỔNG PHẢI THANH TOÁN</th>
                            <td>{new Intl.NumberFormat().format(tongTien(list) + (tongTien(list)*10)/100)}đ</td>
                          </tr>
                           
                        </tbody>
                       
                      </table>
                      
                        <div className="cart__group">
                        <button className="cart__btn">THANH TOÁN</button>
                        </div>
                        
                      </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
    
          </React.Fragment>
        )
    
}
export default Cart
