import React from 'react';

const Productlist = () => {
    return (
        <div>
            <div id="page-wrapper">
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Product List</h4>
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Product Management</a></li>
          <li className="active">Product List</li>
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
              <input type="text" id="searchString" name="searchString" defaultValue className="form-control" placeholder="search...." /> <span className="input-group-btn"><button type="submit" name="btnSearch" className="btn waves-effect waves-light btn-info"><i className="fa fa-search" /></button></span> 
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-sm table-bordered color-table inverse-table table-hover table-custom-padding-5x">
              <thead>
                <tr>
                  {/*<th>#</th>*/}
                  <th>Product Code</th>
                  <th>Product Name</th>
                  <th>Category</th> 
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/*                                    <td>0</td>*/}
                  <td>EAB</td>
                  <td>Existing Abul Bidi/ 42 No. Abul Bidi</td> 
                  <td>Bidi</td>
                  <td className="text-center">
                    {/* a title="Add Inventory" href="#"><i class="ti-support"></i></a */}
                    <a onclick="productListProductDetails('8','59BB43E81CB7B9AB3AA27557019EDA6E');" title="Details" href="#"><i className="ti-info" /></a>
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    {/* a title="Delete" href="#"><i class="ti-trash"></i></a */}
                  </td>
                </tr>
                <tr>
                  {/*                                    <td>0</td>*/}
                  <td>FB</td>
                  <td>Flame Box</td> 
                  <td>Match</td>
                  <td className="text-center">
                    {/* a title="Add Inventory" href="#"><i class="ti-support"></i></a */}
                    <a onclick="productListProductDetails('9','59BB43E81CB7B9AB3AA27557019EDA6E');" title="Details" href="#"><i className="ti-info" /></a>
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    {/* a title="Delete" href="#"><i class="ti-trash"></i></a */}
                  </td>
                </tr>
                <tr>
                  {/*                                    <td>0</td>*/}
                  <td>MSB-10s</td>
                  <td>Marise Special Blend</td> 
                  <td>Cigrettee</td>
                  <td className="text-center">
                    {/* a title="Add Inventory" href="#"><i class="ti-support"></i></a */}
                    <a onclick="productListProductDetails('4','59BB43E81CB7B9AB3AA27557019EDA6E');" title="Details" href="#"><i className="ti-info" /></a>
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    {/* a title="Delete" href="#"><i class="ti-trash"></i></a */}
                  </td>
                </tr>
                <tr>
                  {/*                                    <td>0</td>*/}
                  <td>MSB-20s</td>
                  <td>Marise Special Blend</td> 
                  <td>Cigrettee</td>
                  <td className="text-center">
                    {/* a title="Add Inventory" href="#"><i class="ti-support"></i></a */}
                    <a onclick="productListProductDetails('5','59BB43E81CB7B9AB3AA27557019EDA6E');" title="Details" href="#"><i className="ti-info" /></a>
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    {/* a title="Delete" href="#"><i class="ti-trash"></i></a */}
                  </td>
                </tr>
                <tr>
                  {/*                                    <td>0</td>*/}
                  <td>RV-10s</td>
                  <td>Rally Verve</td> 
                  <td>Cigrettee</td>
                  <td className="text-center">
                    {/* a title="Add Inventory" href="#"><i class="ti-support"></i></a */}
                    <a onclick="productListProductDetails('1','59BB43E81CB7B9AB3AA27557019EDA6E');" title="Details" href="#"><i className="ti-info" /></a>
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    {/* a title="Delete" href="#"><i class="ti-trash"></i></a */}
                  </td>
                </tr>
                <tr>
                  {/*                                    <td>0</td>*/}
                  <td>RV-20s</td>
                  <td>Rally Verve</td> 
                  <td>Cigrettee</td>
                  <td className="text-center">
                    {/* a title="Add Inventory" href="#"><i class="ti-support"></i></a */}
                    <a onclick="productListProductDetails('2','59BB43E81CB7B9AB3AA27557019EDA6E');" title="Details" href="#"><i className="ti-info" /></a>
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    {/* a title="Delete" href="#"><i class="ti-trash"></i></a */}
                  </td>
                </tr>
                <tr>
                  {/*                                    <td>0</td>*/}
                  <td>Rexon-10s</td>
                  <td>Rexon</td> 
                  <td>Cigrettee</td>
                  <td className="text-center">
                    {/* a title="Add Inventory" href="#"><i class="ti-support"></i></a */}
                    <a onclick="productListProductDetails('3','59BB43E81CB7B9AB3AA27557019EDA6E');" title="Details" href="#"><i className="ti-info" /></a>
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    {/* a title="Delete" href="#"><i class="ti-trash"></i></a */}
                  </td>
                </tr>
                <tr>
                  {/*                                    <td>0</td>*/}
                  <td>SAB</td>
                  <td>Special Abul Bidi</td> 
                  <td>Bidi</td>
                  <td className="text-center">
                    {/* a title="Add Inventory" href="#"><i class="ti-support"></i></a */}
                    <a onclick="productListProductDetails('7','59BB43E81CB7B9AB3AA27557019EDA6E');" title="Details" href="#"><i className="ti-info" /></a>
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    {/* a title="Delete" href="#"><i class="ti-trash"></i></a */}
                  </td>
                </tr>
                <tr>
                  {/*                                    <td>0</td>*/}
                  <td>SL</td>
                  <td>Salmon</td> 
                  <td>Match</td>
                  <td className="text-center">
                    {/* a title="Add Inventory" href="#"><i class="ti-support"></i></a */}
                    <a onclick="productListProductDetails('10','59BB43E81CB7B9AB3AA27557019EDA6E');" title="Details" href="#"><i className="ti-info" /></a>
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    {/* a title="Delete" href="#"><i class="ti-trash"></i></a */}
                  </td>
                </tr>
                <tr>
                  {/*                                    <td>0</td>*/}
                  <td>SM-10s</td>
                  <td>Sunmoon Kings</td> 
                  <td>Cigrettee</td>
                  <td className="text-center">
                    {/* a title="Add Inventory" href="#"><i class="ti-support"></i></a */}
                    <a onclick="productListProductDetails('6','59BB43E81CB7B9AB3AA27557019EDA6E');" title="Details" href="#"><i className="ti-info" /></a>
                    <a title="Edit" href="#"><i className="ti-pencil-alt" /></a>
                    {/* a title="Delete" href="#"><i class="ti-trash"></i></a */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="align-right">
            <ul className="pagination pagination-sm m-b-0 justify-content-end">
              <li className="disabled"><a title="Product List" href="#"><i className="fa fa-angle-left" /></a> </li> 
              <li className="active"> <a title="Product List" href="http://salesapp.suffixit.com:8756/AKTWEB/productManagement/productList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=1">1</a> </li>
              <li> <a title="Product List" href="http://salesapp.suffixit.com:8756/AKTWEB/productManagement/productList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=2">2</a> </li>
              <li> <a title="Product List" href="http://salesapp.suffixit.com:8756/AKTWEB/productManagement/productList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=3">3</a> </li>
              <li> <a title="Product List" href="http://salesapp.suffixit.com:8756/AKTWEB/productManagement/productList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=4">4</a> </li>
              <li> <a title="Product List" href="http://salesapp.suffixit.com:8756/AKTWEB/productManagement/productList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=5">5</a> </li>
              <li> <a title="Product List" href="http://salesapp.suffixit.com:8756/AKTWEB/productManagement/productList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=2"><i className="fa fa-angle-right" /></a> </li>
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

export default Productlist;