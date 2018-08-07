import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Link} from 'react-router-dom';

//components
import Header from './components/header/header';
import Home from './components/pages/home/home';
import Product from './components/pages/product/product';
import Footer from './components/footer/footer';

import './assets/css/app.min.css';  
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/Product' component={Product} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
