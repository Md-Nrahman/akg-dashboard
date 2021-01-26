import React from 'react';

const Addstockitem = () => {
    return (
        <div>
            <div id="page-wrapper"> 
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Add Inventory Item </h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Inventory Management</a></li>
          <li className="active">Add Inventory Item</li>
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
        <div className="white-box p-t-0">
          <div className="row">
            <div className="col-md-6"> 
              <form className="form-horizontal" name="invoiceGeneration" id="invoiceGeneration" method="POST" action="stockAddSubmitData.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&act=add" onsubmit="return fromDataSubmitValidation()">
                <div className="form-group row custom-bottom-margin-5x m-t-10">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Order No/Lot No<font color="red">*</font></label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control input-sm" id="orderNo" name="orderNo" placeholder="Order No" required />
                    <div className="help-block with-errors" id="orderNoErr" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputName4" className="control-label col-sm-3">Recived Date<font color="red">*</font></label>
                  <div className="col-sm-4">
                    <div className="input-group">
                      <input name="orderDate" id="orderDate" type="text" className="form-control input-sm" placeholder="yyyy-mm-dd" required /> 
                      <span className="input-group-addon"><i className="icon-calender" /></span>
                    </div>
                    <span id="orderDateErr" />
                  </div>
                </div>
                <h4>Product Details</h4>
                <div className="form-group row"> 
                  <table id="invoiceDetails" className="table table-bordered color-table purple-table table-custom-padding-5x">
                    <thead>
                      <tr>
                        <th align="center" style={{width: '5%'}}>Sl<font color="red" /></th>
                        <th align="center" style={{width: '15%'}}>Product Code<font color="red" /></th>
                        <th align="center" style={{width: '20%'}}>Product Name<font color="red" /></th>
                        <th align="center" style={{width: '10%'}}>Quantity<font color="red">*</font></th>
                        <th align="center" style={{width: '10%'}}>Unit<font color="red" /></th>
                      </tr>
                    </thead>
                    <tbody><tr className="row_item" id="row_item" name="row_item">
                        <td> 
                          1
                        </td>
                        <td> 
                          <input id="productId" name="productId" type="hidden" className="form-control input-sm" placeholder="Product Code" autoComplete="off" defaultValue={ 1
 } /> RV-10s
                        </td> <td> 
                          <input id="productCode" name="productName" type="hidden" className="form-control input-sm" placeholder="Product Name" autoComplete="off" /> Rally Verve
                        </td>
                        <td> 
                          <div className="input-group">
                            <input id="quantity" name="quantity" type="text" className="form-control input-sm  rm_sales_form_padding" style={{textAlign: 'right'}} placeholder="Quantity" aria-describedby="basic-addon1" autoComplete="off" defaultValue={0} />
                          </div>
                        </td>
                        <td> 
                          <input id="uom" name="uom" type="hidden" className="form-control input-sm align-left" placeholder="Product Name" autoComplete="off" /> Stick
                        </td>
                      </tr>
                      <tr className="row_item" id="row_item" name="row_item">
                        <td> 
                          2
                        </td>
                        <td> 
                          <input id="productId" name="productId" type="hidden" className="form-control input-sm" placeholder="Product Code" autoComplete="off" defaultValue={ 2
 } /> RV-20s
                        </td> <td> 
                          <input id="productCode" name="productName" type="hidden" className="form-control input-sm" placeholder="Product Name" autoComplete="off" /> Rally Verve
                        </td>
                        <td> 
                          <div className="input-group">
                            <input id="quantity" name="quantity" type="text" className="form-control input-sm  rm_sales_form_padding" style={{textAlign: 'right'}} placeholder="Quantity" aria-describedby="basic-addon1" autoComplete="off" defaultValue={0} />
                          </div>
                        </td>
                        <td> 
                          <input id="uom" name="uom" type="hidden" className="form-control input-sm align-left" placeholder="Product Name" autoComplete="off" /> Stick
                        </td>
                      </tr>
                      <tr className="row_item" id="row_item" name="row_item">
                        <td> 
                          3
                        </td>
                        <td> 
                          <input id="productId" name="productId" type="hidden" className="form-control input-sm" placeholder="Product Code" autoComplete="off" defaultValue={ 3
 } /> Rexon-10s
                        </td> <td> 
                          <input id="productCode" name="productName" type="hidden" className="form-control input-sm" placeholder="Product Name" autoComplete="off" /> Rexon
                        </td>
                        <td> 
                          <div className="input-group">
                            <input id="quantity" name="quantity" type="text" className="form-control input-sm  rm_sales_form_padding" style={{textAlign: 'right'}} placeholder="Quantity" aria-describedby="basic-addon1" autoComplete="off" defaultValue={0} />
                          </div>
                        </td>
                        <td> 
                          <input id="uom" name="uom" type="hidden" className="form-control input-sm align-left" placeholder="Product Name" autoComplete="off" /> Stick
                        </td>
                      </tr>
                      <tr className="row_item" id="row_item" name="row_item">
                        <td> 
                          4
                        </td>
                        <td> 
                          <input id="productId" name="productId" type="hidden" className="form-control input-sm" placeholder="Product Code" autoComplete="off" defaultValue={ 4
 } /> MSB-10s
                        </td> <td> 
                          <input id="productCode" name="productName" type="hidden" className="form-control input-sm" placeholder="Product Name" autoComplete="off" /> Marise Special Blend
                        </td>
                        <td> 
                          <div className="input-group">
                            <input id="quantity" name="quantity" type="text" className="form-control input-sm  rm_sales_form_padding" style={{textAlign: 'right'}} placeholder="Quantity" aria-describedby="basic-addon1" autoComplete="off" defaultValue={0} />
                          </div>
                        </td>
                        <td> 
                          <input id="uom" name="uom" type="hidden" className="form-control input-sm align-left" placeholder="Product Name" autoComplete="off" /> Stick
                        </td>
                      </tr>
                      <tr className="row_item" id="row_item" name="row_item">
                        <td> 
                          5
                        </td>
                        <td> 
                          <input id="productId" name="productId" type="hidden" className="form-control input-sm" placeholder="Product Code" autoComplete="off" defaultValue={ 5
 } /> MSB-20s
                        </td> <td> 
                          <input id="productCode" name="productName" type="hidden" className="form-control input-sm" placeholder="Product Name" autoComplete="off" /> Marise Special Blend
                        </td>
                        <td> 
                          <div className="input-group">
                            <input id="quantity" name="quantity" type="text" className="form-control input-sm  rm_sales_form_padding" style={{textAlign: 'right'}} placeholder="Quantity" aria-describedby="basic-addon1" autoComplete="off" defaultValue={0} />
                          </div>
                        </td>
                        <td> 
                          <input id="uom" name="uom" type="hidden" className="form-control input-sm align-left" placeholder="Product Name" autoComplete="off" /> Stick
                        </td>
                      </tr>
                      <tr className="row_item" id="row_item" name="row_item">
                        <td> 
                          6
                        </td>
                        <td> 
                          <input id="productId" name="productId" type="hidden" className="form-control input-sm" placeholder="Product Code" autoComplete="off" defaultValue={ 6
 } /> SM-10s
                        </td> <td> 
                          <input id="productCode" name="productName" type="hidden" className="form-control input-sm" placeholder="Product Name" autoComplete="off" /> Sunmoon Kings
                        </td>
                        <td> 
                          <div className="input-group">
                            <input id="quantity" name="quantity" type="text" className="form-control input-sm  rm_sales_form_padding" style={{textAlign: 'right'}} placeholder="Quantity" aria-describedby="basic-addon1" autoComplete="off" defaultValue={0} />
                          </div>
                        </td>
                        <td> 
                          <input id="uom" name="uom" type="hidden" className="form-control input-sm align-left" placeholder="Product Name" autoComplete="off" /> Stick
                        </td>
                      </tr>
                      <tr className="row_item" id="row_item" name="row_item">
                        <td> 
                          7
                        </td>
                        <td> 
                          <input id="productId" name="productId" type="hidden" className="form-control input-sm" placeholder="Product Code" autoComplete="off" defaultValue={ 7
 } /> SAB
                        </td> <td> 
                          <input id="productCode" name="productName" type="hidden" className="form-control input-sm" placeholder="Product Name" autoComplete="off" /> Special Abul Bidi
                        </td>
                        <td> 
                          <div className="input-group">
                            <input id="quantity" name="quantity" type="text" className="form-control input-sm  rm_sales_form_padding" style={{textAlign: 'right'}} placeholder="Quantity" aria-describedby="basic-addon1" autoComplete="off" defaultValue={0} />
                          </div>
                        </td>
                        <td> 
                          <input id="uom" name="uom" type="hidden" className="form-control input-sm align-left" placeholder="Product Name" autoComplete="off" /> Stick
                        </td>
                      </tr>
                      <tr className="row_item" id="row_item" name="row_item">
                        <td> 
                          8
                        </td>
                        <td> 
                          <input id="productId" name="productId" type="hidden" className="form-control input-sm" placeholder="Product Code" autoComplete="off" defaultValue={ 8
 } /> EAB
                        </td> <td> 
                          <input id="productCode" name="productName" type="hidden" className="form-control input-sm" placeholder="Product Name" autoComplete="off" /> Existing Abul Bidi/ 42 No. Abul Bidi
                        </td>
                        <td> 
                          <div className="input-group">
                            <input id="quantity" name="quantity" type="text" className="form-control input-sm  rm_sales_form_padding" style={{textAlign: 'right'}} placeholder="Quantity" aria-describedby="basic-addon1" autoComplete="off" defaultValue={0} />
                          </div>
                        </td>
                        <td> 
                          <input id="uom" name="uom" type="hidden" className="form-control input-sm align-left" placeholder="Product Name" autoComplete="off" /> Stick
                        </td>
                      </tr>
                      <tr className="row_item" id="row_item" name="row_item">
                        <td> 
                          9
                        </td>
                        <td> 
                          <input id="productId" name="productId" type="hidden" className="form-control input-sm" placeholder="Product Code" autoComplete="off" defaultValue={ 9
 } /> FB
                        </td> <td> 
                          <input id="productCode" name="productName" type="hidden" className="form-control input-sm" placeholder="Product Name" autoComplete="off" /> Flame Box
                        </td>
                        <td> 
                          <div className="input-group">
                            <input id="quantity" name="quantity" type="text" className="form-control input-sm  rm_sales_form_padding" style={{textAlign: 'right'}} placeholder="Quantity" aria-describedby="basic-addon1" autoComplete="off" defaultValue={0} />
                          </div>
                        </td>
                        <td> 
                          <input id="uom" name="uom" type="hidden" className="form-control input-sm align-left" placeholder="Product Name" autoComplete="off" /> Dozen
                        </td>
                      </tr>
                      <tr className="row_item" id="row_item" name="row_item">
                        <td> 
                          10
                        </td>
                        <td> 
                          <input id="productId" name="productId" type="hidden" className="form-control input-sm" placeholder="Product Code" autoComplete="off" defaultValue={ 10
 } /> SL
                        </td> <td> 
                          <input id="productCode" name="productName" type="hidden" className="form-control input-sm" placeholder="Product Name" autoComplete="off" /> Salmon
                        </td>
                        <td> 
                          <div className="input-group">
                            <input id="quantity" name="quantity" type="text" className="form-control input-sm  rm_sales_form_padding" style={{textAlign: 'right'}} placeholder="Quantity" aria-describedby="basic-addon1" autoComplete="off" defaultValue={0} />
                          </div>
                        </td>
                        <td> 
                          <input id="uom" name="uom" type="hidden" className="form-control input-sm align-left" placeholder="Product Name" autoComplete="off" /> Dozen
                        </td>
                      </tr>
                    </tbody></table>
                </div>
                <table className="table">
                  <tbody><tr>
                      <td align="right" colSpan={4} style={{width: '86%', borderTop: 'none'}}>&nbsp;</td>
                      <td align="right" style={{width: '15%', borderTop: 'none'}}>
                        <input id="btnAddStockItem" className="btn btn-info" type="submit" defaultValue="Submit" name="submit" />
                      </td>
                    </tr>
                  </tbody></table>
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

export default Addstockitem;