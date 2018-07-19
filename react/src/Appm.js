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
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

class App extends Component {
  render() 
  {
    return (
      <div>
        <Route exact path = "/" component = {Main} />
        <Route path = "/addcategory" component = {AddCategory} />
        <Route path = "/addproduct" component = {AddProduct} />
        <Route path = "/allcategories" component = {AllCategories} />
        <Route path = "/editinv" component = {EditInv} />
        <Route path = "/login" component = {Login} />
        <Route path = "/editproduct" component = {EditProduct} />
        <Route path = "/editcat" component = {EditCat} />
        <Route path = "/allproduct" component = {AllProduct} />
        <Route path = "/allinv" component = {AllInv} />
      </div>
    );
  }
}

export default App;

