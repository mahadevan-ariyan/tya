import React, { Component } from 'react';
import './header.css'
import headerLogo from "../../images/logo.png"
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      logoutFlag: false
    }
    
  }

  logOut=()=>{
    this.props.history.push("/signin")
    this.setState({ logoutFlag: false })
  }
  render() {
    
    return<div className="navbar navbar-default theme-blue " role="navigation">
    <div className="navbar-header">
    {/* <button type="button" className="navbar-toggle collapsed d-md-none" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button> */}
    <div className="topbar" className="d-none d-lg-block">
    <div className="container">
      <div className="contact-info">
      <Link class="envelope-o"> <i className="fa fa-envelope-o"></i></Link> <Link className="mailto:contact@example.com">contact@example.com</Link>
      <Link class="phone"><i className="fa fa-phone"></i> +1 5589 55488 55</Link>
      </div>
      <div className="social-links float-right">
      <Link class="twitter"><i className="fa fa-twitter"></i></Link> 
      <Link class="facebook"><i className="fa fa-facebook"></i></Link> 
      <Link class="instagram"><i className="fa fa-instagram"></i></Link> 
      <Link class="google-plus"><i className="fa fa-google-plus"></i></Link>
      <Link class="linkedin"><i className="fa fa-linkedin"></i></Link>
      </div>
    </div>
  </div>
      <Link className="logo navbar-brand" href="dashboard.html">
        
          <img src={headerLogo} />Tdayya
      
          {this.state.logoutFlag && <span className="navbar-brand text-light"> Dashboard</span>}
          <span className="navbar-brand text-light"> Dashboard</span>
         <span className="navbar-brand text-light"> Collection</span>
         <span className="navbar-brand text-light"> scalpture</span>
         <span className="navbar-brand text-light"> artist</span>
         <span className="navbar-brand text-light"> OfferZone</span>
       <span className="navbar-brand text-light"> whishlist</span>
       </Link>
  
  </div>
      {this.props.history.location.pathname !== "/signin" ? 
      <ul id="main-menu" className="nav navbar-nav navbar-right" style={{position:"relative",top:"3px"}}>
            <li className="nav-item text-light dropdown hidden-xs" onClick={this.logOut}>
                <span className="text-light padding-right-small" ></span> <i className="fa fa-user" aria-hidden="true"></i>Logout
               
                       </li>
            



          </ul>
          
          : null }
          
      
</div>
  }
}

export default Header;
