import React, { Component } from 'react';
import Header from './component/Header';
import Homepage from './component/Homepage';
// import Content from './component/Content';
// import Registration from './component/Registration';
// import Login from './component/Login';
// import Footer from './component/Footer';
// import Cart from './component/Cart';
// import Invoice from './component/Invoice';
// import Prodetail from './component/Prodetail';
// import Productlist from './component/Productlist';
// import Checkout from './component/Checkout';
// import Profile from './component/Profile';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';


class App extends Component {
  render() 
  {
    return (
      <div>
        <Header/>
        <Homepage/>
        {/* <Route exact path = "/" component = {Content} />
        <Route path = "/registration" component = {Registration} />
        <Route path = "/login" component = {Login} />
        <Route path = "/cart" component = {Cart} />
        <Route path = "/checkout" component = {Checkout} />
        <Route path = "/invoice" component = {Invoice} />
        <Route path = "/prodetail" component = {Prodetail} />
        <Route path = "/productlist" component = {Productlist} />
        <Route path = "/profile" component = {Profile} />
        <Footer/> */}
      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
