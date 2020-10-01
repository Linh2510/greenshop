import React from 'react';
import PropTypes from 'prop-types';

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
                       <li className="active"><a>Chi tiết tin tức</a></li>
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
                        <h5><a>Cách bố trí hoa chậu trước cửa gây ấn tượng ngay lần đầu tiên</a></h5>
                            <div className="blog__section__date">
                                <span><i class="fa fa-calendar" aria-hidden="true"></i> 20/12/2015</span>
                               <span> <i class="fa fa-clock-o" aria-hidden="true"></i> 11:20 AM</span> 
                               <span><i class="fa fa-commenting-o" aria-hidden="true"></i> 0 bình luận</span> 
                            </div>
                            <img src="../images/product/spx2-3.png" />
                            <p>Như thể hiện sự thân thiện cũng như sự hiếu khách của gia chủ, phần trươc nhà luôn được đầu tư và trang trid khá bắt mắt. Cũng có thể nói đây là bộ mặt của ngôi nhà là ấn tương đầu tiên khi mỗi vị khashc ghé chơi nhà đấy.Hãy cùng Sài Gòn Hoa tham khảo một vài cách bố trí cây hoa cảnh ngay trước cửa nhà sao cho ấn tượng nhất nhé!</p>
                            <p>Yếu tố cây xanh trong thiết kế sân vườn trước nhà: Sân vườn trước nhà thì yếu tố cây xanh luôn là yếu tố chủ đạo. Cây xanh mang lại nhiều giá trị cho ngôi nhà, nó tô điểm cho kiến trúc nhà, tạo sự khác biệt về kiến trúc nhà với nhiều màu sắc của thiên nhiên.</p>
                            <p>Thiết kế sân vườn trước nhà làm lấp đầy những khoảng trống ngay trước nhà thay vào là không gian xanh với hoa cỏ tạo điểm nhấn ấn tượng cho ngôi nhà của bạn. Thay vì các kiến trúc thô cứng sẽ là không gian xanh với thảm thực vật kết hợp với kiến trúc vật liệu mang tính thẩm mỹ cao tạo nên không gian kiến trúc tuyệt đẹp.</p>
                            <p>Kiến trúc trước nhà là nơi đầu tiên đi vào tầm mắt của các thành viên trong gia đình cũng như khách đến chơi nhà, là mặt tiền đáng giá và đại diện cho cả kiến trúc ngôi nhà. Vì vậy, thiết kế sân vườn trước nhà là sẽ thể hiện cái tôi gia chủ nhưng vẫn tạo được sự gần gũi đối với ngôi nhà.</p>
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