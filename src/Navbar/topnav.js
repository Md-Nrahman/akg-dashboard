import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {LogOut} from '../store/actions/auth';

class Topnav extends React.Component{


      logout(){
        this.props.LogOut();
        window.href('/login');
      }

      // componentDidMount() {
      //   if (!this.props.auth.login) {
      //     window.href('/login');
      //   }
      // }
      


   render(){
     console.log(this.props); m 
    return(
      <div>
          <nav className="navbar navbar-default navbar-static-top m-b-0">
<div className="navbar-header"> <a className="navbar-toggle hidden-sm hidden-md hidden-lg "  data-toggle="collapse" data-target=".navbar-collapse"><i className="ti-menu" /></a>
  <div className="top-left-part">
    <Link className="logo" to="/">
      <b>
        <img style={{width: 60, height: 60}} src="http://smweb.suffixit.com:8756/AKTWEB/commonUtil/plugins/images/company_logo_112x70.png" alt="ABG" />
      </b>
      <span className="hidden-xs">
        {/*<font>DHC</font>*/} 
      </span>
    </Link>
  </div>
  <ul className="nav navbar-top-links navbar-left hidden-xs">
    <li><a  className="open-close hidden-xs waves-effect waves-light"><i className="icon-arrow-left-circle ti-menu" /></a></li>
  </ul>
  <ul className="nav navbar-top-links navbar-right pull-right">
    <li className="dropdown">
      <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> 
        <img src="http://smweb.suffixit.com:8756/AKTWEB/commonUtil/plugins/images/users/no_image.jpg" alt="user-img" width={36} className="img-circle" />
        <b className="hidden-xs">admin</b> 
      </a>
      <ul className="dropdown-menu dropdown-user animated flipInY">
        <li><a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserMyProfile.jsp?sessionid=93123091B968F4DBD31AE953D82E443B"><i className="ti-user" /> My Profile</a></li>
        <li><a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserMyProfile.jsp?selectedTab=changePass&sessionid=93123091B968F4DBD31AE953D82E443B"><i className="ti-wallet" /> Change Password</a></li>
        <li><a href="#"><i className="ti-email" /> Inbox</a></li>
        <li role="separator" className="divider" />
        <li><a href="#"><i className="ti-settings" /> Account Setting</a></li>
        <li role="separator" className="divider" />
        <li><Link onClick={this.logout}><i className="fa fa-power-off" /> Logout</Link></li>
      </ul>
      {/* /.dropdown-user */}
    </li>
    
    {/* /.dropdown */}
  </ul>
</div>
{/* /.navbar-header */}
{/* /.navbar-top-links */}
{/* /.navbar-static-side */}
</nav>



      </div>
  );
   }
}


const mapStateToProps=(state)=>({
  auth:state.auth
})

export default connect(mapStateToProps,{LogOut})(Topnav);