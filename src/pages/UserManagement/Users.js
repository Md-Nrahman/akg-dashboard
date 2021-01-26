import React from 'react';

const Users = () => {
    return (
        <div>
<div id="page-wrapper" style={{minHeight: 596}}>
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">User List</h4>
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">User Management</a></li>                    
          <li className="active">Users</li>
        </ol>
      </div>
      {/* /.breadcrumb */}
    </div>
    {/* .row */}
    <div className="row globalAlertInfoBoxConParentTT">
      {/* .globalAlertInfoBoxConTT start */}
      <div id="globalAlertInfoBoxConTT" className="col-md-12 globalAlertInfoBoxConTT" style={{display: 'none'}}>
        {/*                <div class="alert alert-primary alert-dismissable fade in" style="border-left: 4px solid #4CAF50;">
                          <a href="#" class="close closeTT" data-dismiss="alert" aria-label="close">&times;</a> 
                          <strong>Success!</strong> You should <a href="#" class="alert-link" style="color: #fff;">read this message</a>.
                              <strong></strong>
                      </div>*/}
      </div>
      {/* .globalAlertInfoBoxConTT end */}
      <div className="col-md-12">
        <div className="white-box">
          <form className="form-group" role="search">
            <div className="input-group">
              <input type="text" id="example-input1-group2" name="example-input1-group2" className="form-control" placeholder="Search" /> <span className="input-group-btn"><button type="button" className="btn waves-effect waves-light btn-info"><i className="fa fa-search" /></button></span> 
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-sm table-bordered color-table inverse-table table-hover table-custom-padding-5x">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Login</th>
                  <th>Name</th>
                  <th className="text-center">Department</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Role</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>01700000001</td>
                  <td>DIST002
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>DIST_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails01700000001" onclick="showSyUserDetails('01700000001','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=01700000001&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=01700000001&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>01700000002</td>
                  <td>DIST003
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>DIST_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails01700000002" onclick="showSyUserDetails('01700000002','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=01700000002&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=01700000002&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>01966660507</td>
                  <td>DIST001
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>DIST_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails01966660507" onclick="showSyUserDetails('01966660507','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=01966660507&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=01966660507&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>ADMIN</td>
                  <td>Administrator
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>Administrator Role</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsADMIN" onclick="showSyUserDetails('ADMIN','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=ADMIN&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=ADMIN&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>DIV01</td>
                  <td>DIV01
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>DIV_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsDIV01" onclick="showSyUserDetails('DIV01','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=DIV01&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=DIV01&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>DIV02</td>
                  <td>DIV02
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>Administrator Role</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsDIV02" onclick="showSyUserDetails('DIV02','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=DIV02&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=DIV02&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>DIV03</td>
                  <td>DIV03
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>DIV_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsDIV03" onclick="showSyUserDetails('DIV03','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=DIV03&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=DIV03&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>MIS</td>
                  <td>MIS
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>NAT_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsMIS" onclick="showSyUserDetails('MIS','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=MIS&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=MIS&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>NATUSER</td>
                  <td>NATUSER
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>NAT_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsNATUSER" onclick="showSyUserDetails('NATUSER','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=NATUSER&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=NATUSER&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>TER01</td>
                  <td>TER01
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>TER_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsTER01" onclick="showSyUserDetails('TER01','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=TER01&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=TER01&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>TER02</td>
                  <td>TER02
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>TER_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsTER02" onclick="showSyUserDetails('TER02','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=TER02&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=TER02&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>WIN01</td>
                  <td>WIN01
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>WIN_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsWIN01" onclick="showSyUserDetails('WIN01','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=WIN01&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=WIN01&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>WIN02</td>
                  <td>WIN02
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td>WIN_ROLE</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsWIN02" onclick="showSyUserDetails('WIN02','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=WIN02&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=WIN02&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>WIN03</td>
                  <td>WIN03
                  </td>
                  <td>IT</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td />
                  <td className="text-center">
                    <a id="btnShowSyUserDetailsWIN03" onclick="showSyUserDetails('WIN03','FC07BFB1D7587F227D4BFD7B4A97920E');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=WIN03&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/userManagement/syUserListUpdateUserInfo.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&userIdX=WIN03&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="align-right">
            <ul className="pagination pagination-sm m-b-0 justify-content-end">
              <li className="disabled"> <a href="#"><i className="fa fa-angle-left" /></a> </li>
              <li> <a href="#">1</a> </li>
              <li className="active"> <a href="#">2</a> </li>
              <li> <a href="#">3</a> </li>
              <li> <a href="#">4</a> </li>
              <li> <a href="#">5</a> </li>
              <li> <a href="#"><i className="fa fa-angle-right" /></a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* /.row */}
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
};

export default Users;