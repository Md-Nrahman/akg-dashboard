import React from 'react';

const MarketWiseTargetAdd = () => {
    return (
        <div>
            
         <div id="page-wrapper" style={{minHeight: 596}}>
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Add Market wise Target</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Market Management</a></li>
          <li className="active">Add Market wise Target</li>
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
            <div className="col-md-6"> 
              <form data-toggle="validator" className="form-horizontal" name="marketWiseTargetAdd" id="marketWiseTargetAdd" method="POST" action="marketWiseTargetAddConfirm.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E
&act=add" onsubmit="return dataValidate()">
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Market</label>
                  <div className="col-md-9">
                    <select id="teritoryId" name="teritoryId" className="form-control input-sm customInput-sm chosen-select" style={{height: 30, display: 'none'}} required>
                      <option value>SELECT</option> <option value="1|Chittagong-01
"> Chittagong-01
                      </option>  <option value="2|Chittagong-02
"> Chittagong-02
                      </option>  <option value="3|Noakhali
"> Noakhali
                      </option>  <option value="4|Dhaka South
"> Dhaka South
                      </option>  <option value="5|Bogra
"> Bogra
                      </option>  <option value="6|Rangpur
"> Rangpur
                      </option>  <option value="7|WIN-7
"> WIN-7
                      </option> 
                    </select><div className="chosen-container chosen-container-single" title id="teritoryId_chosen" style={{width: 382}}><a className="chosen-single">
                        <span>SELECT</span>
                        <div><b /></div>
                      </a>
                      <div className="chosen-drop">
                        <div className="chosen-search">
                          <input className="chosen-search-input" type="text" autoComplete="off" />
                        </div>
                        <ul className="chosen-results" />
                      </div></div>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  {/* Date picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3">Start Date</label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" className="form-control" id="targetMonth" name="targetMonth" placeholder="mm-yyyy" required /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                    </div>
                    <div className="help-block with-errors" />
                  </div>
                  {/* Date Picker Plugin JavaScript */}
                </div>
                <div className="form-group row">
                  <label className="control-label col-sm-3" />
                  <div className="col-sm-offset-3 col-sm-9">
                    <button type="submit" className="btn btn-info">Next</button>
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
};

export default MarketWiseTargetAdd;