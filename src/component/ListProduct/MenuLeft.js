import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
MenuLeft.propTypes = {
    
};

function MenuLeft(props) {
    return (
                <div className="col-3 menu-left">
                    <h5 className="title">
                        <a>Danh mục sản phẩm</a>
                    </h5>
                    <ul className="listproduct__category">
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i> Cây châu treo (10) </li>
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i> Cây có hoa (5) </li>
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i> Cây dây leo  </li>
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i> Cây để bàn </li>
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i> Cây may mắn </li>
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i> Cây trang trí </li>
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i> Cây nội thất </li>
                    </ul>
                    <h5 className="title">
                        <a>Tìm theo giá</a>
                    </h5>
                    <ul className="listproduct__category">
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i> 200.000 Đ - 400.000 Đ </li>
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i> 400.000 Đ - 600.000 Đ </li>
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i> 600.000 Đ - 600.000 Đ </li>
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i>  800.000 Đ - 1.000.000 Đ</li>
                        <li> <i class="fa fa-angle-right" aria-hidden="true"></i>  1.000.000 Đ - 2.000.000 Đ</li>
                       
                    </ul>
                    <h5 className="title">
                        <a>Tìm theo màu</a>
                    </h5>
                    <div className="d-flex">
                    <ul className="listproduct__color listproduct__color__left">
                        <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> Xanh cây</span> </li>
                        <li> <span><i class="fa fa-circle" aria-hidden="true"></i> Tím</span> </li>
                        <li> <span><i class="fa fa-circle" aria-hidden="true"></i> Vàng</span></li>
                    </ul>
                    <ul className="listproduct__color listproduct__color__right">
                        <li><span><i class="fa fa-circle" aria-hidden="true"></i> Đỏ cam </span> </li>
                        <li><span><i class="fa fa-circle" aria-hidden="true"></i> Xanh trời</span></li>
                        <li><span><i class="fa fa-circle" aria-hidden="true"></i> Hồng</span></li>
                    </ul>
                    </div>
                    
                </div>
                
          
    );
}

export default MenuLeft;