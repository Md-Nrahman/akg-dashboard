import React from 'react';

const SalesAssociateList = () => {
    return (
        <div id="page-wrapper" style={{minHeight: 596}}>
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Sales Associate List</h4>
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Market Management</a></li>                    
          <li className="active">Associates</li>
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
                  <th className="text-center">Phone</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Market</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr id="infoBox25">
                  <td>1</td>
                  <td>100025</td>
                  <td>Suffix IT
                  </td>
                  <td>121123123</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market25">ROUTE-0025</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails25" onclick="showSyUserDetails('25','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=25&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=25&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox24">
                  <td>2</td>
                  <td>100024</td>
                  <td>Nasir Mallik
                  </td>
                  <td>01759551274</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market24">Sobujbag</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails24" onclick="showSyUserDetails('24','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=24&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=24&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox23">
                  <td>3</td>
                  <td>100023</td>
                  <td>Md. Ershad
                  </td>
                  <td>01823819373</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market23">Hali Shohar</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails23" onclick="showSyUserDetails('23','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=23&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=23&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox22">
                  <td>4</td>
                  <td>100022</td>
                  <td>Md. Morshed
                  </td>
                  <td>01859430887</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market22">Boropukur</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails22" onclick="showSyUserDetails('22','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=22&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=22&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox21">
                  <td>5</td>
                  <td>100021</td>
                  <td>Shahin
                  </td>
                  <td>01871395174</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market21">Rongi Para</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails21" onclick="showSyUserDetails('21','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=21&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=21&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox20">
                  <td>6</td>
                  <td>100020</td>
                  <td>Abu Hurayra
                  </td>
                  <td>01833492045</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market20">Mazar Road</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails20" onclick="showSyUserDetails('20','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=20&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=20&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox19">
                  <td>7</td>
                  <td>100019</td>
                  <td>Mayen Uddin
                  </td>
                  <td>01876214324</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market19">Noya Bazar</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails19" onclick="showSyUserDetails('19','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=19&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=19&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox18">
                  <td>8</td>
                  <td>100018</td>
                  <td>Md Shahadat Hosen
                  </td>
                  <td>01869540841</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market18">Rampur</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails18" onclick="showSyUserDetails('18','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=18&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=18&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox17">
                  <td>9</td>
                  <td>100017</td>
                  <td>Neshad
                  </td>
                  <td>01816023838</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market17">Bow Bazar</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails17" onclick="showSyUserDetails('17','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=17&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=17&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox16">
                  <td>10</td>
                  <td>100016</td>
                  <td>Md. Tanvir
                  </td>
                  <td>01812113329</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market16">College Route</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails16" onclick="showSyUserDetails('16','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=16&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=16&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox15">
                  <td>11</td>
                  <td>100015</td>
                  <td>Md. Rakib
                  </td>
                  <td>01835196413</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market15">Ashraf Ali</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails15" onclick="showSyUserDetails('15','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=15&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=15&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox14">
                  <td>12</td>
                  <td>100014</td>
                  <td>Md. Arif Hossen
                  </td>
                  <td>01633307861</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market14">GreenView</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails14" onclick="showSyUserDetails('14','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=14&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=14&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox13">
                  <td>13</td>
                  <td>100013</td>
                  <td>Md. Abdur Rahman
                  </td>
                  <td>01815644351</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market13">Eidgah</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails13" onclick="showSyUserDetails('13','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=13&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=13&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox12">
                  <td>14</td>
                  <td>100012</td>
                  <td>Md. Saiful
                  </td>
                  <td>01821456038</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market12">Lake View</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails12" onclick="showSyUserDetails('12','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=12&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=12&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox11">
                  <td>15</td>
                  <td>100011</td>
                  <td>Md. Sahed
                  </td>
                  <td>01741126997</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market11">Jornapara</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails11" onclick="showSyUserDetails('11','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=11&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=11&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox10">
                  <td>16</td>
                  <td>100010</td>
                  <td>Amzad Hossen
                  </td>
                  <td>01871070729</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market10">D.T Road</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails10" onclick="showSyUserDetails('10','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=10&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=10&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox9">
                  <td>17</td>
                  <td>100009</td>
                  <td>Md. Abdul Aziz
                  </td>
                  <td>01624653050</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market9">Soraipara</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails9" onclick="showSyUserDetails('9','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=9&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=9&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox8">
                  <td>18</td>
                  <td>100008</td>
                  <td>Md. Arafat
                  </td>
                  <td>01816272728</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market8">Golichipa</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails8" onclick="showSyUserDetails('8','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=8&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=8&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox7">
                  <td>19</td>
                  <td>100007</td>
                  <td>Md. Juwel
                  </td>
                  <td>01632476010</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market7">Thana Road</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails7" onclick="showSyUserDetails('7','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=7&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=7&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox6">
                  <td>20</td>
                  <td>100006</td>
                  <td>Md. Akash
                  </td>
                  <td>01857033869</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market6">Hindu Para</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails6" onclick="showSyUserDetails('6','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=6&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=6&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox5">
                  <td>21</td>
                  <td>100005</td>
                  <td>Ajom Uddin
                  </td>
                  <td>01884194582</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market5">Sagor Par</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails5" onclick="showSyUserDetails('5','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=5&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=5&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox4">
                  <td>22</td>
                  <td>100004</td>
                  <td>Humayun Kobir
                  </td>
                  <td>01626368539</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market4">Foillatali</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails4" onclick="showSyUserDetails('4','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=4&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=4&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox3">
                  <td>23</td>
                  <td>100003</td>
                  <td>Taher
                  </td>
                  <td>01855526407</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market3">Kazir Dighi</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails3" onclick="showSyUserDetails('3','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=3&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=3&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox2">
                  <td>24</td>
                  <td>100002</td>
                  <td>Md. Akibur Rahman
                  </td>
                  <td>01690006988</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market2">Jele Para</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails2" onclick="showSyUserDetails('2','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=2&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=2&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
                  </td>
                </tr>
                <tr id="infoBox1">
                  <td>25</td>
                  <td>100001</td>
                  <td>Md. Sakil
                  </td>
                  <td>01516040325</td>
                  <td className="text-center"><span className="label label-megna label-rounded label-primary">ACTIVE</span></td>
                  <td><span id="market1">Stadium</span></td>
                  <td>01-Nov-20 <strong>To</strong> 30-Nov-49</td>
                  <td className="text-center">
                    <a id="btnShowSyUserDetails1" onclick="showSyUserDetails('1','A47025389D106ED72BB4C3F3707A363A');" title="User details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=1&selectedTab=profile" title="Edit Profile" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesAssociateProfileInfo.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A&userIdX=1&selectedTab=changePass" title="Change Password" className="btn btn-primary btn-sm"><i className="icon-key" /></a>
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






    );
};

export default SalesAssociateList;