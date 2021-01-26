import React from 'react';

const Productsales = () => {
    return (
        <div>
            <div id="page-wrapper"> 
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Sales Order </h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Sales Management</a></li>
          <li className="active">Product Sales</li>
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
            <div className="col-md-12"> 
              <form className="form-horizontal" name="invoiceGeneration" id="invoiceGeneration" method="POST" action="draftOrderSubmitData.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E&act=add" onsubmit="return fromDataSubmitValidation()">
                <div className="form-group row custom-bottom-margin-5x">
                  <div className="control-label col-sm-6 text-center"><h4 className="page-header">Customer Info</h4></div> 
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-2">Customer Code<font color="red">*</font></label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control input-sm" id="customerCode" name="customerCode" placeholder="Search by mobile number/ customer ID" required onkeyup="showCustomerInformation()" />
                    <input type="hidden" className="form-control input-sm" id="customerID" name="customerID" />
                    <input type="hidden" className="form-control input-sm" id="customerType" name="customerType" />
                    <span id="customerCodeErr" />
                  </div>
                  <label htmlFor="inputName4" className="control-label col-sm-2">Customer Name<font color="red">*</font></label>
                  <div className="col-sm-4">
                    <input type="text" readOnly="yes" className="form-control input-sm" id="customerName" name="customerName" />
                    <span id="customerIDErr" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-2">Remarks<font color="red" /></label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control input-sm" id="remarks" name="remarks" placeholder="Remarks" />  
                    <span id="remarksErr" />
                  </div>
                  <label htmlFor="inputName4" className="control-label col-sm-2">Sales Rep</label>
                  <div className="col-sm-4">
                    <select id="salesRepId" name="salesRepId" className="form-control input-sm customInput-sm" style={{height: 30}} required>
                      <option value>SELECT</option> <option value={1
}> Md. Sakil
                      </option>  <option value={2
}> Md. Akibur Rahman
                      </option>  <option value={3
}> Taher
                      </option>  <option value={4
}> Humayun Kobir
                      </option>  <option value={5
}> Ajom Uddin
                      </option>  <option value={6
}> Md. Akash
                      </option>  <option value={7
}> Md. Juwel
                      </option>  <option value={8
}> Md. Arafat
                      </option>  <option value={9
}> Md. Abdul Aziz
                      </option>  <option value={10
}> Amzad Hossen
                      </option>  <option value={11
}> Md. Sahed
                      </option>  <option value={12
}> Md. Saiful
                      </option>  <option value={13
}> Md. Abdur Rahman
                      </option>  <option value={14
}> Md. Arif Hossen
                      </option>  <option value={15
}> Md. Rakib 
                      </option>  <option value={16
}> Md. Tanvir 
                      </option>  <option value={17
}> Neshad
                      </option>  <option value={18
}> Md Shahadat Hosen
                      </option>  <option value={19
}> Mayen Uddin 
                      </option>  <option value={20
}> Abu Hurayra
                      </option>  <option value={21
}> Shahin
                      </option>  <option value={22
}> Md. Morshed
                      </option>  <option value={23
}> Md. Ershad
                      </option>  <option value={24
}> Nasir Mallik
                      </option>  <option value={25
}> Suffix IT
                      </option> 
                    </select>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputName4" className="control-label col-sm-2">Delivery Date<font color="red">*</font></label>
                  <div className="col-sm-4">
                    <div className="input-group">
                      <input name="deliveryDate" id="deliveryDate" type="text" className="form-control input-sm" placeholder="yyyy-mm-dd" required /> 
                      <span className="input-group-addon"><i className="icon-calender" /></span>
                    </div>
                    <span id="deliveryDateErr" />
                  </div>
                </div>
                <h4>Product Details</h4>
                <table id="invoiceDetails" className="table table-bordered color-table purple-table table-custom-padding-5x">
                  <thead>
                    <tr>
                      <th align="left" />
                      <th align="center" style={{width: '50%'}}>Product Code<font color="red">*</font></th>
                      <th align="center" style={{width: '10%'}}>Stock<font color="red" /></th>
                      <th align="center" style={{width: '10%'}}>Quantity<font color="red">*</font></th>
                      <th align="center" style={{width: '10%'}}>Selling Rate<font color="red">*</font></th>
                      <th align="center" style={{width: '10%'}}>Discount Tk.<font color="red" /></th>
                      <th align="center" style={{width: '10%'}}>Total Tk.<font color="red" /></th>
                    </tr>
                  </thead>
                  <tbody><tr className="row_item" id="row_item" name="row_item">
                      <td><input type="checkbox" name="chk" /></td>
                      <td>  
                        <input id="productId[0]" name="productId[0]" type="text" className="form-control input-sm" placeholder="Product Code" onkeypress="invoiceGenerationShowProductCodeForInvoice()" autoComplete="off" required />
                      </td>
                      <td> 
                        <div className="input-group">
                          <input id="stock[0]" name="stock[0]" type="text" className="form-control input-sm rm_sales_form_padding" aria-describedby="basic-addon1" readOnly="readonly" />
                          <span className="input-group-addon input-group-addonXX" name="stock-addon[0]" id="stock-addon[0]" />
                        </div>
                      </td>
                      <td> 
                        <div className="input-group">
                          <input id="quantity1UomId[0]" name="quantity1UomId[0]" type="hidden" /> 
                          <input id="exchangeUom[0]" name="exchangeUom[0]" type="hidden" />
                          <input id="quantity1[0]" name="quantity1[0]" type="text" className="form-control input-sm  rm_sales_form_padding" placeholder="Qty1" onkeyup="calculateItemTotalAmount(this.value);
                                              calculateTotalAmount()" aria-describedby="basic-addon1" autoComplete="off" />
                          <span className="input-group-addon input-group-addonXX" name="quantity1-addon[0]" id="quantity1-addon[0]" />
                        </div>
                      </td>
                      <td align="left">
                        <div className="input-group">                                                
                          <input id="buyingPrice[0]" name="buyingPrice[0]" type="hidden" className="form-control input-sm rm_sales_form_padding" placeholder aria-describedby="basic-addon1" readOnly="readonly" />
                          <span className="input-group-addon input-group-addonXX" name="buyingPrice-addon[0]" id="buyingPrice-addon[0]" />
                          <input id="sellingPrice[0]" name="sellingPrice[0]" type="text" readOnly="yes" className="form-control input-sm rm_sales_form_padding" placeholder="Price" />
                          <span className="input-group-addon input-group-addonXX" name="sellingPrice-addon[0]" id="sellingPrice-addon[0]" />
                        </div>
                      </td>
                      <td align="left">
                        <input name="itemDiscount[0]" id="itemDiscount[0]" defaultValue={0} className="form-control input-sm customInput-sm rm_sales_form_padding" type="text" style={{textAlign: 'right'}} size={100} readOnly="yes" />
                      </td>
                      <td align="left">
                        <input name="itemTotalAmount[0]" id="itemTotalAmount[0]" defaultValue={0} className="form-control input-sm customInput-sm rm_sales_form_padding" type="text" style={{textAlign: 'right'}} size={100} readOnly="yes" />
                        <input name="itemTotalAmount2[0]" id="itemTotalAmount2[0]" type="hidden" />
                      </td>
                    </tr>
                  </tbody></table>
                <input id="hide" name="hide" defaultValue={1} size={10} type="hidden" />
                {/*add row*/}
                <table className="tab">
                  <tbody><tr>
                      <td align="left"> 
                        <input id="addItemButton" onclick="addItemRow()" className="btn btn-sm btn-info" name="button" defaultValue="Add Item" type="button" disabled="disabled" />
                        &nbsp;
                      </td>
                      <td>
                        <input className="btn btn-sm btn-danger" name="button" onclick="deleteItemRow('invoiceDetails')" defaultValue="Delete Item" type="button" />
                      </td>
                    </tr>
                  </tbody></table>
                <table className="table color-table purple-table table-custom-padding-5x">
                  <tbody><tr>
                      <td align="right" colSpan={3} style={{width: '71%', borderTop: 'none'}}><label className="control-label">Sub Total </label></td>
                      <td align="left" style={{width: '15%', borderTop: 'none'}}>
                        <input name="subTotal" id="subTotal" defaultValue={0} className="form-control input-sm customInput-sm" type="text" readOnly="yes" style={{textAlign: 'right'}} size={100} />
                        <input name="subTotal2" id="subTotal2" type="hidden" />
                      </td>
                    </tr>
                    <tr>
                      <td align="right" colSpan={3} style={{width: '71%', borderTop: 'none'}}><label className="control-label">Discount </label></td>
                      <td align="left" style={{width: '15%', borderTop: 'none'}}>
                        <input className="form-control input-sm customInput-sm" type="text" style={{textAlign: 'right'}} size={100} name="discount" id="discount" onkeyup="calculateDiscountFreightPaymentAmount(this.value, 'discount');" defaultValue={0} />
                      </td>
                    </tr><tr>
                      <td align="right" colSpan={3} style={{width: '71%', borderTop: 'none'}}><label className="control-label">Freight </label></td>
                      <td align="left" style={{width: '15%', borderTop: 'none'}}>
                        <input className="form-control input-sm customInput-sm" type="text" style={{textAlign: 'right'}} size={100} name="freight" id="freight" onkeyup="calculateDiscountFreightPaymentAmount(this.value, 'freight');" defaultValue={0} />
                      </td>
                    </tr>
                    <tr>
                      <td align="right" colSpan={3} style={{width: '71%', borderTop: 'none'}}>
                        <label className="control-label">Grand Total </label>
                      </td>
                      <td align="left" style={{width: '15%', borderTop: 'none'}}>
                        <input name="grandTotal" id="grandTotal" type="text" defaultValue={0} size={100} readOnly="yes" className="form-control input-sm customInput-sm" style={{textAlign: 'right'}} />
                        <input name="grandTotal2" id="grandTotal2" type="hidden" />
                      </td>
                    </tr>
                    <tr>
                      <td align="right" colSpan={3} style={{width: '71%', borderTop: 'none'}}>
                        <label className="control-label">Sales Advance </label>
                      </td>
                      <td align="left" style={{width: '15%', borderTop: 'none'}}>
                        <input name="advanceAmount" id="advanceAmount" onkeyup="calculateDiscountFreightPaymentAmount(this.value, 'advanceAmount');" defaultValue={0.00} type="text" size={100} className="form-control input-sm customInput-sm" style={{textAlign: 'right'}} />
                      </td>
                    </tr>
                    <tr>
                      <td align="right" colSpan={3} style={{width: '71%', borderTop: 'none'}}>
                        <label className="control-label">Received Amount </label>
                      </td>
                      <td align="left" style={{width: '15%', borderTop: 'none'}}>
                        <input name="paymentAmount" id="paymentAmount" onkeyup="calculateDiscountFreightPaymentAmount(this.value, 'paymentAmount');" defaultValue={0.00} type="text" size={100} className="form-control input-sm customInput-sm" style={{textAlign: 'right'}} />
                      </td>
                    </tr>
                    <tr>
                      <td align="right" colSpan={3} style={{width: '71%', borderTop: 'none'}}>
                        <label className="control-label">Total Due/Balance</label>
                      </td>
                      <td align="left" style={{width: '15%', borderTop: 'none'}}>
                        <input name="totalDueBalance" id="totalDueBalance" defaultValue={0} type="text" size={100} readOnly="yes" className="form-control input-sm customInput-sm" style={{textAlign: 'right'}} />
                      </td>
                    </tr>
                  </tbody></table>
                <table className="table">
                  <tbody><tr>
                      <td align="right" colSpan={4} style={{width: '86%', borderTop: 'none'}}>&nbsp;</td>
                      <td align="right" style={{width: '15%', borderTop: 'none'}}>
                        <input className="btn btn-info" type="submit" defaultValue="Submit" name="submit" />
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

export default Productsales;