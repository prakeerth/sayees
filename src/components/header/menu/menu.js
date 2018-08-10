import React, { Component } from 'react';

import LeftSubMenu from './leftSubMenu';


class Menu extends Component {
    menus = {
        megaMenu: [
            {
                id: 1,
                name: 'Home'
            },
            {
                id: 2,
                name: 'Delivery'
            },
            {
                id: 3,
                name: 'Legal Notice'
            },
            {
                id: 4,
                name: 'Secure Payment'
            },
            {
                id: 5,
                name: 'About Us'
            }
        ],
        vegaMenu: [
            {
                id: 1,
                name: 'Treating',
                vegaSubMenu: [
                    {
                        id: 11,
                        name: 'Anti Fungal'
                    },
                    {
                        id: 12,
                        name: 'Anti-Itch'
                    },
                    {
                        id: 13,
                        name: 'Eczema'
                    },
                    {
                        id: 14,
                        name: 'Acne Treatment'
                    }
                ]
            },
            {
                id: 2,
                name: 'Including',
                vegaSubMenu: [
                    {
                        id: 21,
                        name: 'Containing'
                    },
                    {
                        id: 22,
                        name: 'Humour'
                    },
                    {
                        id: 23,
                        name: 'Editors'
                    },
                    {
                        id: 24,
                        name: "Industry's"
                    }
                ]
            },
            {
                id: 3,
                name: 'Nourishing',
                vegaSubMenu: [
                    {
                        id: 31,
                        name: 'Anti-Aging'
                    },
                    {
                        id: 32,
                        name: 'Body Firming'
                    },
                    {
                        id: 33,
                        name: 'Body Oil'
                    },
                    {
                        id: 34,
                        name: 'After Sun'
                    }
                ]
            },
            {
                id: 4,
                name: 'Cleansing',
                vegaSubMenu: [
                    {
                        id: 41,
                        name: 'Bath Oil'
                    },
                    {
                        id: 42,
                        name: 'Boubble Bath'
                    },
                    {
                        id: 43,
                        name: 'Facial Cleanser'                                 
                    },
                    {
                        id: 44,
                        name: 'Bar Soap'                                 
                    }
                ]
            },
            {
                id: 5,
                name: 'Personal Care',
                vegaSubMenu: [
                    {
                        id: 51,
                        name: 'Readable'
                    },
                    {
                        id: 52,
                        name: 'Unchanged'
                    },
                    {
                        id: 53,
                        name: 'Many'
                    },
                    {
                        id: 54,
                        name: 'Dummy'
                    }
                ]
            }
        ]
    }

    render() {
        const megaMenuOptions =this.menus.megaMenu.map((item, index) => 
        <li key={index}><a href="javascript:void(0)">{item.name}</a></li>);

        const vegaMenuOptions =this.menus.vegaMenu.map((item, index) => 
        <li defaultValue={item.id}><a href="javascript:void(0)" className="left-menu-anchor">{item.name}</a>
        <LeftSubMenu menu={this.menus.vegaMenu[index]}/></li>)
        return (
            <div className="row">
                <div className="col-md-3 col-xs-12">
                    <div className="vega-menu">
                        <h2 className="left-menu-title">
                            All categories
                        </h2>
                        <ul className="left-category-menu">
                            {vegaMenuOptions}
                        </ul>
                    </div>
                </div>
                <div className="col-md-9 col-xs-12">
                    <ul className="mega-menu">
                        {megaMenuOptions}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
