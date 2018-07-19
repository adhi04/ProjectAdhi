import React, { Component } from 'react';


class Main extends Component {
  render() {
    return (
      <div className="page">
      <div className="page-content d-flex align-items-stretch"> 
        {/* Side Navbar */}
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
            <li className="active"><a href="index.html"> <i className="icon-home" />Home </a></li>
            <li><a href="tables.html"> <i className="icon-grid" />Tables </a></li>
            <li><a href="charts.html"> <i className="fa fa-bar-chart" />Charts </a></li>
            <li><a href="forms.html"> <i className="icon-padnote" />Forms </a></li>
            <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows" />Category </a>
              <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
                <li><a href="AllCat.html">All Categories</a></li>
                <li><a href="addcat.html">Add Category</a></li>
                <li><a href="editcat.html">Edit Category</a></li>
              </ul>
            </li>
            <li><a href="#exampledropdownDropdownprod" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows" />Product </a>
              <ul id="exampledropdownDropdownprod" className="collapse list-unstyled ">
                <li><a href="allprod.html">All Products</a></li>
                <li><a href="addprod.html">Add Product</a></li>
                <li><a href="editprod.html">Edit Product</a></li>
              </ul>
            </li>
            <li><a href="#exampledropdownDropdowninv" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows" />Invoice </a>
              <ul id="exampledropdownDropdowninv" className="collapse list-unstyled ">
                <li><a href="allinvoice.html">All Invoices</a></li>
                <li><a href="#">Add Invoice</a></li>
                <li><a href="editinvoice.html">Edit Invoice</a></li>
              </ul>
            </li>
            <li><a href="login.html"> <i className="icon-interface-windows" />Login page </a></li>
          </ul><span className="heading">Extras</span>
          <ul className="list-unstyled">
            <li> <a href="#"> <i className="icon-flask" />Demo </a></li>
            <li> <a href="#"> <i className="icon-screen" />Demo </a></li>
            <li> <a href="#"> <i className="icon-mail" />Demo </a></li>
            <li> <a href="#"> <i className="icon-picture" />Demo </a></li>
          </ul>
        </nav>
      </div>
      </div>
    );
  }
}

export default Main;
