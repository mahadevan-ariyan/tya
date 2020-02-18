import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
class Footer extends Component {
  render() {
    return <div className="footer tas">
        <div class="container-fluid">
        <div className="container">
          <div className="row"> 
          <div className="col-md-2">
          <h4 className="box-heading">Information</h4>
          <ul className="box-content list-unstyled">
          <li><Link href="">About Us</Link></li>
          <li><Link href="">Delivery Information</Link></li>
          <li><Link href="">Privacy Policy</Link></li>
          <li><Link href="">Terms &amp; Conditions</Link></li>
          </ul>
          </div> 
          <div className="col-md-2">
          <h4 className="box-heading">Customer Service</h4>
          <ul className="box-content list-unstyled">
          <li><Link href="">Contact Us</Link></li>
          <li><Link href="">Returns</Link></li>
          <li><Link href="">Site Map</Link></li>
          <li><Link href="https://ariyandeva.blogspot.com/">Blog</Link></li>
          </ul>
          </div>
          <div className="col-md-2">
          <h4 className="box-heading">Offer Zone</h4>
          <ul className="box-content list-unstyled">
              <li><Link href="">Brand</Link></li>
              <li><Link href="">Gift Vouchers</Link></li>
              </ul>
              </div>
              <div className="col-md-2">
                 <h4 className="box-heading">My Account</h4>
                <ul className="box-content list-unstyled">
                <Link>
                 <li><Link href="">Order History</Link></li>
                 <li><Link href="">Wish List</Link></li>
                  <li><Link href="">Email Notification</Link></li>
                  </Link>
                </ul>		
                </div>
             

                <div className="col-md-2">
                <h4 className="box-heading">Contact Us</h4>
                <div className="box-content footer_box">
                <address>
                <p>
                <i className="material-icons">location_on</i><Link className="footer-link" href="//www.google.com/maps/?q=40.6700,+-73.9400" target="_blank">My Company Ramnad D04  </Link>
                <i className="material-icons">phone</i><Link className="footer-link" href="callto:9626828691">9626828691</Link>
                <i className="material-icons">email</i><Link href="mailto:maham2akadmin@gmail.com">maham2akadmin@gmail.com</Link>
                <i className="material-icons">access_time</i>7 days a week from 8:00 am to 5:00 pm
                </p>
                </address>
                </div>
                </div>
                <div className="col-md-2">
                 <ul className="social-list list-unstyled">
                    <li><Link className="fa fa-facebook" href="//www.facebook.com/zemezlab/" data-toggle="tooltip" title="" data-original-title="Facebook"></Link></li>
                    <li><Link className="fa fa-twitter" href="//twitter.com/zemezlab" data-toggle="tooltip" title="" data-original-title="Twitter"></Link></li>
                    <li><Link className="fa fa-google-plus" href="//plus.google.com/+TemplateMonster" data-toggle="tooltip" title="" data-original-title="Google+ "></Link></li>
                    </ul>
                    </div>                
                    <div className="copyright">
                    <div className="container">Powered By <Link href="http://www.Tdayya.com">Mahadevan CEO of Tdayya</Link> Online Arts Store © 2019</div></div>
                </div>
                </div>
                </div>
        </div>
    
    
  }
}

export default Footer;
