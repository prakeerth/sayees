import React, { Component } from 'react';
import{Link} from 'react-router-dom';

class CartCount extends Component {
    render() {
        return (
            <div className="cart-count">
               <span>0</span>
            </div>
        );
    }
}

export default CartCount;
