import React, { Component } from 'react';


class LeftSubMenu extends Component {
    render() {
        const subMenuOptions = this.props.menu.vegaSubMenu.map((item, index) => 
        <li><a href="javascript:void(0)">{item.name}</a>
        </li>);
        return (
            <div className="wrap-popup">                
                <div className="box-popup">
                    <ul className="left-side-sub-menu">{subMenuOptions}</ul>
                </div>
            </div>
        );
    }
}

export default LeftSubMenu;
