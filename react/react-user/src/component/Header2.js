import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header2 extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-0" >
      <div className="container py-auto">
        <Link to ="/" className="navbar-brand" style={{marginLeft:0}}  ><img src="./img/petlogo4.png" width='50px' height='50px' alt=""/></Link>
        <Link to = "/productlist" className="navbar-brand">Belanja</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <form className=" form-inline mx-auto my-2 my-sm-0" >
                    <input className="form-control form-co mr-sm-2" type="search" placeholder="Cari..." aria-label="Search"/>
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Cari</button>
            </form>
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
            <Link to = "/cart" className="btn btn-outline-light fa fa-shopping-cart"><span className="label label-dark" ></span>
            </Link>
            </li>
            <li className="nav-item">
              <Link to = "/registration" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
              <Link to = "/logout" className="nav-link">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    );
  }
}

export default Header2;
