import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    
    render() {
     return (
        <div>
          <center>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KFhvzigwmtyAUafx69Msh7ZLLNfFnIPKBoFqIZzE_N1NM7lB" style={{width:"541px", height:"100px", paddingTop:"20px"}}/>

          <div className="tabmenu" style={{width:"1000px", marginTop:"20px", border:"1px solid black"}}>

          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <Link className="nav-link" id="home-tab" data-toggle="" to="/" role="tab" aria-controls="home" aria-selected="true">
              Bitcoin Hari Ini</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="profile-tab" data-toggle=""  to="/Rupiahb" role="tab" aria-controls="profile" aria-selected="false">
              Rupiah ke Bitcoin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="profile-tab" data-toggle="" to="/Brupiah" role="tab" aria-controls="profile" aria-selected="false"> Bitcoin ke Rupiah</Link>
            </li>
          </ul>
          </div>

           </center>
        </div>
        );
       }
     }
    

export default Navbar;
