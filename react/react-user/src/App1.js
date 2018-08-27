import React, { Component } from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Prodetail from './component/Prodetail';
import Login from './component/Login';
import Footer from './component/Footer';
import Invoice from './component/Invoice';
import Productlist from './component/Productlist';


class App extends Component {
  render() 
  {
    return (
      <div>
        <Header/>
        <Productlist/>       
        <Footer/>
      </div>
    );
  }
}

export default App;
