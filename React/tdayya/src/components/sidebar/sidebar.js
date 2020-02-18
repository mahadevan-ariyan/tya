import React, { Component } from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
import Collection from '../collection/collection'
// import Scalpture from '../scalpture/scalpture'
class Sidebar extends Component {
    constructor(props){
      super(props)
      this.state={
        
      }
      
    }

    siderBarClose =()=>{
        
    }
    render() {
        return <div className="container-fluid">
                    <div className="row wrapper">
                        <aside className="col-12 col-sm-3 p-0 bg-grey">
                            <nav className="navbar navbar-expand-sm navbar-dark bg-grey align-items-start text-success flex-sm-column flex-row sticky-top">
                               
                                <a className="navbar-toggler" data-toggle="collapse" data-target=".sidebar" onClick = {()=>{this.siderBarClose()}}>
                                    <span className="navbar-toggler-icon"></span>
                                </a>
                                <div className={this.state.onClose === true ? "collapse navbar-collapse sidebar hide" : "collapse navbar-collapse sidebar "}>
                                    <ul className="flex-column navbar-nav w-100 justify-content-between">
                                        {/* <li className={`nav-item pb-3 dropright dropDownHover ${(this.props.location.pathname === '/admin' || this.props.location.pathname === '/admin/dashboard' ) && 'active'}`}>
                                            <Link to='/admin/dashboard' className={ `nav-link dropdown-link text-success pl-2 text-nowrap ${(this.props.location.pathname === '/admin' || this.props.location.pathname === '/admin/dashboard' ) && 'active'}`} onClick={()=>this.siderBarClose()}>
                                                <span className="">Dashboard</span>
                                            </Link>
                                        </li> */}
                                        <li className="nav-item pb-3">
                                            <Link to='/Collection' className={`nav-link text-success pl-0${this.props.location.pathname === '/admin/manage_users' && ' active'}`} onClick={()=>this.siderBarClose()}><span className="">collection</span></Link>
                                        </li>
                                         <li className="nav-item pb-3">
                                            <Link to='/Scalpture' className={`nav-link text-success pl-0${(this.props.location.pathname === '/Scalpture' || this.props.location.pathname === '/Scalpture') && ' active'}`} onClick={()=>this.siderBarClose()}><span className="">Scalpture</span></Link>
                                        </li>
                                        <li className="nav-item pb-3">
                                            <Link to='/OfferZone' className={`nav-link text-success pl-0${this.props.location.pathname === '/OfferZone' && ' active'}`} onClick={()=>this.siderBarClose()}><span className="">OfferZone</span></Link>
                                        </li>
                                        <li className="nav-item pb-3">
                                            <Link to='/Whishlist' className={`nav-link text-success pl-0${this.props.location.pathname === '/Whishlist' && ' active'}`} onClick={()=>this.siderBarClose()}><span className="">Whishlist</span></Link>
                                        </li>

                                        {/* <li className="nav-item pb-3">
                                            <Link to='/artist' className={`nav-link text-success pl-0${this.props.location.pathname === '/artist' && ' active'}`} onClick={()=>this.siderBarClose()}><span className="">Artist</span></Link>
                                        </li> */}
                                        <li className="nav-item pb-3">
                                            <Link to='/artist' className={`nav-link text-success pl-0${this.props.location.pathname === '/artist' && ' active'}`} onClick={()=>this.siderBarClose()}><span className="">artist</span></Link>
                                        </li>




                                       {/* <li className="nav-item pb-3">
                                            <Link to='/admin/uploads' className={`nav-link text-success pl-0${this.props.location.pathname === '/admin/uploads' && ' active'}`} onClick={()=>this.siderBarClose()}><span className="">IMEI/ICCID Uploads</span></Link>
                                        </li>
                                        <li className="nav-item pb-3">
                                            <Link to='/admin/swuploads' className={`nav-link text-success pl-0${this.props.location.pathname === '/admin/swuploads' && ' active'}`} onClick={()=>this.siderBarClose()}><span className="">SW Uploads</span></Link>
                                        </li> */}
                                        {/* <li className="nav-item pb-3">
                                            <Link to='/admin/manage_permissions' className={`nav-link pl-0${this.props.location.pathname === '/admin/manage_permissions' && ' active'}`}><span className="">Manage Permissions</span></Link>
                                        </li> */}
                                        <li className="nav-item d-block d-sm-none d-md-none d-lg-none">
                                        <Link to='#' className={`nav-link pl-0`}><span onClick={()=>this.handleLogout()}><span className="pr-2" >Logout</span><svg width="28" height="28" viewBox="-1 2 32 32">
                                                <path d="M23,7h-9c-1.6,0-3,1.3-3,3v3.4c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1V10c0-0.4,0.3-0.8,0.8-0.8h9
                                                    c0.4,0,0.8,0.3,0.8,0.8V26c0,0.4-0.3,0.8-0.8,0.8h-9c-0.4,0-0.8-0.3-0.8-0.8v-3.8c0-0.6-0.5-1.1-1.1-1.1S11,21.6,11,22.2V26
                                                    c0,1.6,1.3,3,3,3h9c1.6,0,3-1.3,3-3V10C26,8.3,24.7,7,23,7z M21.6,18c0-0.6-0.5-1.1-1.1-1.1H7.8l2.2-2.2c0.4-0.4,0.4-1.1,0-1.6
                                                    c-0.4-0.4-1.1-0.4-1.6,0l-4,4.1c-0.1,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1
                                                    c0,0.1,0,0.3,0,0.4c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0,0.1,0
                                                    c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0h15.4C21.1,19.1,21.6,18.6,21.6,18z M8.1,20.3
                                                    c-0.4-0.4-1.1-0.4-1.6,0c-0.4,0.4-0.4,1.1,0,1.6l1.9,2c0.4,0.4,1.1,0.4,1.6,0c0.4-0.4,0.4-1.1,0-1.6L8.1,20.3z"></path></svg></span>
                                        </Link>
                                        </li>    
                                    </ul>
                                </div>
                            </nav>
                        </aside>
                            
                        <main className="col bg-faded py-3">
                            {/* <ul className="top-icons navbar-nav float-right text-md-right d-none d-sm-block d-md-block d-lg-block">
                                <li className="nav-item">
                                    <span className="pr-2 headName">Welcome,  </span><svg width="28" height="28" viewBox="-1 2 32 32" onClick={()=>this.handleLogout()}>
                                        <path d="M23,7h-9c-1.6,0-3,1.3-3,3v3.4c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1V10c0-0.4,0.3-0.8,0.8-0.8h9
                                        c0.4,0,0.8,0.3,0.8,0.8V26c0,0.4-0.3,0.8-0.8,0.8h-9c-0.4,0-0.8-0.3-0.8-0.8v-3.8c0-0.6-0.5-1.1-1.1-1.1S11,21.6,11,22.2V26
                                        c0,1.6,1.3,3,3,3h9c1.6,0,3-1.3,3-3V10C26,8.3,24.7,7,23,7z M21.6,18c0-0.6-0.5-1.1-1.1-1.1H7.8l2.2-2.2c0.4-0.4,0.4-1.1,0-1.6
                                        c-0.4-0.4-1.1-0.4-1.6,0l-4,4.1c-0.1,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1
                                        c0,0.1,0,0.3,0,0.4c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0,0.1,0
                                        c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0h15.4C21.1,19.1,21.6,18.6,21.6,18z M8.1,20.3
                                        c-0.4-0.4-1.1-0.4-1.6,0c-0.4,0.4-0.4,1.1,0,1.6l1.9,2c0.4,0.4,1.1,0.4,1.6,0c0.4-0.4,0.4-1.1,0-1.6L8.1,20.3z"></path></svg>
                                   
                                </li> 
                            </ul> */}
                             {this.props.location.pathname === '/collection' && <Collection /> }
                             {/* {this.props.location.pathname === '/sculpture' && <Sculpture /> } */}
                           {/* {this.props.location.pathname === '/admin/dashboard' && <Dashboard /> }
                            {this.props.location.pathname === '/admin/dashboard/reports' && <Reports /> }
                            {this.props.location.pathname === '/admin/manage_users' && <ManageUsers /> }
                            {this.props.location.pathname === '/admin/profile_settings' && <ProfileSettings /> }
                            {this.props.location.pathname === '/admin/uploads' && <Uploads /> }
                            {this.props.location.pathname === '/admin/swuploads' && <SWUploads /> }
                            {this.props.location.pathname === '/admin/profile_settings_edit' && <ProfileSettingsEdit history={this.props.history}/> }
                            {this.props.location.pathname === '/admin/change_password' && <AdminChangePassword history={this.props.history}/> } */}
                           {this.props.location.pathname === '/artist' && <artist /> }
                        </main>
                      
                    </div>
                   
                </div>
    }
}
export default Sidebar;