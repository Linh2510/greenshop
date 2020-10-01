import React from 'react';
import PropTypes from 'prop-types';

Contact.propTypes = {
    
};

function Contact(props) {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                <div className="col-12">
                   <ul className="login__link">
                       <li><a>Trang chủ / </a></li>
                       <li className="active"><a>Liên hệ</a></li>
                   </ul>
               </div>
                </div>
            </div>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.279654750784!2d108.20346501433653!3d16.050971444191635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219bbac29a89b%3A0xd1216d40b4bca153!2zMTUwIER1eSBUw6JuLCBIw7JhIFRodeG6rW4gTmFtLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1600943185865!5m2!1svi!2s" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
             <div className="container">
                    <div className="row my-5">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="contact__title">THÔNG TIN CÁ NHÂN</div>
                        <form className="contact__form">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Họ và tên  <span className="form-group__star">*</span></label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>  
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Địa chỉ email  <span className="form-group__star">*</span></label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div> 
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Số điện thoại  <span className="form-group__star">*</span></label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div> 
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Bình luận  <span className="form-group__star">*</span></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                
                                <button className="contact__btn">Gửi</button>
                            </form>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="../images/logo.png" className="contact__img"/>
                        <p className="contact__prap">Green Shop được thành lập từ 08/2010 được sự tin tưởng của khách hàng trong suốt thời gian hoạt động đến nay ngày càng phát triển</p>
                        <p className="contact__phone"><i class="fa fa-mobile" aria-hidden="true"></i> Điện thoại: (84-4) 66.558.868</p>
                        <p className="contact__email"><i class="fa fa-envelope-o" aria-hidden="true"></i> Email: info@dkt.com.vn</p>
                        
                    </div>
                </div>
             </div>
        </div>
    );
}

export default Contact;