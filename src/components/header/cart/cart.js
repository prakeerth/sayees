import React, { Component } from 'react';

import CartCount from './cartCount';

class Cart extends Component {
    render() {
        return (
            <div className="cart-section">
                <i className="fa fa-shopping-cart"></i>
                <CartCount />
            </div>
        );
    }
}

export default Cart;
