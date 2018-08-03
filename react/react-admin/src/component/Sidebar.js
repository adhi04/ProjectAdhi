import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
import AllCategories from './AllCategories';
import AllInv from './AllInv';
import AllProduct from './AllProduct';
import EditCat from './EditCat';
import EditInv from './EditInv';
import EditProduct from './EditProduct';
import Login from './Login';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="page-content d-flex align-items-stretch">
        <nav className="side-navbar">
        {/* Sidebar Header*/}
        <div className="sidebar-header d-flex align-items-center">
          <div className="avatar"><img src="img/avatar-1.jpg" alt="..." className="img-fluid rounded-circle" /></div>
          <div className="title">
            <h1 className="h4">Adhi Nugraha</h1>
            <p>Web Designer</p>
          </div>
        </div>
        {/* Sidebar Navidation Menus*/}<span className="heading">Main</span>
        <ul className="list-unstyled">
          <li className="active"><Link to="/"> <i className="icon-home" />Home </Link></li>
    
          <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows" />Category </a>
            <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
              <li><Link to="/allcategories">All Categories</Link></li>
              <li><Link to="/addcategory">Add Category</Link></li>
              <li><Link to="/editcategory">Edit Category</Link></li>
            </ul>
          </li>
          <li><a href="#exampledropdownDropdownprod" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows" />Product </a>
            <ul id="exampledropdownDropdownprod" className="collapse list-unstyled ">
              <li><Link to="/allproduct">All Products</Link></li>
              <li><Link to="/addproduct">Add Product</Link></li>
              <li><Link to="/editdata">Edit Product</Link></li>
            </ul>
          </li>
          <li><a href="#exampledropdownDropdowninv" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows" />Invoice </a>
            <ul id="exampledropdownDropdowninv" className="collapse list-unstyled ">
              <li><Link to="/allinv">All Invoices</Link></li>
              <li><Link to="/editinv">Add Invoice</Link></li>
              <li><Link to="/editinv">Edit Invoice</Link></li>
            </ul>
          </li>
          <li><Link to="login.html"> <i className="icon-interface-windows" />Login page </Link></li>
        </ul><span className="heading">Extras</span>
        <ul className="list-unstyled">
          <li> <Link to="#"> <i className="icon-flask" />Demo </Link></li>
          <li> <Link to="#"> <i className="icon-screen" />Demo </Link></li>
          <li> <Link to="#"> <i className="icon-mail" />Demo </Link></li>
          <li> <Link to="#"> <i className="icon-picture" />Demo </Link></li>
        </ul>
      </nav>
      </div>
    );
  }
}

export default Sidebar;
