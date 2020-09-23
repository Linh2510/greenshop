import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../content/Menu'
header.propTypes = {
    
};

function header(props) {
    return (
        <section className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 info">
                            <span ><i class="fa fa-clock-o" aria-hidden="true"></i> Open time: 8.00 - 18.00</span>
                            <span > Monday - Sunday </span>
                            <ul class="social">
                                <li><a><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a><i class="fa fa-tumblr" aria-hidden="true"></i></a></li>
                                <li><a><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>

                            </ul>
                        </div>
                        <div className="col-6 text-right">
                            <ul className="user"> 
                            <li><a><i class="fa fa-user-plus" aria-hidden="true"></i> Đăng nhập</a></li>
                                <li>
                                    <a><i class="fa fa-user" aria-hidden="true"></i> Đăng ký</a>
                                </li>
                                
                            </ul>
                       </div>
                    </div>
                </div>
             </div>
             <div className="header__mid">
                 <div className="container">
                     <div className="row">
                         <div className="col-sm-12 col-md-12 col-lg-6 ">
                             <img src='../images/logo.png' className="logo"/>
                             <img src='../images/beside_logo.png' className="beside-logo" />
                         </div>
                         <div className="col-4 box-search">
                             
                                <div className="phone ml-3 mb-3">
                                    <a> <i class="fa fa-phone" aria-hidden="true"></i> HỖ TRỢ: (04) 6674 2332 - (04) 3786 8904</a>
                                </div>

                                <div className="input-group ">
                                    <input type="text" class="form-control search" placeholder="Tìm kiếm..." />
                                    <div className="input-group-prepend">
                                        <button className="btn btn-search-posi" type="button" id="button-addon1"><i class="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                               
                        </div>
                         <div className="col-2 cart">
                                <span><i class="fa fa-shopping-basket" aria-hidden="true"></i> 0 sản phẩm</span>
                         </div>
                 </div>
             </div>
        </div>
        {/* <Menu /> */}
        <div className="header__bottom">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" > <i class="fa fa-bars" aria-hidden="true"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">TRANG CHỦ <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">GIỚI THIỆU </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">SẢN PHẨM</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            SẢN PHẨM MỚI
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">sp1</a>
                            <a className="dropdown-item" href="#">SP2</a>
                        </div>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">TIN TỨC</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">LIÊN HỆ</a>
                        </li>
                        
                    </ul>
                    </div>
                    <ul class="icon-respon">
                        {/* <li><i class="fa fa-user" aria-hidden="true"></i></li>
                        <li><i class="fa fa-user-plus" aria-hidden="true"></i></li> */}
                        <li><i class="fa fa-search" aria-hidden="true"></i></li>
                        <li><i class="fa fa-shopping-basket" aria-hidden="true"></i></li>
                    </ul>
                </nav>
            </div>
            
        </div>
        </section> 
    );
}

export default header;