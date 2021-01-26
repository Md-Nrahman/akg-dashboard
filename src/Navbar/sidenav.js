import React from 'react';
import {Link} from 'react-router-dom';
const Sidenav=()=>{
    return(
        <div>
              <div className="navbar-default sidebar" role="navigation">
  <div className="sidebar-nav navbar-collapse slimscrollsidebar">
    <ul className="nav" id="side-menu">
      <li className="sidebar-search hidden-sm hidden-md hidden-lg">
        {/* input-group */}
        <div className="input-group custom-search-form">
          <input type="text" className="form-control" placeholder="Search..." /> <span className="input-group-btn">
            <button className="btn btn-default" type="button"> <i className="fa fa-search" /> </button>
          </span> 
        </div>
        {/* /input-group */}
      </li>
      <li><Link  className="waves-effect"><i className="linea-icon linea-basic fa-fw"  /><span className="hide-menu">Dashboard<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link  className="waves-effect"><i className="fa fa-circle-o text-info" /> <span className="hide-menu">Demographical</span></Link></li>
        <li><Link  className="waves-effect"><i className="fa fa-circle-o text-info" /> <span className="hide-menu">Minimalistic</span></Link></li>
        <li><Link  className="waves-effect"><i className="fa fa-circle-o text-info" /> <span className="hide-menu">Analitical</span></Link></li></ul></li>

      <li><Link  className="waves-effect"><i className="fa fa-codiepie text-info mr-1" />  <span className="hide-menu">Customer<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link to="/addcustomer" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Add Customer</span></Link></li>
        <li><Link to="/customerlist" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Customer List</span></Link></li></ul></li>
        
      <li><Link  className="waves-effect"><i className="fa fa-codiepie text-info mr-1" />  <span className="hide-menu">Market Management<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link to="/SalesAssociateAdd" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Add Sales Associate</span></Link></li>
        <li><Link to="/SalesAssociateList" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Manage Sales Associate</span></Link></li>
        <li><Link to="/marketlist" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Manage Zone</span></Link></li>
        <li><Link to="/MarketWiseTargetAdd" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Set Marketwise Target</span></Link></li>
        <li><Link to="/SalesRepDailyTargetAdd" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Set SR Daily Target</span></Link></li>
        <li><Link to="/SalesRepMonthlyTargetAdd" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Set SR Monthly Target</span></Link></li></ul></li>
        
      <li><Link  className="waves-effect"><i className="fa fa-codiepie text-info mr-1"/>  <span className="hide-menu">Gift Management<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link to="/setsrdailygiftrequisition" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Set SR Daily Gift Requsition</span></Link></li>
        <li><Link to="/dailygiftoutrequest" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Daily Gift Out Request</span></Link></li>
        <li><Link to="/salesoutdailyreturn" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Daily Gift Out Return</span></Link></li></ul></li>

      <li><Link  className="waves-effect"><i  className="linea-icon linea-basic fa-fw" /><span className="hide-menu">Product Management<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link to="/AddProduct" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Add Product </span></Link></li>
        <li><Link to="/Productlist" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Product List</span></Link></li>
        <li><Link to="/ProductCategoryList" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Product Category List</span></Link></li></ul></li>

      <li><Link  className="waves-effect"><i className="ti-clipboard fa-fw"/><span className="hide-menu">Inventory  Management<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link to="/managestock" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Manage Stock</span></Link></li>
      <li><Link to="/addstockitem" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Add Stock Item</span></Link></li>
      <li><Link to="/stockreport" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Stock Report</span></Link></li></ul></li>

      <li><Link  className="waves-effect"><i className="fa fa-money p-r-10"/><span className="hide-menu">Sales Management<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link to="/Productsales" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Product Sales</span></Link></li>
        <li><Link to="/Invoicelist" className="waves-effect"><i className=" icon-list" />  <span className="hide-menu">Invoice List</span></Link></li>
        <li><Link to="/Salesreturnlist" className="waves-effect"><i className=" icon-list" />  <span className="hide-menu">Sales Return List</span></Link></li></ul></li>

        <li><Link  className="waves-effect"><i className="fa fa-money p-r-10"  /><span className="hide-menu">Rate Management<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link to="/Productsales" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Manage Rate</span></Link></li>
        <li><Link to="/Invoicelist" className="waves-effect"><i className=" fa fa-building p-r-10" />  <span className="hide-menu">Manage Discount</span></Link></li></ul></li>

        <li><Link  className="waves-effect"><i className="fa fa-building p-r-10"  /><span className="hide-menu">Finance &amp; Account<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link to="/Productsales" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Manage Voucher</span></Link></li>
        <li><Link to="/Invoicelist" className="waves-effect"><i className=" fa fa-circle-o text-info" />  <span className="hide-menu">Manage Chart of Account</span></Link></li>
        <li><Link to="/Invoicelist" className="waves-effect"><i className=" fa fa-circle-o text-info" />  <span className="hide-menu">Edit Voucher</span></Link></li></ul></li>

      
      <li><Link  className="waves-effect"><i className="icon-chart p-r-10" /><span className="hide-menu">Report<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link to="/t" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Ledger</span></Link></li>
        <li><Link to="/Voucher" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Voucher</span></Link></li>
        <li><Link to="/t" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Chart of Accounts</span></Link></li>
        <li><Link to="/t" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Cash Book</span></Link></li>
        <li><Link to="/t" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Bank Book</span></Link></li>
        <li><Link to="/TrialBalance" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Trial Balance</span></Link></li>
        <li><Link to="/Balancesheet"  className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Balance Sheet</span></Link></li>
        <li><Link to="/t"  className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Income &amp; Expenditure</span></Link></li>
        <li><Link  to="/Receivablestatement" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Receivable Statement</span></Link></li>
        <li><Link to="/Invoicewisesalesstatement" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Invoice wise Sales Statement</span></Link></li>
        <li><Link to="/Marketwisecustomerlist" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Market wise Customer List</span></Link></li>
        <li><Link to="/Dailysalesstatement" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Daily Sales Statement All (DSS)</span></Link></li>
        <li><Link to="/Salesbulletin" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Sales Bulletin</span></Link></li>
        <li><Link to="/Salesanalysis" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Sales Analysis</span></Link></li>
        <li><Link to="/Srdailysalesstatement" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">SR Daily Sales Statement (DSS)</span></Link></li>
        <li><Link to="/Summaryofdailysalesstatement" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Summary of Daily Sales Statement</span></Link></li>
        <li><Link to="/Salesmandailyactivityformat" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Salesman Daily Activity Format (SDAF)</span></Link></li>
        <li><Link to="/Dailyroutevisitreport" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Daily Route Visit Report</span></Link></li>
        <li><Link to="/Summaryofvisitingstatus" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Summary of Visiting Status</span></Link></li></ul></li>
      <li><Link  className="waves-effect"><i className="icon-people fa-fw" /><span className="hide-menu">User Management<span className="fa arrow" /></span></Link><ul className="nav nav-second-level">
        <li><Link to="/Users" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Users</span></Link></li>
        <li><Link to="/AddUsers" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Add User</span></Link></li>
        <li><Link to="/Roles" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Roles</span></Link></li>
        <li><Link to="/AddRoles" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Add Roles</span></Link></li>
        <li><Link to="/ActivityList" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">Activities</span></Link></li>
        <li><Link to="/t" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">User Audit Trail</span></Link></li>
        <li><Link to="/t" className="waves-effect"><i className="fa fa-circle-o text-info" />  <span className="hide-menu">User and Roles</span></Link></li></ul></li>
      <li><Link  className="waves-effect"><i  className="linea-icon linea-basic fa-fw" /><span className="hide-menu">System Setting<span className="fa arrow" /></span></Link><ul className="nav nav-second-level" /></li>
      <li><Link  className="waves-effect"> <i className="fa fa-power-off" /> <span className="hide-menu">Logout</span></Link></li>
    </ul>
  </div>
</div>


        </div>
    );
}

export default Sidenav;