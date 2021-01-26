import React from 'react';
import './login.css';
import axios from 'axios';
import { Redirect, useHistory } from "react-router-dom";

import {UserLogin,LoginFailed} from '../store/actions/auth';
import {connect} from 'react-redux';

class Login extends React.Component {



 

  state = {
    username: '',
    password: '',
    login: false,
    store: null,
  }



  

changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  login=async (event)=>{
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic d2ViOjEyMw==");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    await fetch("http://192.168.0.103:8383/oauth/token?grant_type=password&username="+this.state.username+"&password="+this.state.password, requestOptions)
      .then(response => {
        response.json().then((result)=>{
          console.warn("result", result);
          this.props.UserLogin();
          localStorage.setItem('login', JSON.stringify({
            login: true,
            accesstoken: result.access_token,
            refreshtoken: result.refresh_token,
            jti:result.jti,
            type:result.token_type,
            
            
          }))
          
        
        })
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    

      
  }


  componentDidMount(){
    if(this.props.auth){
      this.props.history.push('/');
    }
  }

    render() {
      console.log(this.props);
      return (
        
        <div>
            <section id="wrapper" className="login-register "> 
            
  <div className="login-box " style={{margin:"50px auto"}}>
    <div className="white-box ">
      <form onSubmit={this.login} id="loginform" className="form-horizontal form-material" autoComplete="off" name="frmLogin" >
        <div className="form-group">
          <div className="col-xs-12 text-center">
            <div className="user-thumb text-center"> 
              {/*<img class="img-circle" src="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/images/rupantor-icon-logo-en.png" alt="home" />*/}
              <h3><img src="http://smweb.suffixit.com:8756/AKTWEB/commonUtil/plugins/images/company_logo.png" alt="WPPF" /></h3>
            </div>
          </div>
        </div>
        <h3 className="box-title m-b-20">Sign In</h3>
        <div style={{display: 'block', fontSize: 'small', color: 'red'}}> 
        </div>
        <div className="form-group ">
          <div className="col-xs-12">
            <input onChange={this.changeHandler}  id="username" name="username" className="form-control" type="text" required placeholder="Username" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <input onChange={this.changeHandler}  id="password" name="password" className="form-control" type="password" required placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <div className="checkbox checkbox-primary pull-left p-t-0">
              <input id="checkbox-signup" type="checkbox" />
              <label htmlFor="checkbox-signup"> Remember me </label>
            </div>
            <a href="javascript:void(0)" id="to-recover" className="text-dark pull-right"><i className="fa fa-lock m-r-5" /> Forgot password?</a> </div>
        </div>
        <div className="form-group text-center m-t-20">
          <div className="col-xs-12">
            <button  className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
          </div>
        </div>
      </form>
      <form className="form-horizontal" id="recoverform" >
        <div className="form-group ">
          <div className="col-xs-12">
            <h3>Recover Password</h3>
            <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
          </div>
        </div>
        <div className="form-group ">
          <div className="col-xs-12">
            <input className="form-control" type="text" required placeholder="Email" />
          </div>
        </div>
        <div className="form-group text-center m-t-20">
          <div className="col-xs-12">
            <button  className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

        </div>
    );
    }
};

const mapStateToProps= (state) => ({
  auth:state.auth,
})

export default connect(mapStateToProps, { UserLogin, LoginFailed })(Login);