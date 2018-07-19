import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div >
        <header className="header">
        <nav className="navbar">
          {/* Search Box*/}
          <div className="search-box">
            <button className="dismiss"><i className="icon-close" /></button>
            <form id="searchForm" action="#" role="search">
              <input type="search" placeholder="What are you looking for..." className="form-control" />
            </form>
          </div>
          <div className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
              {/* Navbar Header*/}
              <div className="navbar-header">
                {/* Navbar Brand */}<Link to="/" className="navbar-brand d-none d-sm-inline-block">
                  <div className="brand-text d-none d-lg-inline-block"><span>Mypet </span> <strong>Dashboard</strong></div>
                  <div className="brand-text d-none d-sm-inline-block d-lg-none"><strong>BD</strong></div></Link>
                {/* Toggle Button*/}<Link to="#" id="toggle-btn"  className="menu-btn active"><span /><span /><span /></Link>
              </div>
              {/* Navbar Menu */}
              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                {/* Search*/}
                <li className="nav-item d-flex align-items-center"><Link to="#" id="search" ><i className="icon-search" /></Link></li>
                {/* Notifications*/}
                <li className="nav-item dropdown"> <Link to="#" id="notifications" rel="nofollow" data-target="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-bell-o" /><span className="badge bg-red badge-corner">12</span></Link>
                  <ul aria-labelledby="notifications" className="dropdown-menu">
                    <li><Link to="#" rel="nofollow"  className="dropdown-item"> 
                        <div className="notification">
                          <div className="notification-content"><i className="fa fa-envelope bg-green" />You have 6 new messages </div>
                          <div className="notification-time"><small>4 minutes ago</small></div>
                        </div></Link></li>
                    <li><Link to="#" rel="nofollow"  className="dropdown-item"> 
                        <div className="notification">
                          <div className="notification-content"><i className="fa fa-twitter bg-blue" />You have 2 followers</div>
                          <div className="notification-time"><small>4 minutes ago</small></div>
                        </div></Link></li>
                    <li><Link to="#" rel="nofollow"  className="dropdown-item"> 
                        <div className="notification">
                          <div className="notification-content"><i className="fa fa-upload bg-orange" />Server Rebooted</div>
                          <div className="notification-time"><small>4 minutes ago</small></div>
                        </div></Link></li>
                    <li><Link to="#" rel="nofollow"  className="dropdown-item"> 
                        <div className="notification">
                          <div className="notification-content"><i className="fa fa-twitter bg-blue" />You have 2 followers</div>
                          <div className="notification-time"><small>10 minutes ago</small></div>
                        </div></Link></li>
                    <li><Link to="#" rel="nofollow"  className="dropdown-item all-notifications text-center"> <strong>view all notifications                                          </strong></Link></li>
                  </ul>
                </li>
                {/* Messages                        */}
                <li className="nav-item dropdown"> <Link to="#" id="messages" rel="nofollow" data-target="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-envelope-o" /><span className="badge bg-orange badge-corner">10</span></Link>
                  <ul aria-labelledby="notifications" className="dropdown-menu">
                    <li><Link to="#" rel="nofollow"  className="dropdown-item d-flex"> 
                        <div className="msg-profile"> <img src="img/avatar-1.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                        <div className="msg-body">
                          <h3 className="h5">Jason Doe</h3><span>Sent You Message</span>
                        </div></Link></li>
                    <li><Link to="#" rel="nofollow"  className="dropdown-item d-flex"> 
                        <div className="msg-profile"> <img src="img/avatar-2.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                        <div className="msg-body">
                          <h3 className="h5">Frank Williams</h3><span>Sent You Message</span>
                        </div></Link></li>
                    <li><Link to="#" rel="nofollow"  className="dropdown-item d-flex"> 
                        <div className="msg-profile"> <img src="img/avatar-3.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                        <div className="msg-body">
                          <h3 className="h5">Ashley Wood</h3><span>Sent You Message</span>
                        </div></Link></li>
                    <li><Link to="#" rel="nofollow"  className="dropdown-item all-notifications text-center"> <strong>Read all messages </strong></Link></li>
                  </ul>
                </li>
                {/* Languages dropdown    */}
                <li className="nav-item dropdown"><Link to="#" id="languages" rel="nofollow" data-target="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link language dropdown-toggle"><img src="img/flags/16/GB.png" alt="English" /><span className="d-none d-sm-inline-block">English</span></Link>
                  <ul aria-labelledby="languages" className="dropdown-menu">
                    <li><Link to="#" rel="nofollow"  className="dropdown-item"> <img src="img/flags/16/DE.png" alt="English" className="mr-2" />German</Link></li>
                    <li><Link to="#" rel="nofollow" className="dropdown-item"> <img src="img/flags/16/FR.png" alt="English" className="mr-2" />French                                       </Link></li>
                  </ul>
                </li>
                {/* Logout    */}
                <li className="nav-item"><Link to="/login" className="nav-link logout"> <span className="d-none d-sm-inline">Logout</span><i className="fa fa-sign-out" /></Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      </div>
    );
  }
}

export default Header;
