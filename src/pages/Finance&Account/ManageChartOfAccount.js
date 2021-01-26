import React from 'react';

const ManageChartOfAccount = () => {
    return (
        <div>
           <div id="page-wrapper" style={{minHeight: 596}}>
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">GL List</h4>
        <a title="Add GL" href="http://salesapp.suffixit.com:8756/AKTWEB/account/glAdd.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E">
          <button className="btn btn-info btn-rounded waves-effect waves-light"><i className="icon-plus" /><span> &nbsp;Add GL</span></button>
        </a>
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="http://salesapp.suffixit.com:8756/AKTWEB/dashboardDemographical.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E">Home</a></li>
          <li className="active">Gl List</li>
        </ol>
      </div>
      {/* /.breadcrumb */}
    </div>
    {/* .row */}
    <div className="row globalAlertInfoBoxConParentTT">
      <div id="globalAlertInfoBoxConTT" className="col-md-12 globalAlertInfoBoxConTT" style={{display: 'none'}}>
        <div className="alert alert-primary alert-dismissable fade in" style={{borderLeft: '4px solid #4CAF50'}}>
          <a href="#" className="close closeTT" data-dismiss="alert" aria-label="close">×</a> 
          {/*                    <strong>Success!</strong> You should <a href="#" class="alert-link" style="color: #fff;">read this message</a>.*/}
          <strong />
        </div>
      </div>
      <div className="col-md-12">
        <div className="white-box">
          <form className="form-group" role="search">
            <div className="input-group">
              <input type="text" id="example-input1-group2" name="example-input1-group2" className="form-control" placeholder="Angular Js" /> <span className="input-group-btn"><button type="button" className="btn waves-effect waves-light btn-info"><i className="fa fa-search" /></button></span> 
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-sm table-bordered color-table inverse-table table-hover table-custom-padding-5x">
              <thead>
                <tr>
                </tr><tr>
                  <th align="center"><b>Sl.</b></th>
                  <th align="center"><b>Account Name</b></th>
                  <th align="center"><b>Gl Type</b></th>
                  <th className="text-right"><b>Balance</b></th>
                  <th className="text-center"><b>Add Date</b></th>
                  <th align="center"><b />Mod Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <a className="font-bold" href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?parentGl=1061&sessionid=FC07BFB1D7587F227D4BFD7B4A97920E">
                      Assets
                    </a>
                  </td>
                  <td>Assets</td>
                  <td className="text-right">
                    0.00                                      </td>
                  <td className="text-center">2018-01-01</td>
                  <td>
                    2018-01-01
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <a className="font-bold" href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?parentGl=1073&sessionid=FC07BFB1D7587F227D4BFD7B4A97920E">
                      Liabilities
                    </a>
                  </td>
                  <td>Liabilities</td>
                  <td className="text-right">
                    0.00                                      </td>
                  <td className="text-center">2018-01-01</td>
                  <td>
                    2018-01-01
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <a className="font-bold" href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?parentGl=1079&sessionid=FC07BFB1D7587F227D4BFD7B4A97920E">
                      Equity
                    </a>
                  </td>
                  <td>Capital/ Equity</td>
                  <td className="text-right">
                    0.00                                      </td>
                  <td className="text-center">2018-01-01</td>
                  <td>
                    2018-01-01
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <a className="font-bold" href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?parentGl=1000&sessionid=FC07BFB1D7587F227D4BFD7B4A97920E">
                      Income
                    </a>
                  </td>
                  <td>Income</td>
                  <td className="text-right">
                    0.00                                      </td>
                  <td className="text-center">2018-01-01</td>
                  <td>
                    2018-01-01
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <a className="font-bold" href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?parentGl=1008&sessionid=FC07BFB1D7587F227D4BFD7B4A97920E">
                      Expenses
                    </a>
                  </td>
                  <td>Expense</td>
                  <td className="text-right">
                    0.00                                      </td>
                  <td className="text-center">2018-01-01</td>
                  <td>
                    2018-01-01
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="align-right">
            <ul className="pagination pagination-sm m-b-0 justify-content-end">
              <li className="disabled"><a href="#"><i className="fa fa-angle-left" /></a> </li> 
              <li className="active"> <a href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=1&parentGl=null">1</a> </li>
              <li> <a href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=2&parentGl=null">2</a> </li>
              <li> <a href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=3&parentGl=null">3</a> </li>
              <li> <a href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=4&parentGl=null">4</a> </li>
              <li> <a href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=5&parentGl=null">5</a> </li>
              <li> <a href="http://salesapp.suffixit.com:8756/AKTWEB/account/glList.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E&pageNumber=2&parentGl=null"><i className="fa fa-angle-right" /></a> </li>
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

export default ManageChartOfAccount;