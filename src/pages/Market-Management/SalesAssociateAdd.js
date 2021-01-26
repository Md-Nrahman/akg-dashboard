import React from 'react';

const SalesAssociateAdd = () => {
    return (
        <div id="page-wrapper" style={{minHeight: 596}}>
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Add Sales Associate</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Market Management</a></li>
          <li className="active">Add Associate</li>
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
            <div className="white-box">
              {/* Nav tabs */}
              <ul className="nav customtab nav-tabs" role="tablist">
                <li role="presentation" className="nav-item"><a href="#home1" className="nav-link active" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true"><span className="visible-xs"><i className="ti-home" /></span><span className="hidden-xs"> Create New SR</span></a></li>
                <li role="presentation" className="nav-item"><a href="#profile1" className="nav-link" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span className="visible-xs"><i className="ti-user" /></span> <span className="hidden-xs">Set SR Frequency</span></a></li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active show" id="home1" aria-expanded="true">
                  <div className="row">
                    <div className="col-md-12"> 
                      <form data-toggle="validator" className="form-horizontal">
                        <div className="form-group row custom-bottom-margin-5x">
                          <label htmlFor="inputName4" className="control-label col-sm-3">Login Id</label>
                          <div className="col-sm-9">
                            <input type="text" id="salesAssociateLoginId" name="salesAssociateLoginId" placeholder="User Name" className="form-control input-sm" required />
                            <div id="salesAssociateLoginIdErr" className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="form-group row custom-bottom-margin-5x">
                          <label htmlFor="inputName4" className="control-label col-sm-3">Password</label>
                          <div className="col-sm-9">
                            <input type="password" id="salesAssociatePassword" name="salesAssociatePassword" placeholder="Password" className="form-control input-sm" required />
                            <div id="salesAssociatePasswordErr" className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="form-group row custom-bottom-margin-5x">
                          <label htmlFor="inputName4" className="control-label col-sm-3">Confirm Password</label>
                          <div className="col-sm-9">
                            <input type="password" className="form-control input-sm" id="salesAssociatePasswordConfirm" name="salesAssociatePasswordConfirm" placeholder="Confirm Password" required />
                            <div id="salesAssociatePasswordConfirmErr" className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="form-group row custom-bottom-margin-5x">
                          <label htmlFor="inputName4" className="control-label col-sm-3">Name</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control input-sm" id="salesAssociateFullName" name="salesAssociateFullName" placeholder="Full name" required />
                            <div id="salesAssociateFullNameErr" className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="form-group row custom-bottom-margin-5x">
                          <label htmlFor="inputName4" className="control-label col-sm-3">Mobile</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control input-sm" id="salesAssociateMobile" name="salesAssociateMobile" placeholder="Mobile number" required />
                            <div id="salesAssociateMobileErr" className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="control-label col-sm-3" />
                          <div className="col-sm-offset-3 col-sm-9">
                            <input type="hidden" id="entryUserID" name="entryUserID" defaultValue />
                            <input type="hidden" id="entryTerm" name="entryTerm" defaultValue />
                            <input type="hidden" id="entryIP" name="entryIP" defaultValue />
                            <input type="hidden" id="userstat" name="userstat" defaultValue={1} />
                            <button type="submit" className="btn btn-info">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="profile1" aria-expanded="false">
                  <div className="col-md-8">
                    <form data-toggle="validator" className="form-horizontal" name="syUserAdd" id="syUserAdd" method="POST" action="salesAssociateAddSubmitData.jsp?sessionid=A47025389D106ED72BB4C3F3707A363A
&act=add" onsubmit="return fromDataSubmitValidation()">
                      <div className="form-group row custom-bottom-margin-5x">
                        <label htmlFor="inputName4" className="control-label col-sm-3">SR Name<span className="text-danger">*</span></label>
                        <div className="col-sm-9">
                          <select id="teritoryId" name="srId" className="form-control input-sm customInput-sm custom-bottom-margin-5x chosen-select-width" style={{height: 30, display: 'none'}} required>
                            <option value>SELECT</option>
                          </select><div className="chosen-container chosen-container-single" title id="teritoryId_chosen" style={{width: '95%'}}><a className="chosen-single">
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
                      <div className="form-group row custom-bottom-margin-5x">
                        <label htmlFor="inputName4" className="control-label col-sm-3">SR Frequency<span className="text-danger">*</span></label>
                        <div className="col-sm-9">
                          <select id="frequency" name="frequency" className="form-control input-sm customInput-sm custom-bottom-margin-5x chosen-select-width" style={{height: 30, display: 'none'}} required>
                            <option>--Select Frequency--</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={6}>6</option>
                          </select><div className="chosen-container chosen-container-single" title id="frequency_chosen" style={{width: '95%'}}><a className="chosen-single">
                              <span>--Select Frequency--</span>
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
                      <div id="dynamic-container">
                      </div>
                      <div className="form-group row">
                        <label className="control-label col-sm-3" />
                        <div className="col-sm-offset-3 col-sm-9">
                          <input type="hidden" id="entryUserID" name="entryUserID" defaultValue />
                          <input type="hidden" id="entryTerm" name="entryTerm" defaultValue />
                          <input type="hidden" id="entryIP" name="entryIP" defaultValue />
                          <input type="hidden" id="userstat" name="userstat" defaultValue={1} />
                          <button type="submit" className="btn btn-info">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-5 pull-right">
                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                  </div>
                  <div className="clearfix" />
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

export default SalesAssociateAdd;