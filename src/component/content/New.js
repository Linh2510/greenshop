import React from 'react';
import PropTypes from 'prop-types';

New.propTypes = {
    
};

function New(props) {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <ul className="new__section">
                <li><img src="../images/product/spx2-3.png"/></li>
                <li><span>Thứ 7 ngày 31 tháng 12 năm 2016</span></li>
                <li><h5>15 thiết kế phòng ngủ đẹp vạn người mê</h5></li>
                <li><p>Cùng Sài Gòn Hoa tìm hiểu một vài xu hướng thiết kế sân vườn được ưa chuộng này nhé!Kết hợp hàng rào</p></li>
                <li><a>Đọc tiếp</a></li>
            </ul>
            
        </div>
    );
}

export default New;