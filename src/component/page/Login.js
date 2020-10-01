import React from 'react';
import PropTypes from 'prop-types';

Login.propTypes = {
    
};

function Login(props) {
    return (
        <div className="login ">
        <div className="container">
           <div className="row">
               <div className="col-12">
                   <ul className="login__link">
                       <li><a>Trang chủ / </a></li>
                       <li className="active"><a>Đăng nhập</a></li>
                   </ul>
               </div>
           </div>
           <div className="row">
               <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="login__title">THÔNG TIN CÁ NHÂN</div>
                   <form className="login__form">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email của bạn</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>  
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Mật khẩu</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div> 
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Ghi nhớ tài khoản
                            </label> 
                            <span className="form-check__forget"> <a>Bạn quên mật khẩu?</a></span> 
                        </div>
                        <button className="login__btn">Đăng nhập</button>
                    </form>
               </div>
               <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="login__title">BẠN CHƯA CÓ TÀI KHOẢN ?</div>
                   <p className="login__para">Đăng kí tài khoản để có thể đăng kí nhanh chóng và dễ dàng hơn !Ngoài ra còn có rất nhiều chính sách ưu đãi cho các thành viên citybike</p>
                   <button className="login__btn">Đăng kí</button>
               </div>
           </div>
        </div>
        </div>
    );
}

export default Login;