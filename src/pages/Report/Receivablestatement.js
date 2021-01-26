import React from 'react';

const Receivablestatement = () => {
    return (
        <div>
            <div id="page-wrapper"> 
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Receivable Statement Report</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Report</a></li>
          <li className="active">Receivable Statement Report</li>
        </ol>
      </div>
      {/* /.breadcrumb */}
    </div>
    {/* .row */}
    <div className="row">
      <div className="col-md-12">
        <div className="white-box">
          <div className="row">
            <div className="col-md-6"> 
              <form name="receivableStatementReport" id="receivableStatementReport" method="post" action="receivableStatementReportPrint.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E
&act=add" onsubmit="return dataValidate()" target="_blank">
                <div className="form-group row custom-bottom-margin-5x">
                  {/* Date picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3">Start Date</label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" className="form-control" id="startDate" name="startDate" placeholder="yyyy-mm-dd" /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                    </div>
                    <div className="help-block with-errors" />
                  </div>
                  {/* Date Picker Plugin JavaScript */}
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  {/* Date picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3">End Date</label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" className="form-control" id="endDate" name="endDate" placeholder="yyyy-mm-dd" /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                    </div>
                    <div className="help-block with-errors" />
                  </div>
                  {/* Date Picker Plugin JavaScript */}
                </div>
                <div className="form-group row">
                  <label className="control-label col-sm-3" />
                  <div className="col-sm-offset-3 col-sm-9">
                    <button type="submit" className="btn btn-info" name="submit">Report</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /.white-box */}
      </div>
    </div>
  </div>
  {/* /.container-fluid */}
  <footer className="footer text-center"> 2020 © Suffix IT Limited</footer>
</div>

        </div>
    );
};

export default Receivablestatement;