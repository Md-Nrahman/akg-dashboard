import React from 'react';

const SalesRepMonthlyTargetAdd = () => {
    return (
        <div>

<div id="page-wrapper" style={{minHeight: 596}}>
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Add SR Monthly Target</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Market Management</a></li>
          <li className="active">Add SR Monthly Target</li>
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
            <div className="col-md-12"> 
              <div className="white-box">
                <form className="form-group" name="productList" id="productList" method="POST" action="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesRepMonthlyTargetAdd.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&act=add">
                  <div className="input-group">
                    <input type="text" id="searchString" name="searchString" defaultValue className="form-control" placeholder="search...." /> <span className="input-group-btn"><button type="submit" name="btnSearch" className="btn waves-effect waves-light btn-info"><i className="fa fa-search" /></button></span> 
                  </div>
                </form>
                <div className="table-responsive">
                  <table className="table table-sm table-bordered color-table inverse-table table-hover table-custom-padding-5x">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>SR Name</th>
                        <th>Market</th>
                        <th>Date</th>
                        <th className="text-center">Status</th> 
                        <th className="text-center">History</th> 
                        <th className="text-center">Action</th> 
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td colSpan={7}>No data found</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="align-right">
                  <ul className="pagination pagination-sm m-b-0 justify-content-end">
                    <li className="disabled"><a title="Customer List" href="#"><i className="fa fa-angle-left" /></a> </li> 
                    <li className="active"> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesRepMonthlyTargetAdd.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=1">1</a> </li>
                    <li> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesRepMonthlyTargetAdd.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=2">2</a> </li>
                    <li> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesRepMonthlyTargetAdd.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=3">3</a> </li>
                    <li> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesRepMonthlyTargetAdd.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=4">4</a> </li>
                    <li> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesRepMonthlyTargetAdd.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=5">5</a> </li>
                    <li> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/marketManagement/salesRepMonthlyTargetAdd.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=2"><i className="fa fa-angle-right" /></a> </li>
                  </ul>
                </div>
              </div>
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
  <div id="history-modal" className="modal bs-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{display: 'none'}}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 className="modal-title">Modal Content is Responsive</h4> </div>
        <div className="modal-body">
          <div className="col-md-12">
            <form>
              <div className="form-group row custom-bottom-margin-15x col-md-8">
                {/* Date picker plugins css */}
                <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                <div className="col-sm-9">
                  <div className="input-group">
                    <input type="text" autoComplete="off" className="form-control" id="search_date" name="targetMonth" placeholder="12-20" required /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                  </div>
                  <div className="help-block with-errors" />
                </div>
                {/* Date Picker Plugin JavaScript */}
                <button id="searchBt" type="button" className="btn btn-sm btn-info">Search</button>
              </div>
            </form>
          </div>
          <div className="table-responsive col-md-12">
            <table className="table table-sm table-bordered color-table inverse-table table-hover table-custom-padding-5x">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Market</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody id="tbody">
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
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

export default SalesRepMonthlyTargetAdd;