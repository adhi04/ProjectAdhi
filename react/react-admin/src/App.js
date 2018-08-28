import React, { Component } from 'react';
import Main from './component/Main';
import Kategori from './component/Kategori';
import AddProduct from './component/AddProduct';
import AllInv from './component/AllInv';
import Invoice from './component/Invoice';
import AllProduct from './component/AllProduct';
import EditKat from './component/EditKat';
import EditInv from './component/EditInv';
import Editproduk from './component/Editproduk';
import Login from './component/Login';
import {Route} from 'react-router-dom';
import AddCategory from './component/AddCategory';
import Logout from './component/Logout';

class App extends Component {
  render() 
  {
    return (
      <div>
        <Route exact path = "/" component = {Login} />
        <Route path = "/homepage" component = {Main} />
        <Route path = "/kategori" component = {Kategori} />
        <Route path = "/addcat" component = {AddCategory} />
        <Route path = "/tambahdata" component = {AddProduct} />
        <Route path = "/editinv" component = {EditInv} />
        <Route path = "/login" component = {Login} />
        <Route path = "/logout" component = {Logout} />
        <Route path = "/editdata" component = {Editproduk} />
        <Route path = "/editkat" component = {EditKat} />
        <Route path = "/allproduct" component = {AllProduct} />
        <Route path = "/allinv" component = {AllInv} />
        <Route path = "/invoice" component = {Invoice} />
      </div>
    );
  }
}

export default App;

