import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
Blog.propTypes = {
    
};

function Blog(props) {
    return (
        <div className="blog">
             <div className="container">
                <div className="row">
                <div className="col-12">
                   <ul className="login__link">
                       <li><a>Trang chủ / </a></li>
                       <li className="active"><a>Tin tức</a></li>
                   </ul>
               </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3 menu-left">
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
                            <a>Tin tức nổi bật</a>
                        </h5>
                        <ul className="blog__feature">
                            <li> <div className="d-flex"><img src='../images/product/spx2-1.png'/> <span>Hướng dẫn lựa chọn và bố trí cây xanh trong phòng khách</span> </div></li>
                            <li> <div className="d-flex"><img src='../images/product/spx2-1.png'/> <span>Hướng dẫn lựa chọn và bố trí cây xanh trong phòng khách</span> </div></li>
                            <li> <div className="d-flex"><img src='../images/product/spx2-1.png'/> <span>Hướng dẫn lựa chọn và bố trí cây xanh trong phòng khách</span> </div></li>
                            <li> <div className="d-flex"><img src='../images/product/spx2-1.png'/> <span>Hướng dẫn lựa chọn và bố trí cây xanh trong phòng khách</span> </div></li>
                            <li> <div className="d-flex"><img src='../images/product/spx2-1.png'/> <span>Hướng dẫn lựa chọn và bố trí cây xanh trong phòng khách</span> </div></li>
                        </ul>
                        <h5 className="title">
                            <a>Blog tag</a>
                        </h5>
                        <div className="d-flex pb-5">
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
                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <div className="row blog__section ">
                            <h5><Link to ='/blogdetail'>Cách bố trí hoa chậu trước cửa gây ấn tượng ngay lần đầu tiên</Link></h5>
                            <div className="blog__section__date">
                                <span><i class="fa fa-calendar" aria-hidden="true"></i> 20/12/2015</span>
                               <span> <i class="fa fa-clock-o" aria-hidden="true"></i> 11:20 AM</span> 
                               <span><i class="fa fa-commenting-o" aria-hidden="true"></i> 0 bình luận</span> 
                            </div>
                            <img src="../images/product/spx2-3.png" />
                            <p>Như thể hiện sự thân thiện cũng như sự hiếu khách của gia chủ, phần trươc nhà luôn được đầu tư và trang trid khá bắt mắt. Cũng có thể nói đây là bộ mặt của ngôi nhà là ấn tương đầu tiên khi mỗi vị khashc ghé chơi nhà đấy.Hãy cùng Sài Gòn Hoa tham khảo một vài cách bố trí cây hoa cảnh ngay trước cửa nhà sao cho ấn tượng nhất nhé!</p>
                            
                        </div>
                        <div className="row blog__section ">
                           <h5><Link to ='/blogdetail'>Cách bố trí hoa chậu trước cửa gây ấn tượng ngay lần đầu tiên</Link></h5>
                            <div className="blog__section__date">
                                <span><i class="fa fa-calendar" aria-hidden="true"></i> 20/12/2015</span>
                               <span> <i class="fa fa-clock-o" aria-hidden="true"></i> 11:20 AM</span> 
                               <span><i class="fa fa-commenting-o" aria-hidden="true"></i> 0 bình luận</span> 
                            </div>
                            <img src="../images/product/spx2-3.png" />
                            <p>Như thể hiện sự thân thiện cũng như sự hiếu khách của gia chủ, phần trươc nhà luôn được đầu tư và trang trid khá bắt mắt. Cũng có thể nói đây là bộ mặt của ngôi nhà là ấn tương đầu tiên khi mỗi vị khashc ghé chơi nhà đấy.Hãy cùng Sài Gòn Hoa tham khảo một vài cách bố trí cây hoa cảnh ngay trước cửa nhà sao cho ấn tượng nhất nhé!</p>
                            
                        </div>
                        <div className="row blog__section ">
                        <h5><Link to ='/blogdetail'>Cách bố trí hoa chậu trước cửa gây ấn tượng ngay lần đầu tiên</Link></h5>
                            <div className="blog__section__date">
                                <span><i class="fa fa-calendar" aria-hidden="true"></i> 20/12/2015</span>
                               <span> <i class="fa fa-clock-o" aria-hidden="true"></i> 11:20 AM</span> 
                               <span><i class="fa fa-commenting-o" aria-hidden="true"></i> 0 bình luận</span> 
                            </div>
                            <img src="../images/product/spx2-3.png" />
                            <p>Như thể hiện sự thân thiện cũng như sự hiếu khách của gia chủ, phần trươc nhà luôn được đầu tư và trang trid khá bắt mắt. Cũng có thể nói đây là bộ mặt của ngôi nhà là ấn tương đầu tiên khi mỗi vị khashc ghé chơi nhà đấy.Hãy cùng Sài Gòn Hoa tham khảo một vài cách bố trí cây hoa cảnh ngay trước cửa nhà sao cho ấn tượng nhất nhé!</p>
                            
                        </div>
                        <div className="row blog__section ">
                        <h5><Link to ='/blogdetail'>Cách bố trí hoa chậu trước cửa gây ấn tượng ngay lần đầu tiên</Link></h5>
                           <div className="blog__section__date">
                                <span><i class="fa fa-calendar" aria-hidden="true"></i> 20/12/2015</span>
                               <span> <i class="fa fa-clock-o" aria-hidden="true"></i> 11:20 AM</span> 
                               <span><i class="fa fa-commenting-o" aria-hidden="true"></i> 0 bình luận</span> 
                            </div>
                            <img src="../images/product/spx2-3.png" />
                            <p>Như thể hiện sự thân thiện cũng như sự hiếu khách của gia chủ, phần trươc nhà luôn được đầu tư và trang trid khá bắt mắt. Cũng có thể nói đây là bộ mặt của ngôi nhà là ấn tương đầu tiên khi mỗi vị khashc ghé chơi nhà đấy.Hãy cùng Sài Gòn Hoa tham khảo một vài cách bố trí cây hoa cảnh ngay trước cửa nhà sao cho ấn tượng nhất nhé!</p>
                            
                        </div>
                        <div className="row">
                            <div className="text-right pt-5">
                                <nav aria-label="Page navigation example ">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" href="#">Trang trước</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                                        <li class="page-item"><a class="page-link" href="#">Trang sau</a></li>
                                    </ul>
                                </nav>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;