import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Homepage extends Component {
  render() {
    return (
        <div>
        <div className="logo_products">
          <div className="container">
            <div className="w3ls_logo_products_left">
              <h1><a href="index.html"><span>Pet</span> Market</a></h1>
            </div>
            <div className="w3ls_logo_products_left1">
              <ul className="special_items">
                <li><a href="events.html">Events</a><i>/</i></li>
                <li><a href="about.html">About Us</a><i>/</i></li>
                <li><a href="products.html">Best Deals</a><i>/</i></li>
                <li><a href="services.html">Services</a></li>
                <li><i className="fa fa-phone" aria-hidden="true" />(+0123) 234 567</li>
                <li><i className="fa fa-envelope-o" aria-hidden="true" /><a href="mailto:store@grocery.com">store@grocery.com</a></li>
              </ul>
            </div>
            
            <div className="clearfix"> </div>
          </div>
        </div>
        
        <div className="banner">
          <div className="w3l_banner_nav_left">
            <nav className="navbar nav_bottom">
             
              <div className="navbar-header nav_2">
                <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div> 
              
              <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul className="nav navbar-nav nav_1">
                  <li><a href="products.html">Branded Foods</a></li>
                  <li><a href="household.html">Households</a></li>
                  <li className="dropdown mega-dropdown active">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Veggies &amp; Fruits<span className="caret" /></a>				
                    <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                      <div className="w3ls_vegetables">
                        <ul>	
                          <li><a href="vegetables.html">Vegetables</a></li>
                          <li><a href="vegetables.html">Fruits</a></li>
                        </ul>
                      </div>                  
                    </div>				
                  </li>
                  <li><a href="kitchen.html">Kitchen</a></li>
                  <li><a href="short-codes.html">Short Codes</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Beverages<span className="caret" /></a>
                    <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                      <div className="w3ls_vegetables">
                        <ul>
                          <li><a href="drinks.html">Soft Drinks</a></li>
                          <li><a href="drinks.html">Juices</a></li>
                        </ul>
                      </div>                  
                    </div>	
                  </li>
                  <li><a href="pet.html">Pet Food</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Frozen Foods<span className="caret" /></a>
                    <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                      <div className="w3ls_vegetables">
                        <ul>
                          <li><a href="frozen.html">Frozen Snacks</a></li>
                          <li><a href="frozen.html">Frozen Nonveg</a></li>
                        </ul>
                      </div>                  
                    </div>	
                  </li>
                  <li><a href="bread.html">Bread &amp; Bakery</a></li>
                </ul>
              </div>
             
            </nav>
          </div>
     
            
          <div className="col-lg-9">
            
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img className="d-block img-fluid" src="images/jbt2.jpg" style={{height: 370}} />
                </div>
              </div>
          </div>
          <div className="clearfix" />
        </div>
      
        <div className="banner_bottom">
          <div className="wthree_banner_bottom_left_grid_sub">
          </div>
          <div className="wthree_banner_bottom_left_grid_sub1">
            <div className="col-md-4 wthree_banner_bottom_left">
              <div className="wthree_banner_bottom_left_grid">
                <img src="images/4.jpg" alt=" " className="img-responsive" />
                <div className="wthree_banner_bottom_left_grid_pos">
                  <h4>Discount Offer <span>25%</span></h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 wthree_banner_bottom_left">
              <div className="wthree_banner_bottom_left_grid">
                <img src="images/5.jpg" alt=" " className="img-responsive" />
                <div className="wthree_banner_btm_pos">
                  <h3>introducing <span>best store</span> for <i>groceries</i></h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 wthree_banner_bottom_left">
              <div className="wthree_banner_bottom_left_grid">
                <img src="images/6.jpg" alt=" " className="img-responsive" />
                <div className="wthree_banner_btm_pos1">
                  <h3>Save <span>Upto</span> $10</h3>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        
        <div className="top-brands">
          <div className="container">
            <h3>Hot Offers</h3>
            <div className="agile_top_brands_grids">
              <div className="col-md-3 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="tag"><img src="images/tag.png" alt=" " className="img-responsive" /></div>
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="single.html"><img title=" " alt=" " src="images/1.png" /></a>		
                            <p>fortune sunflower oil</p>
                            <h4>$7.99 <span>$10.00</span></h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="checkout.html" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="Fortune Sunflower Oil" />
                                <input type="hidden" name="amount" defaultValue="7.99" />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="single.html"><img title=" " alt=" " src="images/3.png" /></a>		
                            <p>basmati rise (5 Kg)</p>
                            <h4>$11.99 <span>$15.00</span></h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="basmati rise" />
                                <input type="hidden" name="amount" defaultValue="11.99" />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img src="images/offer.png" alt=" " className="img-responsive" />
                    </div>
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="single.html"><img src="images/2.png" alt=" " className="img-responsive" /></a>
                            <p>Pepsi soft drink (2 Ltr)</p>
                            <h4>$8.00 <span>$10.00</span></h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="Pepsi soft drink" />
                                <input type="hidden" name="amount" defaultValue={8.00} />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img src="images/offer.png" alt=" " className="img-responsive" />
                    </div>
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="single.html"><img src="images/4.png" alt=" " className="img-responsive" /></a>
                            <p>dogs food (4 Kg)</p>
                            <h4>$9.00 <span>$11.00</span></h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="dogs food" />
                                <input type="hidden" name="amount" defaultValue={9.00} />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
       
        
       
      </div>
      
    )
  }
}

export default Homepage