import React from 'react';

const customerlist = () => {
    return (
        <div>
            <div id="page-wrapper">
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Customer List</h4>
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Customer Management</a></li>
          <li className="active">Customer List</li>
        </ol>
      </div>
      {/* /.breadcrumb */}
    </div>
    {/* .row */}
    <div className="row">
      <div className="col-md-12">
        <div className="white-box">
          <form className="form-group" name="productList" id="productList" method="POST" action="http://salesapp.suffixit.com:8756/AKTWEB/customerManagement/customerList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&act=add">
            <div className="input-group">
              <input type="text" id="searchString" name="searchString" defaultValue className="form-control" placeholder="search...." /> <span className="input-group-btn"><button type="submit" name="btnSearch" className="btn waves-effect waves-light btn-info"><i className="fa fa-search" /></button></span> 
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-sm table-bordered color-table inverse-table table-hover table-custom-padding-5x">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer Code</th>
                  <th>Customer Name</th>
                  <th>Outlet Name</th>
                  <th>Mobile</th>
                  <th>Type</th> 
                  <th>Route</th> 
                  <th className="text-center">Status</th> 
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>C1000001</td>
                  <td>Md. Malak</td>
                  <td>Malak</td>
                  <td>01820131930</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000001"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000001">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000001" onclick="approveCustomer('1000001', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>C1000002</td>
                  <td>Md. Babul</td>
                  <td>Conkhola</td>
                  <td>01812890288</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000002"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000002">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000002" onclick="approveCustomer('1000002', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>C1000003</td>
                  <td>Santu</td>
                  <td>Ontu- 1</td>
                  <td>01846825447</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000003"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000003">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000003" onclick="approveCustomer('1000003', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>C1000004</td>
                  <td>Jamal</td>
                  <td>Jui</td>
                  <td>01848210642</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000004"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000004">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000004" onclick="approveCustomer('1000004', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>C1000005</td>
                  <td>Biplob Das</td>
                  <td>Vhi Vhi- 1</td>
                  <td>01814396364</td> 
                  <td>RC</td>
                  <td>Stadium</td>
                  <td id="status1000005"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000005">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000005" onclick="approveCustomer('1000005', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>C1000006</td>
                  <td>Parbez</td>
                  <td>Parvaz</td>
                  <td>01848273617</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000006"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000006">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000006" onclick="approveCustomer('1000006', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>C1000007</td>
                  <td>Samol Chondro</td>
                  <td>Raj</td>
                  <td>01784562504</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000007"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000007">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000007" onclick="approveCustomer('1000007', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>C1000008</td>
                  <td>Profullo</td>
                  <td>Profullo</td>
                  <td>01820360763</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000008"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000008">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000008" onclick="approveCustomer('1000008', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>C1000009</td>
                  <td>Sipon</td>
                  <td>Sipon</td>
                  <td>018190076647</td> 
                  <td>RC</td>
                  <td>Stadium</td>
                  <td id="status1000009"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000009">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000009" onclick="approveCustomer('1000009', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>C1000010</td>
                  <td>Subhan</td>
                  <td>Subhan</td>
                  <td>01906765526</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000010"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000010">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000010" onclick="approveCustomer('1000010', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>C1000011</td>
                  <td>Onik</td>
                  <td>Chowdhury</td>
                  <td>01820031024</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000011"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000011">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000011" onclick="approveCustomer('1000011', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>C1000012</td>
                  <td>Juiyal</td>
                  <td>kawcia</td>
                  <td>01674040167</td> 
                  <td>RC</td>
                  <td>Stadium</td>
                  <td id="status1000012"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000012">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000012" onclick="approveCustomer('1000012', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>C1000013</td>
                  <td>Cree Dham</td>
                  <td>Ciram</td>
                  <td>0185788870</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000013"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000013">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000013" onclick="approveCustomer('1000013', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>C1000014</td>
                  <td>Saiful</td>
                  <td>Saiful</td>
                  <td>01832372518</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000014"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000014">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000014" onclick="approveCustomer('1000014', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>C1000015</td>
                  <td>Noyon</td>
                  <td>Noyon</td>
                  <td>01867112242</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000015"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000015">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000015" onclick="approveCustomer('1000015', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>C1000016</td>
                  <td>Asis</td>
                  <td>Asis</td>
                  <td>01824963995</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000016"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000016">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000016" onclick="approveCustomer('1000016', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>C1000017</td>
                  <td>Rubel</td>
                  <td>Rubel</td>
                  <td>01824963995</td> 
                  <td>RC</td>
                  <td>Stadium</td>
                  <td id="status1000017"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000017">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000017" onclick="approveCustomer('1000017', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>C1000018</td>
                  <td>Mollik</td>
                  <td>Nondini</td>
                  <td>01674040144</td> 
                  <td>RC</td>
                  <td>Stadium</td>
                  <td id="status1000018"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000018">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000018" onclick="approveCustomer('1000018', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>C1000019</td>
                  <td>Condon Chowdhury</td>
                  <td>Ontu- 2</td>
                  <td>01818100964</td> 
                  <td>RC</td>
                  <td>Stadium</td>
                  <td id="status1000019"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000019">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000019" onclick="approveCustomer('1000019', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>C1000020</td>
                  <td>Osim</td>
                  <td>Osim</td>
                  <td>01846240644</td> 
                  <td>RD</td>
                  <td>Stadium</td>
                  <td id="status1000020"><span className="label label-megna label-rounded bg-primary p-l-10 p-r-10">Active</span></td>
                  <td className="text-center" id="actionBtnBox1000020">
                    {/*<a title="Approve Customer" class="btn btn-primary btn-sm"><i class="ti-support"></i></a>*/}
                    <a id="btnCustomerApprovedBtn1000020" onclick="approveCustomer('1000020', '59BB43E81CB7B9AB3AA27557019EDA6E')" title="Deactivate Customer" className="btn btn-success btn-sm"><i className="ti-check" /></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="align-right">
            <ul className="pagination pagination-sm m-b-0 justify-content-end">
              <li className="disabled"><a title="Customer List" href="#"><i className="fa fa-angle-left" /></a> </li> 
              <li className="active"> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/customerManagement/customerList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=1">1</a> </li>
              <li> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/customerManagement/customerList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=2">2</a> </li>
              <li> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/customerManagement/customerList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=3">3</a> </li>
              <li> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/customerManagement/customerList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=4">4</a> </li>
              <li> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/customerManagement/customerList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=5">5</a> </li>
              <li> <a title="Customer List" href="http://salesapp.suffixit.com:8756/AKTWEB/customerManagement/customerList.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&pageNumber=2"><i className="fa fa-angle-right" /></a> </li>
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

export default customerlist;