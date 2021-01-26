import React from 'react';

const Stockreport = () => {
    return (
        <div>
            <div id="page-wrapper"> 
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Stock Report</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Inventory Management</a></li>
          <li className="active">Stock Report</li>
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
        <div className="white-box p-t-10">
          <div className="row">
            <div className="col-md-12"> 
              <form className="form-horizontal" name="stockReportFrm" id="stockReportFrm" method="POST">
                <div className="form-group row custom-bottom-margin-5x">
                  {/* Date picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3"> Start Date</label>
                  <div className="col-sm-4">
                    <div className="input-group">
                      <input type="text" id="startDate" name="startDate" defaultValue className="form-control" placeholder="yyyy-mm-dd" /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                    </div>
                    <div className="help-block with-errors" />
                  </div>
                  {/* Date Picker Plugin JavaScript */}
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  {/* Date picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3"> End Date</label>
                  <div className="col-sm-4">
                    <div className="input-group">
                      <input type="text" id="endDate" name="endDate" defaultValue className="form-control" placeholder="yyyy-mm-dd" /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                    </div>
                    <div className="help-block with-errors" />
                  </div>
                  {/* Date Picker Plugin JavaScript */}
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <div className="col-md-4 offset-4">      
                    <input type="button" id="searchStockItem" name="searchStockItem" className="btn btn-info" defaultValue="Submit" />
                    <input type="button" id="exportStockItem" name="exportStockItem" className="btn btn-info" defaultValue="Export" />
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
  </div>
  {/* /.container-fluid */}
  <footer className="footer text-center"> 2020 © Suffix IT Limited</footer>
</div>


        </div>
    );
};

export default Stockreport;