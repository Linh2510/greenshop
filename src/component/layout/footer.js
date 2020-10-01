import React from 'react';
import PropTypes from 'prop-types';

footer.propTypes = {
    
};

function footer(props) {
    return (
        <section className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <p>KẾT NỐI VỚI CHÚNG TÔI:</p>
                            <ul class="connect">
                                <li><a><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-3">
                                    <p>ĐĂNG KÍ NHẬN EMAIL TỪ CHÚNG TÔI</p>
                                </div>
                                <div className="col-9">
                                    <div className="input-group">
                                        <input type="text" class="form-control" placeholder="" />
                                        <div className="input-group-prepend">
                                            <button className="btn btn-send" type="button" id="button-addon1"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__mid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <ul className="left">
                                <li><a><img src="../images/logo.png"/></a></li>
                                <li><p>Green Shop được thành lập từ 08/2010 được sự tin tưởng của khách hàng trong suốt thời gian hoạt động đến nay ngày càng phát triển</p></li>
                                <li><a><i class="fa fa-mobile" aria-hidden="true"></i> Điện thoại: (84-4) 66.558.868</a></li>
                                <li><a><i class="fa fa-envelope-o" aria-hidden="true"></i> Email: info@dkt.com.vn</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
                                        <h5>THÔNG TIN KHÁCH HÀNG</h5>
                                        <ul>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Tài khoản của tôi </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Sản phẩm yêu thích </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Lịch sử mua hàng </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Chính sách đổi trả </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Đóng góp ý kiến</a></li>
                                        </ul>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
                                        <h5>HỖ TRỢ DỊCH VỤ</h5>
                                        <ul>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i>Hệ thống cửa hàng </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Hướng dẫn mua hàng </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Hướng dẫn thanh toán </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Tích điểm đổi quà </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Câu hỏi thường gặp</a></li>
                                        </ul>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
                                        <h5>CHÍNH SÁCH ƯU ĐÃI</h5>
                                        <ul>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Chính sách giao hàng </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Chính sách đổi trả </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Chính sách bảo hàng </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i>Giới thiệu sản phẩm mới </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Chính sách trả góp</a></li>
                                        </ul>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-2 mt-4">
                                        <h5>TIN TỨC</h5>
                                        <ul>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Tin mới </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Khuyến mãi </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i>Tuyển dụng </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Dowloaf </a></li>
                                            <li><a> <i class="fa fa-chevron-right" aria-hidden="true"></i> Tag</a></li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <ul>
                                <li><a>Sitemap</a></li>
                                <li><a>Danh mục sản phẩm</a></li>
                                <li><a>Hợp tác</a></li>
                                <li><a>Thông tin liên hệ</a></li>
                                <li><a>Câu hỏi thường gặp</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 text-right">
                            <img src="../images/payment-methods.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="design text-center">Thiết kế bởi @Linhh</div>
        </section>
    );
}

export default footer;