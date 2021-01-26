import React from 'react';

const AddRoles = () => {
    return (
        <div>

<div id="page-wrapper" style={{minHeight: 596}}>
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Add New Role</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">User Management</a></li>
          <li className="active">Add Role</li>
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
          <form name="addrole" id="addrole" method="post" action="syRoleAddSubmitData.jsp?sessionid=FC07BFB1D7587F227D4BFD7B4A97920E" onsubmit="return dataValidate()" className="form-horizontal">
            <div className="form-group row custom-bottom-margin-5x">
              <label htmlFor="roleId" className="control-label col-sm-3">Role ID</label>
              <div className="col-sm-4">
                <input type="text" id="roleId" name="roleId" placeholder="Role ID" className="form-control input-sm" required />
                <div id="roleIdErr" className="help-block with-errors" />
              </div>
            </div>
            <div className="form-group row custom-bottom-margin-5x">
              <label htmlFor="roleName" className="control-label col-sm-3">Role Title</label>
              <div className="col-sm-4">
                <input type="text" id="roleName" name="roleName" placeholder="Role Title" className="form-control input-sm" required />
                <div id="roleNameErr" className="help-block with-errors" />
              </div>
            </div>
            <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/multiselect/css/multi-select.css" rel="stylesheet" type="text/css" />
            <div className="form-group row custom-bottom-margin-5x">
              <div className="col-sm-8 offset-2 systemRoleXcon">
                <h4 className="text-success text-center1">Note: You need to choose complete hierarchy (parents) to get any action works.</h4>
                <select className="form-control customInput-sm" id="public-methods" name="public-methods" multiple style={{position: 'absolute', left: '-9999px'}}>
                  <option value={1
}>1:&nbsp;Dashboard
                  </option>
                  <option value="1.01
">1.01:&nbsp;Demographical
                  </option>
                  <option value="1.02
">1.02:&nbsp;Minimalistic
                  </option>
                  <option value="1.03
">1.03:&nbsp;Analitical
                  </option>
                  <option value={10
}>10:&nbsp;Customer
                  </option>
                  <option value="10.01
">10.01:&nbsp;Add Customer
                  </option>
                  <option value="10.02
">10.02:&nbsp;Customer List
                  </option>
                  <option value={11
}>11:&nbsp;Market Management
                  </option>
                  <option value="11.01
">11.01:&nbsp;Add Sales Associate
                  </option>
                  <option value="11.02
">11.02:&nbsp;Manage Sales Associate
                  </option>
                  <option value="11.03
">11.03:&nbsp;Manage Zone
                  </option>
                  <option value="11.06
">11.06:&nbsp;Set Marketwise Target
                  </option>
                  <option value="11.07
">11.07:&nbsp;Set SR Daily Target
                  </option>
                  <option value="11.08
">11.08:&nbsp;Daily Sales Out Request
                  </option>
                  <option value="11.09
">11.09:&nbsp;Set SR Monthly Target
                  </option>
                  <option value="11.10
">11.10:&nbsp;Daily Sales Out Return
                  </option>
                  <option value={12
}>12:&nbsp;Gift Management
                  </option>
                  <option value="12.01
">12.01:&nbsp;Set SR Daily Gift Requsition
                  </option>
                  <option value="12.02
">12.02:&nbsp;Daily Gift Out Request
                  </option>
                  <option value="12.03
">12.03:&nbsp;Daily Gift Out Return
                  </option>
                  <option value="12.04
">12.04:&nbsp;Gift List
                  </option>
                  <option value={2
}>2:&nbsp;Product Management
                  </option>
                  <option value="2.04
">2.04:&nbsp;Add Product 
                  </option>
                  <option value="2.06
">2.06:&nbsp;Product List
                  </option>
                  <option value="2.07
">2.07:&nbsp;Product Category List
                  </option>
                  <option value={3
}>3:&nbsp;Inventory  Management
                  </option>
                  <option value="3.01
">3.01:&nbsp;Manage Stock
                  </option>
                  <option value="3.02
">3.02:&nbsp;Add Stock Item
                  </option>
                  <option value="3.04
">3.04:&nbsp;Stock Report
                  </option>
                  <option value="3.05
">3.05:&nbsp;Inventory Report
                  </option>
                  <option value={4
}>4:&nbsp;Sales Management
                  </option>
                  <option value="4.01
">4.01:&nbsp;Product Sales
                  </option>
                  <option value="4.03
">4.03:&nbsp;Invoice List
                  </option>
                  <option value="4.05
">4.05:&nbsp;Sales Return List
                  </option>
                  <option value={5
}>5:&nbsp;Rate Management
                  </option>
                  <option value="5.01
">5.01:&nbsp;Manage Rate
                  </option>
                  <option value="5.02
">5.02:&nbsp;Manage Discount
                  </option>
                  <option value={6
}>6:&nbsp;Finance &amp; Account
                  </option>
                  <option value="6.01
">6.01:&nbsp;Manage Voucher
                  </option>
                  <option value="6.02
">6.02:&nbsp;Manage Chart of Account
                  </option>
                  <option value="6.04
">6.04:&nbsp;Edit Voucher
                  </option>
                  <option value={7
}>7:&nbsp;Report
                  </option>
                  <option value="7.01
">7.01:&nbsp;Ledger
                  </option>
                  <option value="7.02
">7.02:&nbsp;Voucher
                  </option>
                  <option value="7.03
">7.03:&nbsp;Chart of Accounts
                  </option>
                  <option value="7.04
">7.04:&nbsp;Cash Book
                  </option>
                  <option value="7.05
">7.05:&nbsp;Bank Book
                  </option>
                  <option value="7.06
">7.06:&nbsp;Trial Balance
                  </option>
                  <option value="7.07
">7.07:&nbsp;Balance Sheet
                  </option>
                  <option value="7.08
">7.08:&nbsp;Income &amp; Expenditure
                  </option>
                  <option value="7.09
">7.09:&nbsp;Receivable Statement
                  </option>
                  <option value="7.10
">7.10:&nbsp;Invoice wise Sales Statement
                  </option>
                  <option value="7.11
">7.11:&nbsp;Market wise Customer List
                  </option>
                  <option value="7.12
">7.12:&nbsp;Product wise Sales Statement
                  </option>
                  <option value="7.13
">7.13:&nbsp;Daily Sales Statement All (DSS)
                  </option>
                  <option value="7.14
">7.14:&nbsp;Sales Bulletin
                  </option>
                  <option value="7.15
">7.15:&nbsp;Sales Analysis
                  </option>
                  <option value="7.16
">7.16:&nbsp;SR Daily Sales Statement (DSS)
                  </option>
                  <option value="7.17
">7.17:&nbsp;Summary of Daily Sales Statement
                  </option>
                  <option value="7.18
">7.18:&nbsp;Salesman Daily Activity Format (SDAF)
                  </option>
                  <option value="7.19
">7.19:&nbsp;Daily Route Visit Report
                  </option>
                  <option value="7.20
">7.20:&nbsp;Summary of Visiting Status
                  </option>
                  <option value={9
}>9:&nbsp;User Management
                  </option>
                  <option value="9.01
">9.01:&nbsp;Users
                  </option>
                  <option value="9.02
">9.02:&nbsp;Add User
                  </option>
                  <option value="9.03
">9.03:&nbsp;Roles
                  </option>
                  <option value="9.04
">9.04:&nbsp;Add Roles
                  </option>
                  <option value="9.07
">9.07:&nbsp;Activities
                  </option>
                  <option value="9.08
">9.08:&nbsp;User Audit Trail
                  </option>
                  <option value="9.09
">9.09:&nbsp;User and Roles
                  </option>
                  <option value={997
}>997:&nbsp;System Setting
                  </option>
                  <option value={999
}>999:&nbsp;Logout
                  </option>
                </select><div className="ms-container" id="ms-public-methods"><div className="ms-selectable"><div className="activityHeader">Available Role Activity</div><ul className="ms-list" tabIndex={-1}><li className="ms-elem-selectable" id="1529-selectable"><span>1:&nbsp;Dashboard
                        </span></li><li className="ms-elem-selectable" id="46670572-selectable"><span>1.01:&nbsp;Demographical
                        </span></li><li className="ms-elem-selectable" id="46670603-selectable"><span>1.02:&nbsp;Minimalistic
                        </span></li><li className="ms-elem-selectable" id="46670634-selectable"><span>1.03:&nbsp;Analitical
                        </span></li><li className="ms-elem-selectable" id="48587-selectable"><span>10:&nbsp;Customer
                        </span></li><li className="ms-elem-selectable" id="1448575450-selectable"><span>10.01:&nbsp;Add Customer
                        </span></li><li className="ms-elem-selectable ms-hover ms-selected" id="1448575481-selectable" style={{display: 'none'}}><span>10.02:&nbsp;Customer List
                        </span></li><li className="ms-elem-selectable" id="48618-selectable"><span>11:&nbsp;Market Management
                        </span></li><li className="ms-elem-selectable ms-hover ms-selected" id="1449498971-selectable" style={{display: 'none'}}><span>11.01:&nbsp;Add Sales Associate
                        </span></li><li className="ms-elem-selectable ms-hover" id="1449499002-selectable"><span>11.02:&nbsp;Manage Sales Associate
                        </span></li><li className="ms-elem-selectable ms-hover ms-selected" id="1449499033-selectable" style={{display: 'none'}}><span>11.03:&nbsp;Manage Zone
                        </span></li><li className="ms-elem-selectable" id="1449499126-selectable"><span>11.06:&nbsp;Set Marketwise Target
                        </span></li><li className="ms-elem-selectable ms-hover ms-selected" id="1449499157-selectable" style={{display: 'none'}}><span>11.07:&nbsp;Set SR Daily Target
                        </span></li><li className="ms-elem-selectable" id="1449499188-selectable"><span>11.08:&nbsp;Daily Sales Out Request
                        </span></li><li className="ms-elem-selectable" id="1449499219-selectable"><span>11.09:&nbsp;Set SR Monthly Target
                        </span></li><li className="ms-elem-selectable" id="1449499901-selectable"><span>11.10:&nbsp;Daily Sales Out Return
                        </span></li><li className="ms-elem-selectable" id="48649-selectable"><span>12:&nbsp;Gift Management
                        </span></li><li className="ms-elem-selectable" id="1450422492-selectable"><span>12.01:&nbsp;Set SR Daily Gift Requsition
                        </span></li><li className="ms-elem-selectable" id="1450422523-selectable"><span>12.02:&nbsp;Daily Gift Out Request
                        </span></li><li className="ms-elem-selectable ms-hover ms-selected" id="1450422554-selectable" style={{display: 'none'}}><span>12.03:&nbsp;Daily Gift Out Return
                        </span></li><li className="ms-elem-selectable" id="1450422585-selectable"><span>12.04:&nbsp;Gift List
                        </span></li><li className="ms-elem-selectable" id="1560-selectable"><span>2:&nbsp;Product Management
                        </span></li><li className="ms-elem-selectable" id="47594186-selectable"><span>2.04:&nbsp;Add Product 
                        </span></li><li className="ms-elem-selectable" id="47594248-selectable"><span>2.06:&nbsp;Product List
                        </span></li><li className="ms-elem-selectable" id="47594279-selectable"><span>2.07:&nbsp;Product Category List
                        </span></li><li className="ms-elem-selectable" id="1591-selectable"><span>3:&nbsp;Inventory  Management
                        </span></li><li className="ms-elem-selectable" id="48517614-selectable"><span>3.01:&nbsp;Manage Stock
                        </span></li><li className="ms-elem-selectable" id="48517645-selectable"><span>3.02:&nbsp;Add Stock Item
                        </span></li><li className="ms-elem-selectable" id="48517707-selectable"><span>3.04:&nbsp;Stock Report
                        </span></li><li className="ms-elem-selectable" id="48517738-selectable"><span>3.05:&nbsp;Inventory Report
                        </span></li><li className="ms-elem-selectable" id="1622-selectable"><span>4:&nbsp;Sales Management
                        </span></li><li className="ms-elem-selectable" id="49441135-selectable"><span>4.01:&nbsp;Product Sales
                        </span></li><li className="ms-elem-selectable" id="49441197-selectable"><span>4.03:&nbsp;Invoice List
                        </span></li><li className="ms-elem-selectable" id="49441259-selectable"><span>4.05:&nbsp;Sales Return List
                        </span></li><li className="ms-elem-selectable" id="1653-selectable"><span>5:&nbsp;Rate Management
                        </span></li><li className="ms-elem-selectable" id="50364656-selectable"><span>5.01:&nbsp;Manage Rate
                        </span></li><li className="ms-elem-selectable" id="50364687-selectable"><span>5.02:&nbsp;Manage Discount
                        </span></li><li className="ms-elem-selectable" id="1684-selectable"><span>6:&nbsp;Finance &amp; Account
                        </span></li><li className="ms-elem-selectable" id="51288177-selectable"><span>6.01:&nbsp;Manage Voucher
                        </span></li><li className="ms-elem-selectable" id="51288208-selectable"><span>6.02:&nbsp;Manage Chart of Account
                        </span></li><li className="ms-elem-selectable" id="51288270-selectable"><span>6.04:&nbsp;Edit Voucher
                        </span></li><li className="ms-elem-selectable" id="1715-selectable"><span>7:&nbsp;Report
                        </span></li><li className="ms-elem-selectable" id="52211698-selectable"><span>7.01:&nbsp;Ledger
                        </span></li><li className="ms-elem-selectable" id="52211729-selectable"><span>7.02:&nbsp;Voucher
                        </span></li><li className="ms-elem-selectable" id="52211760-selectable"><span>7.03:&nbsp;Chart of Accounts
                        </span></li><li className="ms-elem-selectable" id="52211791-selectable"><span>7.04:&nbsp;Cash Book
                        </span></li><li className="ms-elem-selectable" id="52211822-selectable"><span>7.05:&nbsp;Bank Book
                        </span></li><li className="ms-elem-selectable" id="52211853-selectable"><span>7.06:&nbsp;Trial Balance
                        </span></li><li className="ms-elem-selectable" id="52211884-selectable"><span>7.07:&nbsp;Balance Sheet
                        </span></li><li className="ms-elem-selectable" id="52211915-selectable"><span>7.08:&nbsp;Income &amp; Expenditure
                        </span></li><li className="ms-elem-selectable" id="52211946-selectable"><span>7.09:&nbsp;Receivable Statement
                        </span></li><li className="ms-elem-selectable" id="52212628-selectable"><span>7.10:&nbsp;Invoice wise Sales Statement
                        </span></li><li className="ms-elem-selectable" id="52212659-selectable"><span>7.11:&nbsp;Market wise Customer List
                        </span></li><li className="ms-elem-selectable" id="52212690-selectable"><span>7.12:&nbsp;Product wise Sales Statement
                        </span></li><li className="ms-elem-selectable" id="52212721-selectable"><span>7.13:&nbsp;Daily Sales Statement All (DSS)
                        </span></li><li className="ms-elem-selectable" id="52212752-selectable"><span>7.14:&nbsp;Sales Bulletin
                        </span></li><li className="ms-elem-selectable" id="52212783-selectable"><span>7.15:&nbsp;Sales Analysis
                        </span></li><li className="ms-elem-selectable" id="52212814-selectable"><span>7.16:&nbsp;SR Daily Sales Statement (DSS)
                        </span></li><li className="ms-elem-selectable" id="52212845-selectable"><span>7.17:&nbsp;Summary of Daily Sales Statement
                        </span></li><li className="ms-elem-selectable" id="52212876-selectable"><span>7.18:&nbsp;Salesman Daily Activity Format (SDAF)
                        </span></li><li className="ms-elem-selectable" id="52212907-selectable"><span>7.19:&nbsp;Daily Route Visit Report
                        </span></li><li className="ms-elem-selectable" id="52213589-selectable"><span>7.20:&nbsp;Summary of Visiting Status
                        </span></li><li className="ms-elem-selectable" id="1777-selectable"><span>9:&nbsp;User Management
                        </span></li><li className="ms-elem-selectable" id="54058740-selectable"><span>9.01:&nbsp;Users
                        </span></li><li className="ms-elem-selectable" id="54058771-selectable"><span>9.02:&nbsp;Add User
                        </span></li><li className="ms-elem-selectable" id="54058802-selectable"><span>9.03:&nbsp;Roles
                        </span></li><li className="ms-elem-selectable" id="54058833-selectable"><span>9.04:&nbsp;Add Roles
                        </span></li><li className="ms-elem-selectable" id="54058926-selectable"><span>9.07:&nbsp;Activities
                        </span></li><li className="ms-elem-selectable" id="54058957-selectable"><span>9.08:&nbsp;User Audit Trail
                        </span></li><li className="ms-elem-selectable" id="54058988-selectable"><span>9.09:&nbsp;User and Roles
                        </span></li><li className="ms-elem-selectable" id="1754579-selectable"><span>997:&nbsp;System Setting
                        </span></li><li className="ms-elem-selectable" id="1754641-selectable"><span>999:&nbsp;Logout
                        </span></li></ul></div><div className="ms-selection"><div className="activityHeader">Selected Role Activity</div><ul className="ms-list" tabIndex={-1}><li className="ms-elem-selection" id="1529-selection" style={{display: 'none'}}><span>1:&nbsp;Dashboard
                        </span></li><li className="ms-elem-selection" id="46670572-selection" style={{display: 'none'}}><span>1.01:&nbsp;Demographical
                        </span></li><li className="ms-elem-selection" id="46670603-selection" style={{display: 'none'}}><span>1.02:&nbsp;Minimalistic
                        </span></li><li className="ms-elem-selection" id="46670634-selection" style={{display: 'none'}}><span>1.03:&nbsp;Analitical
                        </span></li><li className="ms-elem-selection" id="48587-selection" style={{display: 'none'}}><span>10:&nbsp;Customer
                        </span></li><li className="ms-elem-selection" id="1448575450-selection" style={{display: 'none'}}><span>10.01:&nbsp;Add Customer
                        </span></li><li className="ms-elem-selection ms-selected" id="1448575481-selection" style={{}}><span>10.02:&nbsp;Customer List
                        </span></li><li className="ms-elem-selection" id="48618-selection" style={{display: 'none'}}><span>11:&nbsp;Market Management
                        </span></li><li className="ms-elem-selection ms-selected" id="1449498971-selection" style={{}}><span>11.01:&nbsp;Add Sales Associate
                        </span></li><li className="ms-elem-selection" id="1449499002-selection" style={{display: 'none'}}><span>11.02:&nbsp;Manage Sales Associate
                        </span></li><li className="ms-elem-selection ms-selected" id="1449499033-selection" style={{}}><span>11.03:&nbsp;Manage Zone
                        </span></li><li className="ms-elem-selection" id="1449499126-selection" style={{display: 'none'}}><span>11.06:&nbsp;Set Marketwise Target
                        </span></li><li className="ms-elem-selection ms-selected" id="1449499157-selection" style={{}}><span>11.07:&nbsp;Set SR Daily Target
                        </span></li><li className="ms-elem-selection" id="1449499188-selection" style={{display: 'none'}}><span>11.08:&nbsp;Daily Sales Out Request
                        </span></li><li className="ms-elem-selection" id="1449499219-selection" style={{display: 'none'}}><span>11.09:&nbsp;Set SR Monthly Target
                        </span></li><li className="ms-elem-selection" id="1449499901-selection" style={{display: 'none'}}><span>11.10:&nbsp;Daily Sales Out Return
                        </span></li><li className="ms-elem-selection" id="48649-selection" style={{display: 'none'}}><span>12:&nbsp;Gift Management
                        </span></li><li className="ms-elem-selection" id="1450422492-selection" style={{display: 'none'}}><span>12.01:&nbsp;Set SR Daily Gift Requsition
                        </span></li><li className="ms-elem-selection" id="1450422523-selection" style={{display: 'none'}}><span>12.02:&nbsp;Daily Gift Out Request
                        </span></li><li className="ms-elem-selection ms-selected" id="1450422554-selection" style={{}}><span>12.03:&nbsp;Daily Gift Out Return
                        </span></li><li className="ms-elem-selection" id="1450422585-selection" style={{display: 'none'}}><span>12.04:&nbsp;Gift List
                        </span></li><li className="ms-elem-selection" id="1560-selection" style={{display: 'none'}}><span>2:&nbsp;Product Management
                        </span></li><li className="ms-elem-selection" id="47594186-selection" style={{display: 'none'}}><span>2.04:&nbsp;Add Product 
                        </span></li><li className="ms-elem-selection" id="47594248-selection" style={{display: 'none'}}><span>2.06:&nbsp;Product List
                        </span></li><li className="ms-elem-selection" id="47594279-selection" style={{display: 'none'}}><span>2.07:&nbsp;Product Category List
                        </span></li><li className="ms-elem-selection" id="1591-selection" style={{display: 'none'}}><span>3:&nbsp;Inventory  Management
                        </span></li><li className="ms-elem-selection" id="48517614-selection" style={{display: 'none'}}><span>3.01:&nbsp;Manage Stock
                        </span></li><li className="ms-elem-selection" id="48517645-selection" style={{display: 'none'}}><span>3.02:&nbsp;Add Stock Item
                        </span></li><li className="ms-elem-selection" id="48517707-selection" style={{display: 'none'}}><span>3.04:&nbsp;Stock Report
                        </span></li><li className="ms-elem-selection" id="48517738-selection" style={{display: 'none'}}><span>3.05:&nbsp;Inventory Report
                        </span></li><li className="ms-elem-selection" id="1622-selection" style={{display: 'none'}}><span>4:&nbsp;Sales Management
                        </span></li><li className="ms-elem-selection" id="49441135-selection" style={{display: 'none'}}><span>4.01:&nbsp;Product Sales
                        </span></li><li className="ms-elem-selection" id="49441197-selection" style={{display: 'none'}}><span>4.03:&nbsp;Invoice List
                        </span></li><li className="ms-elem-selection" id="49441259-selection" style={{display: 'none'}}><span>4.05:&nbsp;Sales Return List
                        </span></li><li className="ms-elem-selection" id="1653-selection" style={{display: 'none'}}><span>5:&nbsp;Rate Management
                        </span></li><li className="ms-elem-selection" id="50364656-selection" style={{display: 'none'}}><span>5.01:&nbsp;Manage Rate
                        </span></li><li className="ms-elem-selection" id="50364687-selection" style={{display: 'none'}}><span>5.02:&nbsp;Manage Discount
                        </span></li><li className="ms-elem-selection" id="1684-selection" style={{display: 'none'}}><span>6:&nbsp;Finance &amp; Account
                        </span></li><li className="ms-elem-selection" id="51288177-selection" style={{display: 'none'}}><span>6.01:&nbsp;Manage Voucher
                        </span></li><li className="ms-elem-selection" id="51288208-selection" style={{display: 'none'}}><span>6.02:&nbsp;Manage Chart of Account
                        </span></li><li className="ms-elem-selection" id="51288270-selection" style={{display: 'none'}}><span>6.04:&nbsp;Edit Voucher
                        </span></li><li className="ms-elem-selection" id="1715-selection" style={{display: 'none'}}><span>7:&nbsp;Report
                        </span></li><li className="ms-elem-selection" id="52211698-selection" style={{display: 'none'}}><span>7.01:&nbsp;Ledger
                        </span></li><li className="ms-elem-selection" id="52211729-selection" style={{display: 'none'}}><span>7.02:&nbsp;Voucher
                        </span></li><li className="ms-elem-selection" id="52211760-selection" style={{display: 'none'}}><span>7.03:&nbsp;Chart of Accounts
                        </span></li><li className="ms-elem-selection" id="52211791-selection" style={{display: 'none'}}><span>7.04:&nbsp;Cash Book
                        </span></li><li className="ms-elem-selection" id="52211822-selection" style={{display: 'none'}}><span>7.05:&nbsp;Bank Book
                        </span></li><li className="ms-elem-selection" id="52211853-selection" style={{display: 'none'}}><span>7.06:&nbsp;Trial Balance
                        </span></li><li className="ms-elem-selection" id="52211884-selection" style={{display: 'none'}}><span>7.07:&nbsp;Balance Sheet
                        </span></li><li className="ms-elem-selection" id="52211915-selection" style={{display: 'none'}}><span>7.08:&nbsp;Income &amp; Expenditure
                        </span></li><li className="ms-elem-selection" id="52211946-selection" style={{display: 'none'}}><span>7.09:&nbsp;Receivable Statement
                        </span></li><li className="ms-elem-selection" id="52212628-selection" style={{display: 'none'}}><span>7.10:&nbsp;Invoice wise Sales Statement
                        </span></li><li className="ms-elem-selection" id="52212659-selection" style={{display: 'none'}}><span>7.11:&nbsp;Market wise Customer List
                        </span></li><li className="ms-elem-selection" id="52212690-selection" style={{display: 'none'}}><span>7.12:&nbsp;Product wise Sales Statement
                        </span></li><li className="ms-elem-selection" id="52212721-selection" style={{display: 'none'}}><span>7.13:&nbsp;Daily Sales Statement All (DSS)
                        </span></li><li className="ms-elem-selection" id="52212752-selection" style={{display: 'none'}}><span>7.14:&nbsp;Sales Bulletin
                        </span></li><li className="ms-elem-selection" id="52212783-selection" style={{display: 'none'}}><span>7.15:&nbsp;Sales Analysis
                        </span></li><li className="ms-elem-selection" id="52212814-selection" style={{display: 'none'}}><span>7.16:&nbsp;SR Daily Sales Statement (DSS)
                        </span></li><li className="ms-elem-selection" id="52212845-selection" style={{display: 'none'}}><span>7.17:&nbsp;Summary of Daily Sales Statement
                        </span></li><li className="ms-elem-selection" id="52212876-selection" style={{display: 'none'}}><span>7.18:&nbsp;Salesman Daily Activity Format (SDAF)
                        </span></li><li className="ms-elem-selection" id="52212907-selection" style={{display: 'none'}}><span>7.19:&nbsp;Daily Route Visit Report
                        </span></li><li className="ms-elem-selection" id="52213589-selection" style={{display: 'none'}}><span>7.20:&nbsp;Summary of Visiting Status
                        </span></li><li className="ms-elem-selection" id="1777-selection" style={{display: 'none'}}><span>9:&nbsp;User Management
                        </span></li><li className="ms-elem-selection" id="54058740-selection" style={{display: 'none'}}><span>9.01:&nbsp;Users
                        </span></li><li className="ms-elem-selection" id="54058771-selection" style={{display: 'none'}}><span>9.02:&nbsp;Add User
                        </span></li><li className="ms-elem-selection" id="54058802-selection" style={{display: 'none'}}><span>9.03:&nbsp;Roles
                        </span></li><li className="ms-elem-selection" id="54058833-selection" style={{display: 'none'}}><span>9.04:&nbsp;Add Roles
                        </span></li><li className="ms-elem-selection" id="54058926-selection" style={{display: 'none'}}><span>9.07:&nbsp;Activities
                        </span></li><li className="ms-elem-selection" id="54058957-selection" style={{display: 'none'}}><span>9.08:&nbsp;User Audit Trail
                        </span></li><li className="ms-elem-selection" id="54058988-selection" style={{display: 'none'}}><span>9.09:&nbsp;User and Roles
                        </span></li><li className="ms-elem-selection" id="1754579-selection" style={{display: 'none'}}><span>997:&nbsp;System Setting
                        </span></li><li className="ms-elem-selection" id="1754641-selection" style={{display: 'none'}}><span>999:&nbsp;Logout
                        </span></li></ul></div></div>
                <div className="button-box m-t-20"> 
                  <a id="select-all" className="btn btn-danger btn-outline" href="#">select all</a> 
                  <a id="deselect-all" className="btn btn-info btn-outline" href="#">deselect all</a> 
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-2 offset-5 text-center1">
                <br />
                <input type="hidden" id="entryUserID" name="entryUserID" defaultValue />
                <input type="hidden" id="entryTerm" name="entryTerm" defaultValue />
                <input type="hidden" id="entryIP" name="entryIP" defaultValue />
                <input type="hidden" id="userstat" name="userstat" defaultValue={1} />
                <input type="hidden" name="rowcount" id="rowcount" defaultValue={72
} />
                <input type="submit" defaultValue="Submit" name="submit" className="btn btn-info" />
              </div>
            </div>
          </form>
        </div>
        {/* /.white-box */}
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

export default AddRoles;