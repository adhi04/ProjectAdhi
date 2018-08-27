import React, { Component } from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Registration from './component/Registration';
import Login from './component/Login';
import Footer from './component/Footer';
import Cart from './component/Cart';
import Invoice from './component/Invoice';
import Prodetail from './component/Prodetail';
import Productlist from './component/Productlist';
import Checkout from './component/Checkout';
import Profile from './component/Profile';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';


class App extends Component {
  render() 
  {
    return (
      <div>
        <Header/>
        <Route exact path = "/" component = {Content} />
        <Route path = "/registration" component = {Registration} />
        <Route path = "/login" component = {Login} />
        <Route path = "/cart" component = {Cart} />
        <Route path = "/checkout" component = {Checkout} />
        <Route path = "/invoice" component = {Invoice} />
        <Route path = "/prodetail" component = {Prodetail} />
        <Route path = "/productlist" component = {Productlist} />
        <Route path = "/profile" component = {Profile} />
        <Footer/>
      </div>
    );
  }
}

export default App;
