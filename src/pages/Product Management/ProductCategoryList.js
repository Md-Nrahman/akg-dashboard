import React from 'react';

const ProductCategoryList = () => {
    return (
        <div>
            <div id="page-wrapper">
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Product Category List</h4>
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Product Management</a></li>
          <li className="active">Category List</li>
        </ol>
      </div>
      {/* /.breadcrumb */}
    </div>
    {/* .row */}
    <div className="row">
      <div className="col-md-12">
        <div className="white-box">
          <form className="form-group" name="productList" id="productList" method="POST" action="http://salesapp.suffixit.com:8756/AKTWEB/productManagement/productList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&act=add">
            <div className="input-group">
              <input type="text" id="searchString" name="searchString" defaultValue className="form-control" placeholder="search...." /> <span className="input-group-btn"><button type="button" name="btnSearch" className="btn waves-effect waves-light btn-info"><i className="fa fa-search" /></button></span> 
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-sm table-bordered color-table inverse-table table-hover table-custom-padding-5x">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Short Name</th>
                  <th>Short Desc</th>
                  <th>Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{fontSize: 14}}>1</th>
                  <th style={{fontSize: 14}}>CG-101</th>
                  <th style={{fontSize: 14}}>Cigrettee</th>
                  <th style={{fontSize: 14}}>Cigrettee</th>
                  <th style={{fontSize: 14}}>Cigrettee</th>
                  <th style={{fontSize: 14}}>Cigrettee</th>
                  <th className="text-center">
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    <a title="Delete" href="#"><i className="ti-trash" /></a>
                  </th>
                </tr>
                <tr>
                  <th style={{fontSize: 14}}>2</th>
                  <th style={{fontSize: 14}}>BD-102</th>
                  <th style={{fontSize: 14}}>Bidi</th>
                  <th style={{fontSize: 14}}>Bidi</th>
                  <th style={{fontSize: 14}}>Bidi</th>
                  <th style={{fontSize: 14}}>Bidi</th>
                  <th className="text-center">
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    <a title="Delete" href="#"><i className="ti-trash" /></a>
                  </th>
                </tr>
                <tr>
                  <th style={{fontSize: 14}}>3</th>
                  <th style={{fontSize: 14}}>FB-103</th>
                  <th style={{fontSize: 14}}>Match</th>
                  <th style={{fontSize: 14}}>Match</th>
                  <th style={{fontSize: 14}}>Match</th>
                  <th style={{fontSize: 14}}>Match</th>
                  <th className="text-center">
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    <a title="Delete" href="#"><i className="ti-trash" /></a>
                  </th>
                </tr>
              </tbody>
            </table>
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

export default ProductCategoryList;