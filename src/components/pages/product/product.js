import React, { Component } from 'react';


class Product extends Component {
    render() {
        return (
            <div className="product-tabs-container">
                <div className="container"> 
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a  href="#1" data-toggle="tab">Overview</a>
                        </li>
                        <li>
                            <a href="#2" data-toggle="tab">Without clearfix</a>
                        </li>
                        <li>
                            <a href="#3" data-toggle="tab">Solution</a>
                        </li>
                    </ul>

                    <div className="tab-content ">
                        <div className="tab-pane active" id="1">
                            <h3>Standard tab panel created on bootstrap using nav-tabs</h3>
                        </div>
                        <div className="tab-pane" id="2">
                            <h3>Notice the gap between the content and tab after applying a background color</h3>
                        </div>
                        <div className="tab-pane" id="3">
                            <h3>add clearfix to tab-content (see the css)</h3>
                        </div>
                    </div>



                    <ul className="nav nav-tabs">
                        <li className="item active "> 
                            <a  href="#tab_new_product" data-toggle="tab">New products</a>
                        </li>
                        <li className="item "> 
                            <a  href="#tab_feature_product" data-toggle="tab">Featured Products</a>
                        </li>
                        <li className="item ">
                            <a  href="#tab_special_product" data-toggle="tab"> OnSale</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab_new_product" className="tab-pane active">
                            content1
                        </div>
                        <div id="tab_feature_product" className="tab-pane">
                            content2                    
                        </div>
                        <div id="tab_special_product" className="tab-pane">
                            content3            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
