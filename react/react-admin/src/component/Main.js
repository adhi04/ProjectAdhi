import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
        <div className="page">
            <Header/>
            <div className="page-content d-flex align-items-stretch"> 
            <Sidebar/>
        <div className="content-inner">
        {/* Page Header*/}
        <header className="page-header">
          <div className="container-fluid">
            <h2 className="no-margin-bottom">Dashboard</h2>
          </div>
        </header>
        <section className="dashboard-counts no-padding-bottom">
        <div className="container-fluid">
          <div className="row bg-white has-shadow">
            {/* Item */}
            <div className="col-xl-3 col-sm-6">
              <div className="item d-flex align-items-center">
                <div className="icon bg-violet"><i className="icon-user" /></div>
                <div className="title"><span>New<br />Clients</span>
                  <div className="progress">
                    <div role="progressbar" style={{width: '25%', height: 4}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-violet" />
                  </div>
                </div>
                <div className="number"><strong>25</strong></div>
              </div>
            </div>
            {/* Item */}
            <div className="col-xl-3 col-sm-6">
              <div className="item d-flex align-items-center">
                <div className="icon bg-red"><i className="icon-padnote" /></div>
                <div className="title"><span>Work<br />Orders</span>
                  <div className="progress">
                    <div role="progressbar" style={{width: '70%', height: 4}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-red" />
                  </div>
                </div>
                <div className="number"><strong>70</strong></div>
              </div>
            </div>
            {/* Item */}
            <div className="col-xl-3 col-sm-6">
              <div className="item d-flex align-items-center">
                <div className="icon bg-green"><i className="icon-bill" /></div>
                <div className="title"><span>New<br />Invoices</span>
                  <div className="progress">
                    <div role="progressbar" style={{width: '40%', height: 4}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-green" />
                  </div>
                </div>
                <div className="number"><strong>40</strong></div>
              </div>
            </div>
            {/* Item */}
            <div className="col-xl-3 col-sm-6">
              <div className="item d-flex align-items-center">
                <div className="icon bg-orange"><i className="icon-check" /></div>
                <div className="title"><span>Open<br />Cases</span>
                  <div className="progress">
                    <div role="progressbar" style={{width: '50%', height: 4}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-orange" />
                  </div>
                </div>
                <div className="number"><strong>50</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Dashboard Header Section    */}
       <section className="dashboard-header">
        <div className="container-fluid">
          <div className="row">
            {/* Statistics */}
            <div className="statistics col-lg-3 col-12">
              <div className="statistic d-flex align-items-center bg-white has-shadow">
                <div className="icon bg-red"><i className="fa fa-tasks" /></div>
                <div className="text"><strong>234</strong><br /><small>Applications</small></div>
              </div>
              <div className="statistic d-flex align-items-center bg-white has-shadow">
                <div className="icon bg-green"><i className="fa fa-calendar-o" /></div>
                <div className="text"><strong>152</strong><br /><small>Interviews</small></div>
              </div>
              <div className="statistic d-flex align-items-center bg-white has-shadow">
                <div className="icon bg-orange"><i className="fa fa-paper-plane-o" /></div>
                <div className="text"><strong>147</strong><br /><small>Forwards</small></div>
              </div>
            </div>
            {/* Line Chart            */}
            <div className="chart col-lg-6 col-12">
              <div className="line-chart bg-white d-flex align-items-center justify-content-center has-shadow">
                <canvas id="lineCahrt" />
              </div>
            </div>
            <div className="chart col-lg-3 col-12">
              {/* Bar Chart   */}
              <div className="bar-chart has-shadow bg-white">
                <div className="title"><strong className="text-violet">95%</strong><br /><small>Current Server Uptime</small></div>
                <canvas id="barChartHome" />
              </div>
              {/* Numbers*/}
              <div className="statistic d-flex align-items-center bg-white has-shadow">
                <div className="icon bg-green"><i className="fa fa-line-chart" /></div>
                <div className="text"><strong>99.9%</strong><br /><small>Success Rate</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Projects Section*/}
       <section className="projects no-padding-top">
        <div className="container-fluid">
          {/* Project*/}
          <div className="project">
            <div className="row bg-white has-shadow">
              <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                <div className="project-title d-flex align-items-center">
                  <div className="image has-shadow"><img src="img/project-1.jpg" alt="..." className="img-fluid" /></div>
                  <div className="text">
                    <h3 className="h4">Project Title</h3><small>Lorem Ipsum Dolor</small>
                  </div>
                </div>
                <div className="project-date"><span className="hidden-sm-down">Today at 4:24 AM</span></div>
              </div>
              <div className="right-col col-lg-6 d-flex align-items-center">
                <div className="time"><i className="fa fa-clock-o" />12:00 PM </div>
                <div className="comments"><i className="fa fa-comment-o" />20</div>
                <div className="project-progress">
                  <div className="progress">
                    <div role="progressbar" style={{width: '45%', height: 6}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-red" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project*/}
          <div className="project">
            <div className="row bg-white has-shadow">
              <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                <div className="project-title d-flex align-items-center">
                  <div className="image has-shadow"><img src="img/project-2.jpg" alt="..." className="img-fluid" /></div>
                  <div className="text">
                    <h3 className="h4">Project Title</h3><small>Lorem Ipsum Dolor</small>
                  </div>
                </div>
                <div className="project-date"><span className="hidden-sm-down">Today at 4:24 AM</span></div>
              </div>
              <div className="right-col col-lg-6 d-flex align-items-center">
                <div className="time"><i className="fa fa-clock-o" />12:00 PM </div>
                <div className="comments"><i className="fa fa-comment-o" />20</div>
                <div className="project-progress">
                  <div className="progress">
                    <div role="progressbar" style={{width: '60%', height: 6}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-green" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project*/}
          <div className="project">
            <div className="row bg-white has-shadow">
              <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                <div className="project-title d-flex align-items-center">
                  <div className="image has-shadow"><img src="img/project-3.jpg" alt="..." className="img-fluid" /></div>
                  <div className="text">
                    <h3 className="h4">Project Title</h3><small>Lorem Ipsum Dolor</small>
                  </div>
                </div>
                <div className="project-date"><span className="hidden-sm-down">Today at 4:24 AM</span></div>
              </div>
              <div className="right-col col-lg-6 d-flex align-items-center">
                <div className="time"><i className="fa fa-clock-o" />12:00 PM </div>
                <div className="comments"><i className="fa fa-comment-o" />20</div>
                <div className="project-progress">
                  <div className="progress">
                    <div role="progressbar" style={{width: '50%', height: 6}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-violet" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project*/}
          <div className="project">
            <div className="row bg-white has-shadow">
              <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                <div className="project-title d-flex align-items-center">
                  <div className="image has-shadow"><img src="img/project-4.jpg" alt="..." className="img-fluid" /></div>
                  <div className="text">
                    <h3 className="h4">Project Title</h3><small>Lorem Ipsum Dolor</small>
                  </div>
                </div>
                <div className="project-date"><span className="hidden-sm-down">Today at 4:24 AM</span></div>
              </div>
              <div className="right-col col-lg-6 d-flex align-items-center">
                <div className="time"><i className="fa fa-clock-o" />12:00 PM </div>
                <div className="comments"><i className="fa fa-comment-o" />20</div>
                <div className="project-progress">
                  <div className="progress">
                    <div role="progressbar" style={{width: '50%', height: 6}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-orange" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
      <Footer/>
        </div>
    );
  }
}

export default Main;


