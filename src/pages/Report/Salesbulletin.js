import React from 'react';

const Salesbulletin = () => {
    return (
        <div>
            <div id="page-wrapper">
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Sales Bulletin</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Report</a></li>
          <li className="active">Sales Bulletin</li>
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
              <form data-toggle="validator" className="form-horizontal" name="marketWiseTargetAdd" id="marketWiseTargetAdd" method="POST" action="routeWiseDailySalesReportPrint.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E
&act=add" onsubmit="return dataValidate()" target="_blank">
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Division Name *</label>
                  <div className="col-md-9">
                    <select id="divisionId" name="divisionId" className="form-control input-sm customInput-sm chosen-select" style={{height: 30}} required>
                      <option value>SELECT</option> <option value={8
}> Chittagong Central
                      </option>  <option value={9
}> DIV-002
                      </option>  <option value={10
}> DIV-003
                      </option>  <option value={11
}> DIV-004
                      </option>  <option value={12
}> DIV-005
                      </option>  <option value={13
}> DIV-006
                      </option>  <option value={14
}> DIV-007
                      </option>  <option value={15
}> DIV-008
                      </option>  <option value={16
}> DIV-009
                      </option>  <option value={17
}> DIV-010
                      </option>  <option value={18
}> DIV-011
                      </option>  <option value={19
}> DIV-012
                      </option>  <option value={20
}> DIV-013
                      </option>  <option value={21
}> DIV-014
                      </option>  <option value={22
}> DIV-015
                      </option>  <option value={23
}> DIV-016
                      </option>  <option value={24
}> DIV-017
                      </option>  <option value={25
}> DIV-018
                      </option>  <option value={26
}> DIV-019
                      </option>  <option value={27
}> DIV-020
                      </option>  <option value={28
}> DIV-021
                      </option>  <option value={29
}> DIV-022
                      </option>  <option value={30
}> DIV-023
                      </option>  <option value={31
}> DIV-024
                      </option>  <option value={32
}> DIV-025
                      </option>  <option value={33
}> DIV-026
                      </option>  <option value={34
}> DIV-027
                      </option>  <option value={35
}> DIV-028
                      </option>  <option value={36
}> DIV-029
                      </option>  <option value={37
}> DIV-030
                      </option>  <option value={38
}> DIV-031
                      </option>  <option value={39
}> DIV-032
                      </option>  <option value={40
}> DIV-033
                      </option>  <option value={41
}> DIV-034
                      </option>  <option value={42
}> DIV-035
                      </option>  <option value={43
}> DIV-036
                      </option>  <option value={44
}> DIV-037
                      </option>  <option value={45
}> DIV-038
                      </option>  <option value={46
}> DIV-039
                      </option>  <option value={47
}> DIV-040
                      </option>  <option value={48
}> DIV-041
                      </option>  <option value={49
}> DIV-042
                      </option>  <option value={50
}> DIV-043
                      </option>  <option value={51
}> DIV-044
                      </option>  <option value={52
}> DIV-045
                      </option> 
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
                  {/* Date picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3">Date</label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" className="form-control" id="pDate" name="pDate" placeholder="dd-mm-yyyy" required /> <span className="input-group-addon"><i className="icon-calender" /></span> 
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

export default Salesbulletin;