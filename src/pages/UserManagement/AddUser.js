import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {connect} from 'react-redux';

class AddUser extends React.Component{
  

  state = {
    confirmPassword: '',
    department: '',
    email:'',
    mobile:'',
    name:'',
    password:'',
    permissions:[],
    roles:[],
    userName:'',
    getroles:[]
   
    
  }



  
componentDidMount(){

  // const value = JSON.parse(localStorage.getItem('login')).accesstoken;
  // console.log("token ----------->> "+value);
  // var self = this;
  
  //   axios
  //     .get('192.168.0.103:8181/api/admin/getRoles', {
  //       mode: "no-cors",
  //       headers: { Authorization: `Bearer ${value}` }
  //     })
  //     .then(function(response) {
  //       self.setState({ getroles: response.data.data });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });

  console.log('running');
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer "+JSON.parse(localStorage.getItem('login')).accesstoken);
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("http://192.168.0.103:8181/api/admin/getRoles", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
}


  

   


  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }


    render(){
      console.log(this.props.auth);
      return (
        <div>

<div id="page-wrapper" style={{minHeight: 596}}>
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Add System User</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">User Management</a></li>
          <li className="active">Add User</li>
        </ol>
      </div>
      {/* /.breadcrumb */}
    </div>
    {/* .row */}
    <div className="row globalAlertInfoBoxConParentTT">
      {/* .globalAlertInfoBoxConTT start */}
      <div id="globalAlertInfoBoxConTT" className="col-md-12 globalAlertInfoBoxConTT" style={{display: 'none'}}>
        <div className="alert alert-primary alert-dismissable fade in" style={{borderLeft: '4px solid #4CAF50'}}>
          <a href="#" className="close closeTT" data-dismiss="alert" aria-label="close">×</a> 
          {/*                    <strong>Success!</strong> You should <a href="#" class="alert-link" style="color: #fff;">read this message</a>.*/}
          <strong />
        </div>
      </div>
      {/* .globalAlertInfoBoxConTT end */}
      <div className="col-md-12">
        <div className="white-box">
          <div className="row">
            <div className="col-md-8 mx-auto mt-5"> 
              {/*<form data-toggle="validator" class="form-horizontal">*/}
              <form data-toggle="validator" className="form-horizontal" name="syUserAdd" id="syUserAdd" onSubmit={this.addUsers}>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">User Name</label>
                  <div className="col-sm-9">
                    <input onChange={this.changeHandler} type="text" id="syUserName" name="userName" placeholder="User Name" className="form-control input-sm" required />
                    <div id="syUserNameErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Password</label>
                  <div className="col-sm-9">
                    <input type="password" onChange={this.changeHandler} id="syUserPassword" name="password" placeholder="Password" className="form-control input-sm" required />
                    <div id="syUserPasswordErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Confirm Password</label>
                  <div className="col-sm-9">
                    <input type="password" onChange={this.changeHandler} className="form-control input-sm" id="syUserPasswordConfirm" name="confirmPassword" placeholder="Confirm Password" required />
                    <div id="syUserPasswordConfirmErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Name</label>
                  <div className="col-sm-9">
                    <input type="text" onChange={this.changeHandler} className="form-control input-sm" id="syUserFullName" name="name" placeholder="Full name" required />
                    <div id="syUserFullNameErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Mobile</label>
                  <div className="col-sm-9">
                    <input type="text" onChange={this.changeHandler} className="form-control input-sm" id="syUserMobile" name="mobile" placeholder="Mobile number" required />
                    <div id="syUserMobileErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Email</label>
                  <div className="col-sm-9">
                    <input type="text" onChange={this.changeHandler} className="form-control input-sm" id="syUserEmail" name="email" placeholder="Email address" required />
                    <div id="syUserEmailErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Department</label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm" style={{height: 30}} id="syUserDept" name="department">
                      <option value>SELECT</option>
                      <option value=" A/C Plant "> A/C Plant
                      </option> 
                      
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Permissions</label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm" style={{height: 30}} id="syUserDept" name="permissions">
                      <option value>SELECT</option>
                      <option value=" A/C Plant "> A/C Plant
                      </option> 
                      
                    </select>
                  </div>
                </div>

                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Roles</label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm" style={{height: 30}} id="syUserDept" name="roles">
                    
                     
                      <option value>SELECT</option>
                      <option value=" A/C Plant "> A/C Plant
                      </option> 
                      
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="control-label col-sm-3" />
                  <div className="col-sm-offset-3 col-sm-9">
                    <input type="hidden" id="entryUserID" name="entryUserID" defaultValue />
                    <input type="hidden" id="entryTerm" name="entryTerm" defaultValue />
                    <input type="hidden" id="entryIP" name="entryIP" defaultValue />
                    <input type="hidden" id="userstat" name="userstat" defaultValue={1} />
                    <button type="submit" className="btn btn-info">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /.white-box */}
      </div>
    </div>
    {/* /.row */}
    {/*Chosen JavaScript */}
    {/*Chosen JavaScript */}
    {/*Chosen JavaScript */}
  </div>
  {/* /.container-fluid */}
  <footer className="footer text-center"> 2020 © Suffix IT Limited</footer>
  {/* sample modal content */}
  <div id="rupantorLGModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{display: 'none'}}>
    <div className="modal-dialog modal-lg" style={{marginTop: 100}}>
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 className="modal-title" id="rupantorLGModalTitle">Large modal</h4> 
        </div>
        <div className="modal-body" id="rupantorLGModalBody">
          <h4>Overflowing text to show scroll behavior</h4>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
        <div className="modal-footer" id="rupantorLGModalFooter">
          <button type="button" className="btn btn-danger waves-effect text-left" data-dismiss="modal">Close</button>
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  {/* /.modal */}
</div>
    
        </div>
    );
    }
};


const mapStateToProps=(state)=>(
  {
    auth:state.auth
  }
)

export default connect(mapStateToProps, null)(AddUser);