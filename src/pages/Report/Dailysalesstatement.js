import React from 'react';

const Dailysalesstatement = () => {
    return (
        <div>
            <div id="page-wrapper">
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Daily Sales Statement All</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Report</a></li>
          <li className="active">Daily Sales Statement</li>
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
              <form data-toggle="validator" className="form-horizontal" name="marketWiseTargetAdd" id="marketWiseTargetAdd" method="POST" action="dailySalesStatementAllReportPrint.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E
&act=add" onsubmit="return dataValidate()" target="_blank">
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Wing Name *</label>
                  <div className="col-md-9">
                    <select id="wingId" name="wingId" className="form-control input-sm customInput-sm chosen-select" style={{height: 30}} required>
                      <option value>SELECT</option> <option value={1}> Chittagong-01 </option>  <option value={2}> Chittagong-02 </option>  <option value={3}> Noakhali </option>  <option value={4}> Dhaka South </option>  <option value={5}> Bogra </option>  <option value={6}> Rangpur </option>  <option value={7}> WIN-7 </option> 
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Division Name *</label>
                  <div className="col-md-9">
                    <select id="divisionId" name="divisionId" className="form-control input-sm customInput-sm" style={{height: 30}}>
                      <option value selected> Select</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Teritory Name</label>
                  <div className="col-md-9">
                    <select id="teritoryId" name="teritoryId" className="form-control input-sm customInput-sm" style={{height: 30}}>
                      <option value selected> Select</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Zone Name</label>
                  <div className="col-md-9">
                    <select id="zoneId" name="zoneId" className="form-control input-sm customInput-sm" style={{height: 30}}>
                      <option value selected> Select</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Product Category *</label>
                  <div className="col-md-9">
                    <select id="productCatId" name="productCatId" className="form-control input-sm customInput-sm " style={{height: 30}} required>
                      <option value>SELECT</option> <option value={101}> Cigrettee </option>  <option value={102}> Bidi </option>  <option value={103}> Match </option> 
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Brand Name</label>
                  <div className="col-md-9">
                    <select id="productName" name="productName" className="form-control input-sm customInput-sm" style={{height: 30}}>
                      <option value selected> Select</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  {/* Date 
                          
                          
                          picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3">Date</label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" className="form-control" id="targetMonth" name="targetMonth" placeholder="mm-yyyy" required /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                    </div>
                    <div className="help-block with-errors" />
                  </div>
                  {/* Date Picker Plugin JavaScript */}
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Report Type</label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm" style={{height: 30}} id="reportType" name="reportType" required>
                      <option value>Select</option>
                      <option value="P">PDF</option>
                      <option value="X">XLS</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="control-label col-sm-3" />
                  <div className="col-sm-offset-3 col-sm-9">
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
</div>

        </div>
    );
};

export default Dailysalesstatement;