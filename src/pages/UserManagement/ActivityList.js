import React from 'react';

const ActivityList = () => {
    return (
        <div>

<div id="page-wrapper" style={{minHeight: 596}}>
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Activity List</h4>
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">User Management</a></li>                    
          <li className="active">Activities</li>
        </ol>
      </div>
      {/* /.breadcrumb */}
    </div>
    {/* .row */}
    <div className="row globalAlertInfoBoxConParentTT">
      {/* .globalAlertInfoBoxConTT start */}
      <div id="globalAlertInfoBoxConTT" className="col-md-12 globalAlertInfoBoxConTT" style={{display: 'none'}}>
        {/*                <div class="alert alert-primary alert-dismissable fade in" style="border-left: 4px solid #4CAF50;">
                          <a href="#" class="close closeTT" data-dismiss="alert" aria-label="close">&times;</a> 
                          <strong>Success!</strong> You should <a href="#" class="alert-link" style="color: #fff;">read this message</a>.
                              <strong></strong>
                      </div>*/}
      </div>
      {/* .globalAlertInfoBoxConTT end */}
      <div className="col-md-12">
        <div className="white-box">
          <form className="form-group" role="search">
            <div className="input-group">
              <input type="text" id="example-input1-group2" name="example-input1-group2" className="form-control" placeholder="Search" /> <span className="input-group-btn"><button type="button" className="btn waves-effect waves-light btn-info"><i className="fa fa-search" /></button></span> 
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-sm table-bordered color-table inverse-table table-hover table-custom-padding-5x">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Activity ID</th>
                  <th>Activity Description</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td> 1</td>
                  <td> Dashboard</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Dashboard activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td> 1.01</td>
                  <td> Demographical</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Demographical activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td> 1.02</td>
                  <td> Minimalistic</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Minimalistic activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td> 1.03</td>
                  <td> Analitical</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Analitical activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td> 10</td>
                  <td> Customer</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Customer activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td> 10.01</td>
                  <td> Add Customer</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Add Customer activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td> 10.02</td>
                  <td> Customer List</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Customer List activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td> 11</td>
                  <td> Market Management</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Market Management activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td> 11.01</td>
                  <td> Add Sales Associate</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Add Sales Associate activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td> 11.02</td>
                  <td> Manage Sales Associate</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Manage Sales Associate activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td> 11.03</td>
                  <td> Manage Zone</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Manage Zone activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td> 11.06</td>
                  <td> Set Marketwise Target</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Set Marketwise Target activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td> 11.07</td>
                  <td> Set SR Daily Target</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Set SR Daily Target activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td> 11.08</td>
                  <td> Daily Sales Out Request</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Daily Sales Out Request activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td> 11.09</td>
                  <td> Set SR Monthly Target</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Set SR Monthly Target activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td> 11.10</td>
                  <td> Daily Sales Out Return</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Daily Sales Out Return activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td> 12</td>
                  <td> Gift Management</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Gift Management activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td> 12.01</td>
                  <td> Set SR Daily Gift Requsition</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Set SR Daily Gift Requsition activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>19</td>
                  <td> 12.02</td>
                  <td> Daily Gift Out Request</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Daily Gift Out Request activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>20</td>
                  <td> 12.03</td>
                  <td> Daily Gift Out Return</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Daily Gift Out Return activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>21</td>
                  <td> 12.04</td>
                  <td> Gift List</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Gift List activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>22</td>
                  <td> 2</td>
                  <td> Product Management</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Product Management activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td> 2.04</td>
                  <td> Add Product </td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Add Product  activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>24</td>
                  <td> 2.06</td>
                  <td> Product List</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Product List activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>25</td>
                  <td> 2.07</td>
                  <td> Product Category List</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Product Category List activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>26</td>
                  <td> 3</td>
                  <td> Inventory  Management</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Inventory  Management activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>27</td>
                  <td> 3.01</td>
                  <td> Manage Stock</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Manage Stock activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>28</td>
                  <td> 3.02</td>
                  <td> Add Stock Item</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Add Stock Item activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>29</td>
                  <td> 3.04</td>
                  <td> Stock Report</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Stock Report activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>30</td>
                  <td> 3.05</td>
                  <td> Inventory Report</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Inventory Report activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>31</td>
                  <td> 4</td>
                  <td> Sales Management</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Sales Management activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>32</td>
                  <td> 4.01</td>
                  <td> Product Sales</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Product Sales activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>33</td>
                  <td> 4.03</td>
                  <td> Invoice List</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Invoice List activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>34</td>
                  <td> 4.05</td>
                  <td> Sales Return List</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Sales Return List activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>35</td>
                  <td> 5</td>
                  <td> Rate Management</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Rate Management activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>36</td>
                  <td> 5.01</td>
                  <td> Manage Rate</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Manage Rate activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>37</td>
                  <td> 5.02</td>
                  <td> Manage Discount</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Manage Discount activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>38</td>
                  <td> 6</td>
                  <td> Finance &amp; Account</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Finance & Account activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>39</td>
                  <td> 6.01</td>
                  <td> Manage Voucher</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Manage Voucher activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>40</td>
                  <td> 6.02</td>
                  <td> Manage Chart of Account</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Manage Chart of Account activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>41</td>
                  <td> 6.04</td>
                  <td> Edit Voucher</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Edit Voucher activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>42</td>
                  <td> 7</td>
                  <td> Report</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Report activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>43</td>
                  <td> 7.01</td>
                  <td> Ledger</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Ledger activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>44</td>
                  <td> 7.02</td>
                  <td> Voucher</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Voucher activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>45</td>
                  <td> 7.03</td>
                  <td> Chart of Accounts</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Chart of Accounts activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>46</td>
                  <td> 7.04</td>
                  <td> Cash Book</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Cash Book activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>47</td>
                  <td> 7.05</td>
                  <td> Bank Book</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Bank Book activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>48</td>
                  <td> 7.06</td>
                  <td> Trial Balance</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Trial Balance activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>49</td>
                  <td> 7.07</td>
                  <td> Balance Sheet</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Balance Sheet activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>50</td>
                  <td> 7.08</td>
                  <td> Income &amp; Expenditure</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Income & Expenditure activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>51</td>
                  <td> 7.09</td>
                  <td> Receivable Statement</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Receivable Statement activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>52</td>
                  <td> 7.10</td>
                  <td> Invoice wise Sales Statement</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Invoice wise Sales Statement activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>53</td>
                  <td> 7.11</td>
                  <td> Market wise Customer List</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Market wise Customer List activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>54</td>
                  <td> 7.12</td>
                  <td> Product wise Sales Statement</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Product wise Sales Statement activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>55</td>
                  <td> 7.13</td>
                  <td> Daily Sales Statement All (DSS)</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Daily Sales Statement All (DSS) activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>56</td>
                  <td> 7.14</td>
                  <td> Sales Bulletin</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Sales Bulletin activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>57</td>
                  <td> 7.15</td>
                  <td> Sales Analysis</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Sales Analysis activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>58</td>
                  <td> 7.16</td>
                  <td> SR Daily Sales Statement (DSS)</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="SR Daily Sales Statement (DSS) activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>59</td>
                  <td> 7.17</td>
                  <td> Summary of Daily Sales Statement</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Summary of Daily Sales Statement activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>60</td>
                  <td> 7.18</td>
                  <td> Salesman Daily Activity Format (SDAF)</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Salesman Daily Activity Format (SDAF) activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>61</td>
                  <td> 7.19</td>
                  <td> Daily Route Visit Report</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Daily Route Visit Report activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>62</td>
                  <td> 7.20</td>
                  <td> Summary of Visiting Status</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Summary of Visiting Status activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>63</td>
                  <td> 9</td>
                  <td> User Management</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="User Management activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>64</td>
                  <td> 9.01</td>
                  <td> Users</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Users activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>65</td>
                  <td> 9.02</td>
                  <td> Add User</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Add User activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>66</td>
                  <td> 9.03</td>
                  <td> Roles</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Roles activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>67</td>
                  <td> 9.04</td>
                  <td> Add Roles</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Add Roles activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>68</td>
                  <td> 9.07</td>
                  <td> Activities</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Activities activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>69</td>
                  <td> 9.08</td>
                  <td> User Audit Trail</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="User Audit Trail activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>70</td>
                  <td> 9.09</td>
                  <td> User and Roles</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="User and Roles activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>71</td>
                  <td> 997</td>
                  <td> System Setting</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="System Setting activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
                <tr>
                  <td>72</td>
                  <td> 999</td>
                  <td> Logout</td>
                  <td className="text-center">
                    <a id="btnShowInvoiceDetails" onclick="showInvoiceDetails();" title="Invoice details" className="btn btn-primary btn-sm"><i className="icon-info" /></a>
                    <a onclick="updateActivityInfo('2');" title="Logout activity update" className="btn btn-primary btn-sm"><i className="icon-note" /></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="align-right">
            <ul className="pagination pagination-sm m-b-0 justify-content-end">
              <li className="disabled"> <a href="#"><i className="fa fa-angle-left" /></a> </li>
              <li> <a href="#">1</a> </li>
              <li className="active"> <a href="#">2</a> </li>
              <li> <a href="#">3</a> </li>
              <li> <a href="#">4</a> </li>
              <li> <a href="#">5</a> </li>
              <li> <a href="#"><i className="fa fa-angle-right" /></a> </li>
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

export default ActivityList;