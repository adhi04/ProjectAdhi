import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Kategori from './component/Kategori';
import AddProduct from './component/AddProduct';
import AllCategories from './component/AllCategories';
import AllInv from './component/AllInv';
import AllProduct from './component/AllProduct';
import EditKat from './component/EditKat';
import EditInv from './component/EditInv';
// import EditProduct from './component/EditProduct';
import Editproduk from './component/Editproduk';
import Login from './component/Login';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import AddCategory from './component/AddCategory';
import AddKategori from './component/AddKategori';
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
        {/* <Route path = "/addkat" component = {AddKategori    } /> */}
        <Route path = "/tambahdata" component = {AddProduct} />
        {/* <Route path = "/allcategories" component = {AllCategories} /> */}
        <Route path = "/editinv" component = {EditInv} />
        {/* <Route path = "/" component = {Login} /> */}
        <Route path = "/login" component = {Login} />
        <Route path = "/logout" component = {Logout} />
        {/* <Route path = "/editProduct" component = {EditProduct} /> */}
        <Route path = "/editdata" component = {Editproduk} />
        <Route path = "/editkat" component = {EditKat} />
        <Route path = "/allproduct" component = {AllProduct} />
        <Route path = "/allinv" component = {AllInv} />
      </div>
    );
  }
}

export default App;

