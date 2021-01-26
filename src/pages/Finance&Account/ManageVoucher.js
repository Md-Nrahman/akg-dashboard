import React from 'react';

const ManageVoucher = () => {
    return (
        <div>
            <div id="page-wrapper"> 
  {/* /.container-fluid */}
  <div className="container-fluid">        
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Voucher Posting</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Finance &amp; Account</a></li>
          <li className="active">Voucher Posting</li>
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
            <div className="col-md-12"> 
              <form className="form-horizontal" name="addVoucher" id="addVoucher" method="POST" action="http://salesapp.suffixit.com:8756/AKTWEB/VoucherEntry?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E
&act=add" onsubmit="return dataValidate() && DebitCreditCheck()">
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Voucher Type</label>
                  <div className="col-sm-4">
                    <select id="voucherType" name="voucherType" className="form-control input-sm customInput-sm" style={{height: 30}} required>
                      <option value>SELECT</option>
                      <option value="CP">CP|CASH PAYMENT</option>
                      <option value="CR">CR|CASH RECEIVE</option>
                      <option value="BP">BP|BANK PAYMENT</option>
                      <option value="BR">BR|BANK RECEIVE</option>
                      <option value="JV">JV|JOURNAL VOUCHER</option>
                    </select>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  {/* Date picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3">Voucher Date</label>
                  <div className="col-sm-4">
                    <div className="input-group">
                      <input name="voucherDate" id="voucherDate" type="text" className="form-control input-sm" placeholder="yyyy-mm-dd" required /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                    </div>
                    <div className="help-block with-errors" />
                  </div>
                  {/* Date Picker Plugin JavaScript */}
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Description</label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control input-sm" id="description" name="description" maxLength={350} placeholder="Voucher description" required />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <h4 className="list-group-item-heading">Voucher Details</h4>
                <table id="invoiceDetails" className="table table-bordered color-table purple-table table-custom-padding-5x">
                  <thead>
                    <tr>
                      <th align="left" />
                      <th align="center" style={{width: '35%'}}>Account Head<font color="red">*</font></th>
                      <th align="center" style={{width: '20%'}}>Payee/ Received By<font color="red" /></th>
                      <th align="center" style={{width: '15%'}}>Ref./Cheque No.<font color="red" /></th>
                      <th align="center" style={{width: '15%'}}>Debit (Tk.)<font color="red">*</font></th>
                      <th align="center" style={{width: '15%'}}>Credit (Tk.)<font color="red">*</font></th>
                    </tr>
                  </thead>
                  <tbody><tr className="row_item" id="row_item" name="row_item">
                      <td><input type="checkbox" name="chk" /></td>
                      <td>  
                        <input id="accountHead[0]" name="accountHead[0]" type="text" className="form-control input-sm" placeholder="GL Code" onkeypress="aCHeadAutocomplete()" autoComplete="off" required />
                        <input type="hidden" id="accountHeadId[0]" name="accountHeadId[0]" />
                      </td><td>  
                        <input type="text" id="payeeId[0]" name="payeeId[0]" maxLength={45} className="form-control input-sm customInput-sm" />
                      </td>
                      <td align="left">
                        <input name="chequeNo[0]" id="chequeNo[0]" type="text" maxLength={45} size={100} className="form-control input-sm customInput-sm" style={{textAlign: 'left'}} />
                      </td>
                      <td align="left">
                        <input name="debit[0]" id="debit[0]" onkeyup="showDebitOpt(this.value);
                                              checkDebitCreditOpt();" defaultValue={0} type="text" size={100} className="form-control input-sm customInput-sm" style={{textAlign: 'right'}} />
                      </td>
                      <td align="left">
                        <input name="credit[0]" id="credit[0]" onkeyup="showCreditOpt(this.value);
                                              checkDebitCreditOpt();" defaultValue={0} type="text" size={100} className="form-control input-sm customInput-sm" style={{textAlign: 'right'}} />
                      </td>
                    </tr>
                  </tbody></table>
                <input id="hide" name="hide" defaultValue={1} size={10} type="hidden" />
                {/*add row*/}
                <table className="tab">
                  <tbody><tr>
                      <td align="left"> 
                        <input className="btn btn-sm btn-info" name="button" onclick="addItemRow();" defaultValue="Add Item" type="button" />
                        &nbsp;
                      </td>
                      <td>
                        <input name="button" onclick="deleteItemRow('invoiceDetails')" defaultValue="Delete Item" type="button" className="btn btn-sm btn-danger" />
                      </td>
                    </tr>
                  </tbody></table>
                <table className="table">
                  <tbody><tr>
                      <td align="right" colSpan={3} style={{width: '71%', borderTop: 'none'}}><label className="control-label">Total :</label></td>
                      <td align="left" style={{width: '15%', borderTop: 'none'}}>
                        <input name="debitTotal" id="debitTotal" defaultValue={0} type="text" readOnly="yes" size={100} className="form-control input-sm customInput-sm" style={{textAlign: 'right'}} />
                      </td>
                      <td align="left" style={{width: '15%', borderTop: 'none'}}>
                        <input name="creditTotal" id="creditTotal" defaultValue={0} type="text" readOnly="yes" size={100} className="form-control input-sm customInput-sm" style={{textAlign: 'right'}} />
                      </td>
                    </tr>
                  </tbody></table>
                <table className="table">
                  <tbody><tr>
                      <td align="right" colSpan={4} style={{width: '86%', borderTop: 'none'}}>&nbsp;</td>
                      <td align="right" style={{width: '15%', borderTop: 'none'}}>
                        <input id="btnSubmit" className="btn btn-info" type="submit" defaultValue="Submit" name="submit" />
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

export default ManageVoucher;