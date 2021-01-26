import React from 'react';

const Ledger = () => {
    return (
        <div>
            <div id="page-wrapper"> 
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Voucher Report </h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Report</a></li>
          <li className="active">Voucher Report</li>
        </ol>
      </div>
      {/* /.breadcrumb */}
    </div>
    {/* .row */}
    <div className="row">
      <div className="col-md-12">
        <div className="white-box">
          <div className="row">
            <div className="col-md-6"> 
              <form name="ledgerReport" id="ledgerReport" method="post" action="ledgerReportPrint.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E
&act=add" onsubmit="return dataValidate()" target="_blank">
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">GL Account</label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm chosen-select" style={{height: 30}} id="glCode" name="glCode">
                      <option value>SELECT</option>
                      <optgroup label="1000 | Income
 "> 
                      </optgroup><optgroup label="   1001 | Income/Revenue from operation
 "> 
                      </optgroup><optgroup label="     1002 | Sales Income
 "> 
                        <option value={1003
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1003 | Sales Revenue
                        </option>
                        <option value={1093
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1093 | Sales Return
                        </option>
                      </optgroup> 
                      <optgroup label="     1004 | Non-operating Income
 "> 
                        <option value={1005
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1005 | Bank Interest
                        </option>
                        <option value={1006
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1006 | Interest on FDR
                        </option>
                        <option value={1007
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1007 | Miscellaneous Income
                        </option>
                      </optgroup> 
                      <optgroup label="1008 | Expenses
 "> 
                      </optgroup><optgroup label="   1009 | Direct Expenses/ Cost of Goods Sold(COGS)
 "> 
                      </optgroup><optgroup label="     1010 | Product Cost
 "> 
                        <option value={1011
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1011 | Customs duty
                        </option>
                        <option value={1012
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1012 | Freight and Trucking Charges
                        </option>
                        <option value={1013
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1013 | Container Loading /unloadiing  Charges
                        </option>
                        <option value={1014
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1014 | Cost of Sales
                        </option>
                        <option value={1015
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1015 | Share of warehouse cost
                        </option>
                        <option value={1090
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1090 | Donation/Gift
                        </option>
                        <option value={1091
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1091 | Inventory Breakage
                        </option>
                        <option value={1092
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1092 | Inventory Write off
                        </option>
                        <option value={1094
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1094 | Inventory-Sample
                        </option>
                        <option value={1101
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1101 | Local Subscription Expenses
                        </option>
                        <option value={1112
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1112 | Dealer Commission-Regular
                        </option>
                        <option value={1132
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1132 | Dealer Commission-Breakage
                        </option>
                      </optgroup> 
                      <optgroup label="   1016 | Indirect Expenses
 "> 
                      </optgroup><optgroup label="     1017 | General & Admin expenses
 "> 
                        <option value={1018
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1018 | Salary &amp; Allowance
                        </option>
                        <option value={1019
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1019 | Conveyance exp.
                        </option>
                        <option value={1020
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1020 | Mobile bill
                        </option>
                        <option value={1021
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1021 | Telephone bill
                        </option>
                        <option value={1022
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1022 | Electricity bill
                        </option>
                        <option value={1023
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1023 | Internet
                        </option>
                        <option value={1024
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1024 | Office rent
                        </option>
                        <option value={1025
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1025 | Registration &amp; Renewals
                        </option>
                        <option value={1026
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1026 | Legal Expenses
                        </option>
                        <option value={1027
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1027 | Office Supplies/Stationary
                        </option>
                        <option value={1028
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1028 | Insurance Expenses
                        </option>
                        <option value={1029
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1029 | Repair &amp; Maintainance-office(admin)
                        </option>
                        <option value={1030
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1030 | Entertainment- Admin
                        </option>
                        <option value={1031
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1031 | Depreciation of assets
                        </option>
                        <option value={1032
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1032 | Amortization of licence/patent etc.
                        </option>
                        <option value={1095
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1095 | Sample Expenses
                        </option>
                        <option value={1096
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1096 | Shop Cleaning Expenses
                        </option>
                        <option value={1097
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1097 | Stationery Expenses
                        </option>
                        <option value={1098
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1098 | VAT Expenses
                        </option>
                        <option value={1099
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1099 | Printing &amp; Stationery
                        </option>
                        <option value={1100
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1100 | Photocopy Expenses
                        </option>
                        <option value={1102
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1102 | License &amp; Renewals
                        </option>
                        <option value={1103
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1103 | Loading and Unloading Expenses
                        </option>
                        <option value={1104
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1104 | Labour Bill
                        </option>
                        <option value={1105
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1105 | Misc. Expenses
                        </option>
                        <option value={1106
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1106 | Showroom Rent
                        </option>
                      </optgroup> 
                      <optgroup label="     1033 | Financial Cost
 "> 
                        <option value={1034
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1034 | Bank charges
                        </option>
                        <option value={1035
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1035 | Interest on credit cards
                        </option>
                        <option value={1036
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1036 | Interest on Short term loan
                        </option>
                        <option value={1037
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1037 | Interest on Long term loan
                        </option>
                        <option value={1038
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1038 | Bank commission
                        </option>
                        <option value={1039
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1039 | Gateway Commission/charges
                        </option>
                        <option value={1040
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1040 | L/C commission &amp; Charges
                        </option>
                      </optgroup> 
                      <optgroup label="     1041 | Marketing, Sales & Distributionexp.
 "> 
                      </optgroup><optgroup label="       1042 | Marketing expenses
 "> 
                        <option value={1043
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1043 | Marketing survey/Research exp.
                        </option>
                        <option value={1044
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1044 | Advertisement exp.
                        </option>
                        <option value={1045
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1045 | Road show/Event exp.
                        </option>
                        <option value={1046
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1046 | Catalogue/Leaflet exp.
                        </option>
                        <option value={1047
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1047 | Market Promotion exp.
                        </option>
                        <option value={1048
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1048 | Salary &amp; Allowances.
                        </option>
                        <option value={1049
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1049 | Conveyance exp.-Marketing
                        </option>
                        <option value={1050
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1050 | Mobile bill- Marketing
                        </option>
                        <option value={1051
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1051 | Entertainment-Marketing
                        </option>
                      </optgroup> 
                      <optgroup label="       1052 | Selling expenses
 "> 
                        <option value={1053
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1053 | Sales person salary
                        </option>
                        <option value={1054
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1054 | Sales Commission
                        </option>
                        <option value={1055
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1055 | Conveyance- Sale
                        </option>
                      </optgroup> 
                      <option value={1056
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1056 | Distribution expenses
                      </option>
                      <optgroup label="1061 | Assets
 "> 
                      </optgroup><optgroup label="   1062 | Current Assets
 "> 
                      </optgroup><optgroup label="     1063 | Bank
 "> 
                        <option value={1064
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1064 | Exim
                        </option>
                        <option value={1065
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1065 | Estern Bank Ltd
                        </option>
                      </optgroup> 
                      <optgroup label="     1066 | Cash
 "> 
                        <option value={1067
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1067 | Cash In Hand
                        </option>
                      </optgroup> 
                      <optgroup label="     1068 | Inventory
 "> 
                        <option value={1078
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1078 | Product Inventory
                        </option>
                      </optgroup> 
                      <optgroup label="     1069 | A/C Receivables
 "> 
                      </optgroup> 
                      <option value={1110
}>&nbsp;&nbsp; &nbsp;&nbsp; 1110 | Advance to Shop Owner
                      </option>
                      <option value={1113
}>&nbsp;&nbsp; &nbsp;&nbsp; 1113 | Intershop Receivable
                      </option>
                      <option value={1122
}>&nbsp;&nbsp; &nbsp;&nbsp; 1122 | Intershop Cash Receivable
                      </option>
                      <optgroup label="   1072 | Fixed Assets
 "> 
                        <option value={1107
}>&nbsp;&nbsp; &nbsp;&nbsp; 1107 | Fixed Assets
                        </option>
                      </optgroup> 
                      <optgroup label="1073 | Liabilities
 "> 
                      </optgroup><optgroup label="   1074 | Current Liabilities
 "> 
                      </optgroup><optgroup label="     1075 | A/C Payable
 "> 
                        <option value={1076
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1076 | A/C Payable to Abul Khair Tobacco
                        </option>
                      </optgroup> 
                      <option value={1118
}>&nbsp;&nbsp; &nbsp;&nbsp; 1118 | Intershop Payable
                      </option>
                      <option value={1126
}>&nbsp;&nbsp; &nbsp;&nbsp; 1126 | Intershop Cash Payable
                      </option>
                      <optgroup label="     1130 | Uneanrned Revenue
 "> 
                        <option value={1131
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1131 | Uneanrned Revenue
                        </option>
                      </optgroup> 
                      <optgroup label="   1077 | Long Term Liabilities
 "> 
                      </optgroup><optgroup label="     1087 | Current Account with Sister Concerns
 "> 
                        <option value={1088
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1088 | Current Account with Sister Concerns1
                        </option>
                        <option value={1089
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1089 | Retained Earning
                        </option>
                      </optgroup> 
                      <optgroup label="1079 | Equity
 "> 
                      </optgroup><optgroup label="   1080 | Fund
 "> 
                      </optgroup><optgroup label="     1084 | Share Capital
 "> 
                        <option value={1085
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1085 | Share Capital 1
                        </option>
                        <option value={1086
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1086 | Share Capital 2
                        </option>
                      </optgroup> 
                      <optgroup label="   1081 | Reserve Fund
 "> 
                      </optgroup><optgroup label="     1082 | Profit & Loss Account
 "> 
                        <option value={1083
}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1083 | Profit &amp; Loss Account
                        </option>
                      </optgroup> 
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  {/* Date picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3">Start Date</label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" className="form-control" id="startDate" name="startDate" placeholder="yyyy-mm-dd" /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                    </div>
                    <div className="help-block with-errors" />
                  </div>
                  {/* Date Picker Plugin JavaScript */}
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  {/* Date picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3">End Date</label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" className="form-control" id="endDate" name="endDate" placeholder="yyyy-mm-dd" /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                    </div>
                    <div className="help-block with-errors" />
                  </div>
                  {/* Date Picker Plugin JavaScript */}
                </div>
                <div className="form-group row">
                  <label className="control-label col-sm-3" />
                  <div className="col-sm-offset-3 col-sm-9">
                    <button type="submit" className="btn btn-info" name="submit">Report</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /.white-box */}
      </div>
    </div>
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

export default Ledger;