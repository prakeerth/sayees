import React, { Component } from 'react';


import BannerSlide from './bannerSlide';
import Advertising from './advertising';
import ProductList from '../product/product';

class Home extends Component {
    render() {
        return (
            <div className="container main-content">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-xs-12">
                    </div>
                    <div class="col-md-9 col-sm-12 col-xs-12">
                        <div className=" pos-bannerslide row">
                            <div className="col-md-8 col-sm-8 col-xs-12">
                               <BannerSlide />
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <Advertising />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-section">
                    <ProductList />
                </div>
            </div>
        );
    }
}

export default Home;
