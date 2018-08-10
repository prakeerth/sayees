import React, { Component } from 'react';


class Home extends Component {
   adv = {
        advOption: [
        {
            id: 1,
            name: 'http://demo.posthemes.com/pos_organica/layout6/img/cms/cms_6.1.jpg'
        },
        {
            id: 2,
            name: 'http://demo.posthemes.com/pos_organica/layout6/img/cms/cms_6.2.jpg'
        },
        {
            id: 3,
            name: 'http://demo.posthemes.com/pos_organica/layout6/img/cms/cms_6.3.jpg'
        }
    ]
}
    render() {
        const advertising =this.adv.advOption.map((item, index) => 
        <li>
            <a href="javascript:void(0)">
                <img src={item.name} alt="" />    
            </a>
        </li>);

        return (
            <div className="banner-slide">
                <ul className="box-col">
                   {advertising}
                </ul>
            </div>
        );
    }
}

export default Home;
