import React from 'react';
import PropTypes from 'prop-types';
import Product from '../content/Product'
Grid.propTypes = {
    
};

function Grid(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
            </div>
            <div className="row t-3">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
            </div>
            <div className="row t-3">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
            </div>
            <div className="row t-3">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product />
                </div>
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
    );
}

export default Grid;