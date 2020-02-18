import React from 'react';
import './signin.css'
import { Link } from 'react-router-dom';
import headerLogo from "../../images/logo.png"
// import { authenticationService } from '../_services';
export default class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            userName:"",
            password:''
        }
  
    }
    handleValues=(e)=>{
        // console.log(field, e.target.value);
        e.target.id == "password" ? this.setState({password: e.target.value}) :  this.setState({UserName: e.target.value})
    }

    submit=(e)=>{
        e.preventDefault()
        console.log("submit",this.state.userName,"submit",this.state.password)

        if(this.state.UserName == "murali" && this.state.password == "murali"){
            // this.props.history.push({pathname:"/sidebar",state:{logincheck: true}})
            this.props.history.push({pathname:"/dashboard",state:{logincheck: true}})
        }
    }
   
    render() {
        return ( <div className="dialog">
                     <form method="post">
                   <div className="panel panel-default m-3 mb-3">
                    <img src={headerLogo} />
                        <p className="panel-heading title-heading no-collapse">Tdayya</p>
                            <div className="panel-body p-5">
                           
                               <div className="label">
                                  <label><span>UserName</span>
                                    <input type="UserName" id="username" className="form-controlspan12 form-control" onChange={(e)=>{this.handleValues(e)}} /></label>
                                        </div>
                                        <div className="label">
                                    <label><span>password</span>
                                    <input type="password" id="password" className="form-controlspan12 form-control" onChange={(e)=>{this.handleValues(e)}} /></label>
                                </div>
                                     {/* <div className="label w-100">
                                    <label>User Name</label>
                                    <input type="userName" id="userName" className="form-controlspan12 form-control" onChange={(e)=>{this.handleValues(e)}}/>
                                </div>
                                <div className="label w-100">
                                    <label>Password</label>
                                    <input type="password" id="password" className="form-controlspan12 form-control" onChange={(e)=>{this.handleValues(e)}}/>
                                </div> */}
                                <button className="btn btn-primary w-100" onClick={(e)=>{this.submit(e)}}>Sign In</button>
                                {/* <label className="remember-me"><input type="checkbox" /> Remember me</label> */}
                                <p className="forgot-link text-center mt-3"><Link href="reset_password.html">Forgot password?</Link></p>
                                <p className="createnewuser-link text-center mt-3"><Link >createNewuser</Link></p>
                                <div className="clearfix"></div>
                          
                        </div>
                    </div>
                    </form>
             </div>

   
        )
    }
}
