import React from 'react';
import PropTypes from 'prop-types';
import MenuLeft from './MenuLeft'
import Product from '../content/Product'
import {Link} from 'react-router-dom'
ProductList.propTypes = {
    
};

function ProductList(props) {
    return (
        <div className="listproduct">
             <div className="container">
                <div className="row">
                <div className="col-12">
                   <ul className="login__link">
                       <li><a>Trang chủ / </a></li>
                       <li className="active"><a>Danh sách sản phẩm</a></li>
                   </ul>
               </div>
                </div>
            </div>
        <div className="container">
            <div className="row">
            <MenuLeft />
            <div className="col-sm-12 col-md-12 col-lg-9">
                    <div className="listproduct__banner">
                        <div className="row">
                            <div className="col-12">
                                <img src="../images/collection_banner.png" />
                            </div>
                        </div>
                    </div>
                    <div className="listproduct__sidebar">
                        <div className="row ty-4">
                            {/* <div className="col-12"> */}
                                <div className="col-sm-12 col-md-6 col-lg-6 ">
                                    <Link to='/listproduct'  className="active"> <i class="fa fa-th-list" aria-hidden="true"></i> </Link>
                                    <Link to='/list'><i class="fa fa-list" aria-hidden="true"></i></Link>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6  listproduct__sidebar__sort d-flex" >
                                    <div className="listproduct__sidebar__sort__name">
                                        <span> Sắp xếp theo: </span>
                                        <select>
                                            <option>Tên sản phẩm</option>
                                            <option> sản phẩm 1</option>
                                            <option> sản phẩm 1</option>
                                            <option> sản phẩm 1</option>
                                            <option> sản phẩm 1</option>
                                        </select>
                                    </div>
                                    <div className="listproduct__sidebar__sort__number">
                                        <span> Show: </span>
                                        <select>
                                            <option>6</option>
                                            <option> 9</option>
                                            <option> 15</option>
                                        </select>
                                    </div>
                                </div>
                            {/* </div>       */}
                      </div>
                     
                      {props.children}
                    </div>
                </div>
            
                </div>
                </div>
        </div>
    );
}

export default ProductList;