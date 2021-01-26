import React from 'react';

const Roles = () => {
    return (
        <div>
     <div id="page-wrapper" style={{minHeight: 596}}>
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Roles List</h4>
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">User Management</a></li>                    
          <li className="active">Roles</li>
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
                  <th>Role ID</th>
                  <th>Role Name</th>
                  <th className="text-center">Created By</th>
                  <th className="text-center">Created On</th>
                  <th className="text-center">Last Modified By</th>
                  <th className="text-center">Last Modified On</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td> ADMIN_ROLE</td>
                  <td> Administrator Role</td>
                  <td> SUPERUSER</td>
                  <td> 2012-06-25 15:27:51.81</td>
                  <td> ADMIN</td>
                  <td> 2017-08-05 17:18:40.637</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="changeInvoiceStatus('2');" title="Change invoice status" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a id="btnShowRoleActivityInfo_ADMIN_ROLE" onclick="showRoleActivityInfo('ADMIN_ROLE', 'Administrator Role', 'FC07BFB1D7587F227D4BFD7B4A97920E')" title="Add/Remove Activity Info" className="btn btn-primary btn-sm"><i className="fa fa-fort-awesome" /></a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td> DIST_ROLE</td>
                  <td> DIST_ROLE</td>
                  <td> admin</td>
                  <td> 2018-11-11 16:19:34.66</td>
                  <td> admin</td>
                  <td> 2018-11-11 16:19:34.66</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="changeInvoiceStatus('2');" title="Change invoice status" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a id="btnShowRoleActivityInfo_DIST_ROLE" onclick="showRoleActivityInfo('DIST_ROLE', 'DIST_ROLE', 'FC07BFB1D7587F227D4BFD7B4A97920E')" title="Add/Remove Activity Info" className="btn btn-primary btn-sm"><i className="fa fa-fort-awesome" /></a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td> DIV_ROLE</td>
                  <td> DIV_ROLE</td>
                  <td> admin</td>
                  <td> 2018-11-11 16:19:34.66</td>
                  <td> admin</td>
                  <td> 2018-11-11 16:19:34.66</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="changeInvoiceStatus('2');" title="Change invoice status" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a id="btnShowRoleActivityInfo_DIV_ROLE" onclick="showRoleActivityInfo('DIV_ROLE', 'DIV_ROLE', 'FC07BFB1D7587F227D4BFD7B4A97920E')" title="Add/Remove Activity Info" className="btn btn-primary btn-sm"><i className="fa fa-fort-awesome" /></a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td> NAT_ROLE</td>
                  <td> NAT_ROLE</td>
                  <td> admin</td>
                  <td> 2018-11-11 16:19:34.66</td>
                  <td> admin</td>
                  <td> 2018-11-11 16:19:34.66</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="changeInvoiceStatus('2');" title="Change invoice status" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a id="btnShowRoleActivityInfo_NAT_ROLE" onclick="showRoleActivityInfo('NAT_ROLE', 'NAT_ROLE', 'FC07BFB1D7587F227D4BFD7B4A97920E')" title="Add/Remove Activity Info" className="btn btn-primary btn-sm"><i className="fa fa-fort-awesome" /></a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td> SALES_USER</td>
                  <td> SALES_USER</td>
                  <td> admin</td>
                  <td> 2018-11-08 13:06:28.799</td>
                  <td> admin</td>
                  <td> 2018-11-08 13:06:28.799</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="changeInvoiceStatus('2');" title="Change invoice status" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a id="btnShowRoleActivityInfo_SALES_USER" onclick="showRoleActivityInfo('SALES_USER', 'SALES_USER', 'FC07BFB1D7587F227D4BFD7B4A97920E')" title="Add/Remove Activity Info" className="btn btn-primary btn-sm"><i className="fa fa-fort-awesome" /></a>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td> STORE_USER</td>
                  <td> STORE_USER</td>
                  <td> admin</td>
                  <td> 2018-11-08 12:55:10.889</td>
                  <td> admin</td>
                  <td> 2018-11-08 12:55:10.889</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="changeInvoiceStatus('2');" title="Change invoice status" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a id="btnShowRoleActivityInfo_STORE_USER" onclick="showRoleActivityInfo('STORE_USER', 'STORE_USER', 'FC07BFB1D7587F227D4BFD7B4A97920E')" title="Add/Remove Activity Info" className="btn btn-primary btn-sm"><i className="fa fa-fort-awesome" /></a>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td> TER_ROLE</td>
                  <td> TER_ROLE</td>
                  <td> admin</td>
                  <td> 2018-11-11 16:19:34.66</td>
                  <td> admin</td>
                  <td> 2018-11-11 16:19:34.66</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="changeInvoiceStatus('2');" title="Change invoice status" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a id="btnShowRoleActivityInfo_TER_ROLE" onclick="showRoleActivityInfo('TER_ROLE', 'TER_ROLE', 'FC07BFB1D7587F227D4BFD7B4A97920E')" title="Add/Remove Activity Info" className="btn btn-primary btn-sm"><i className="fa fa-fort-awesome" /></a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td> USER_ROLE</td>
                  <td> USER_ROLE</td>
                  <td> ADMIN</td>
                  <td> 2016-04-16 09:16:22.846</td>
                  <td> ADMIN</td>
                  <td> 2017-04-16 15:41:18.173</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="changeInvoiceStatus('2');" title="Change invoice status" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a id="btnShowRoleActivityInfo_USER_ROLE" onclick="showRoleActivityInfo('USER_ROLE', 'USER_ROLE', 'FC07BFB1D7587F227D4BFD7B4A97920E')" title="Add/Remove Activity Info" className="btn btn-primary btn-sm"><i className="fa fa-fort-awesome" /></a>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td> WIN_ROLE</td>
                  <td> WIN_ROLE</td>
                  <td> admin</td>
                  <td> 2018-11-11 16:19:34.66</td>
                  <td> admin</td>
                  <td> 2018-11-11 16:19:34.66</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="changeInvoiceStatus('2');" title="Change invoice status" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                    <a id="btnShowRoleActivityInfo_WIN_ROLE" onclick="showRoleActivityInfo('WIN_ROLE', 'WIN_ROLE', 'FC07BFB1D7587F227D4BFD7B4A97920E')" title="Add/Remove Activity Info" className="btn btn-primary btn-sm"><i className="fa fa-fort-awesome" /></a>
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

export default Roles;