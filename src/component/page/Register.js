import React from 'react';
import PropTypes from 'prop-types';

Register.propTypes = {
    
};

function Register(props) {
    return (
      <div className="register">
          <div className="container">
            <div className="row">
               <div className="col-12">
                   <ul className="register__link">
                       <li><a>Trang chủ / </a></li>
                       <li className="active"><a>Đăng nhập</a></li>
                   </ul>
               </div>
            </div>
           <div className="row">
               <div className="col-12">
                   <div className="register__title">THÔNG TIN CÁ NHÂN</div>
               <form className="register__form">
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Họ và tên <span className="form-group__star">*</span></label>
                        <input type="name" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Số ĐT <span className="form-group__star">*</span></label>
                        <input type="phone" className="form-control" id="inputPassword4" />
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Địa chỉ email <span className="form-group__star">*</span></label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Website của bạn <span className="form-group__star">*</span></label>
                        <input type="page" className="form-control" id="inputPassword4" />
                    </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Đăng kí nhận thông tin qua Email
                            </label> 
                    </div>
                    <div className="register__title">THÔNG TIN TÀI KHOẢN</div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Mật khẩu <span className="form-group__star">*</span></label>
                        <input type="password" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Nhập lại mật khẩu <span className="form-group__star">*</span></label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    </div>
                </form>
                <button className="register__btn outline">Quay lại</button>
                <button className="register__btn">Đăng kí</button>
               </div>
           </div>
        </div>
      </div>
    );
}

export default Register;