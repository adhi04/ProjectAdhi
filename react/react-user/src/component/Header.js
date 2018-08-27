import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
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
              <Link to = "/cart" className="nav-link"><img src="./img/icons8-shopping-cart-50.png" alt="" style={{height: '25px', width: '25px'}}/></Link>
            </li>
            <li className="nav-item">
              <Link to = "/registration" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
              <Link to = "/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    );
  }
}

export default Header;
