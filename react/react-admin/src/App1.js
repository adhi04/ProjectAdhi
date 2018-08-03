import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import AddCategory from './component/AddCategory';
import AddProduct from './component/AddProduct';
import AllCategories from './component/AllCategories';
import AllInv from './component/AllInv';
import AllProduct from './component/AllProduct';
import EditCat from './component/EditCat';
import EditInv from './component/EditInv';
import EditProduct from './component/EditProduct';
import Login from './component/Login';


class App extends Component {
  render() 
  {
    return (
      <div>
        {/* <Header/> */}
        {/* <Main/> */}
        {/* <AddCategory/> */}
        {/* <AddProduct/> */}
        {/* <AllCategories/> */}
        {/* <EditInv/> */}
        <Login/>
        {/* <EditProduct/> */}
        {/* <EditCat/> */}
        {/* <AllProduct/> */}
        {/* <AllInv/> */}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;

