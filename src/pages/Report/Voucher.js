import React from 'react';

const Voucher = () => {
    return (
        <div>
            <div id="page-wrapper">
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Voucher List </h4>   
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li className="active">Voucher List</li>
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
          <form className="form-group" name="voucherList" id="voucherList" method="POST" action="http://salesapp.suffixit.com:8756/AKTWEB/account/voucherList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&act=add">
            <div className="input-group">
              <input type="text" id="searchString" name="searchString" defaultValue className="form-control" placeholder="search...." /> <span className="input-group-btn"><button type="button" name="btnSearch" className="btn waves-effect waves-light btn-info"><i className="fa fa-search" /></button></span> 
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-sm table-bordered color-table inverse-table table-hover table-custom-padding-5x">
              <thead>
                <tr>
                  <th align="center"><b>Voucher ID</b></th>
                  <th align="center"><b>Voucher Type </b></th>
                  <th align="center"><b>Voucher Date</b></th>
                  <th align="center"><b>Description</b></th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
          <div className="align-right">
            <ul className="pagination pagination-sm m-b-0 justify-content-end">
              <li className="disabled"><a title="Voucher List" href="#"><i className="fa fa-angle-left" /></a> </li> 
              <li className="active"> <a title="Voucher List" href="http://salesapp.suffixit.com:8756/AKTWEB/account/voucherList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=1">1</a> </li>
              <li> <a title="Voucher List" href="http://salesapp.suffixit.com:8756/AKTWEB/account/voucherList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=2">2</a> </li>
              <li> <a title="Voucher List" href="http://salesapp.suffixit.com:8756/AKTWEB/account/voucherList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=3">3</a> </li>
              <li> <a title="Voucher List" href="http://salesapp.suffixit.com:8756/AKTWEB/account/voucherList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=4">4</a> </li>
              <li> <a title="Voucher List" href="http://salesapp.suffixit.com:8756/AKTWEB/account/voucherList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=5">5</a> </li>
              <li> <a title="Voucher List" href="http://salesapp.suffixit.com:8756/AKTWEB/account/voucherList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=2"><i className="fa fa-angle-right" /></a> </li>
            </ul>
          </div>
        </div>
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

export default Voucher;