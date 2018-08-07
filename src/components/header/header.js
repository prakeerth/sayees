import React, { Component } from 'react';
import{Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
               <div className="static-slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12 box1">
                                <div className="text">
                                    <i className="fa fa-plane"></i>
                                        <p>Free shipping on orders over</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 box2">
                                <div className="text">
                                    <i className="fa fa-history"></i>
                                        <p>30 -Day returns money back</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 box3">
                                <div className="text"> 
                                    <i className="fa fa-futbol-o"></i>
                                        <p>24/7 Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="header-middle">
                            <div className="pos_logo col-lg-4 col-sm-4 col-md-4 col-xs-12"> 
                                <a href="javascript:void(0)" title="Sayees"> 
                                    Sayees
                                </a>
                            </div>
                            <div className="header-middle-right col-lg-8 col-sm-8 col-md-8 col-xs-12">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
