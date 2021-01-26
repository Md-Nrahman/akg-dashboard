import React from 'react';
import jwt_decode from "jwt-decode";

const Dashwrap = () => {
    return (
        <div>
           <div id="page-wrapper">
  <style dangerouslySetInnerHTML={{__html: "\n\n    .morris-donut-inverse{\n        min-height:  282px;\n        overflow: hidden;\n    }\n\n" }} />
  {/* Page Content */}
  <div className="container-fluid">
    <div className="row bg-title">
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Dashboard</h4> 
      </div>
      {/* /.page title */}
      {/* /.col-lg-12 */}
    </div>
    {/* /.row */}
    <style dangerouslySetInnerHTML={{__html: "\n\n        #accordion .panel{\n            border: none;\n            box-shadow: none;\n            border-radius: 0;\n            margin-bottom: 10px;\n        }\n        #accordion .panel-heading{\n            padding: 0;\n        }\n        #accordion .panel-title a{\n            display: block;\n            font-size: 13px;\n            font-weight: bold;\n            color: #fff;\n            background: #5f62ba;\n            border: 2px solid #5f62ba;\n            padding: 12px 20px 12px 47px;\n            position: relative;\n            transition: all 0.5s ease 0s;\n        }\n        #accordion .panel-title a.collapsed{\n            background: #fff;\n            border-color: #ddd;\n            color: #888;\n        }\n        /*        #accordion .panel-title a:before{\n                    content: \"\\f106\";\n                    font-family: \"FontAwesome\";\n                    font-weight: 900;\n                    font-size: 18px;\n                    position: absolute;\n                    top: 30%;\n                    left: 20px;\n                    transition: all 0.3s ease 0s;\n                }\n                #accordion .panel-title a.collapsed:before{\n                    content: \"\\f107\";\n                }*/\n        #accordion .panel-body{\n            font-size: 13px;\n            color: #888;\n            line-height: 25px;\n            border: 2px solid #5f62ba;\n            border-top: none;\n            \n        }\n\n        .tableFixHead          { overflow-y: auto; height: 100px; }\n        .tableFixHead thead th { position: sticky; top: 0; }\n\n        /* Just common table stuff. Really. */\n        table  { border-collapse: pin; width: 100%; }\n        th, td { padding: 8px 16px; }\n        \n\n        \n\n\n    " }} /> 
    <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          {/*                <div class="panel panel-default">
                              <div class="panel-heading" role="tab" id="headingTwo">
                                  <h4 class="panel-title">
                                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          Section 2
                                      </a>
                                  </h4>
                              </div>
                              <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                  <div class="panel-body">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                  </div>
                              </div>
                          </div>
                          <div class="panel panel-default">
                              <div class="panel-heading" role="tab" id="headingThree">
                                  <h4 class="panel-title">
                                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          Section 3
                                      </a>
                                  </h4>
                              </div>
                              <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                  <div class="panel-body">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                  </div>
                              </div>
                          </div>*/}
        </div>
      </div>
      {/*        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div class="white-box">
                  <h3 class="box-title"><i class="ti-shopping-cart text-success"></i> Today Sales</h3>
                  <div class="text-right"> <span class="text-muted">Today Sales</span>
                      <h2> sup><i class="ti-arrow-up text-success"></i></sup   TK 0.00
</h2>
                  </div>
                  <span class="text-success">20%</span>
                  <div class="progress m-b-0">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:20%;"> <span class="sr-only">20% Complete</span> </div>
                  </div>
              </div>
          </div>*/}
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title"><i className="ti-bolt text-danger" />  Weekly Sales</h3>
          <div className="text-right"> <span className="text-muted">Weekly Sales</span>
            <h2>{/* sup><i class="ti-arrow-down text-danger"></i></sup */} TK 22,347,172.50
            </h2>
          </div>
          <span className="text-danger">30%</span>
          <div className="progress m-b-0">
            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}> <span className="sr-only">230% Complete</span> </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title"><i className="ti-wallet text-info" /> Monthly Sales</h3>
          <div className="text-right"> <span className="text-muted">January 2021
            </span>
            <h2>{/* sup><i class="ti-arrow-up text-info"></i></sup */} TK 59,508,583.58
            </h2>
          </div>
          <span className="text-info">60%</span>
          <div className="progress m-b-0">
            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}> <span className="sr-only">20% Complete</span> </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title"><i className="ti-stats-up" /> Yearly Sales</h3>
          <div className="text-right"> <span className="text-muted">Year 2021
            </span>
            <h2>{/* sup><i class="ti-arrow-up text-inverse"></i></sup */} TK 63,015,004.28
            </h2>
          </div>
          <span className="text-inverse">80%</span>
          <div className="progress m-b-0">
            <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}> <span className="sr-only">230% Complete</span> </div>
          </div>
        </div>
      </div>
    </div>
    {/*/.row */}
    <div className="row">
      <div className="col-md-7 col-lg-9 col-sm-12 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">Yearly Sales</h3>
          <ul className="list-inline text-right">
            <li>
              <h5><i className="fa fa-circle m-r-5" style={{color: '#00bfc7'}} />Cigrettee</h5> </li>
            <li>
              <h5><i className="fa fa-circle m-r-5" style={{color: '#fb9678'}} />Bidi</h5> </li>
            <li>
              <h5><i className="fa fa-circle m-r-5" style={{color: '#9675ce'}} />Fire Box</h5> </li>
          </ul>
          <div id="morris-area-chart" style={{height: 340}} />
          {/*<div id="myfirstchartMorris1" style="height: 340px;"></div>*/}
        </div>
      </div>
      <div className="col-md-5 col-lg-3 col-sm-6 col-xs-12">
        <div className="row">
          <div className="col-md-12">
            <div className="white-box m-b-15">
              <h3 className="box-title">Total Profit</h3>
              <div className="row">
                <style dangerouslySetInnerHTML={{__html: "\n                                .center-donut > svg {\n                                    width: 100%;\n                                    margin: auto !important;\n                                }\n                            " }} />
                <div className="col-md-12 col-sm-6 col-xs-6">
                  {/*                                    <div id="sales1" class="text-center"></div>*/}
                  <div style={{}}>
                    <div id="donut-example" className="morris-donut-inverse center-donut" />
                  </div>
                  <div id="legend" className="donut-legend" />
                </div>
                <div className="col-md-12 col-sm-6 col-xs-6  m-t-30">
                  <h4>৳ 0.0</h4>
                  <p>Jan 2021</p>
                  <b /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">                    
      <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">Recent sales</h3>
          <div className="table-responsive">
            <table className="table ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>INVOICE</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                  <th>PRICE(TK)</th>
                  <th>DELIVERY DATE</th>
                  <th>REMARKS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody><tr>
                  <td className="txt-oflo">1</td>
                  <td className="txt-oflo">2372_1609750348377</td>
                  <td><span className="label label-megna label-rounded bg-primary">Sale</span></td>
                  <td className="txt-oflo">04-Jan-21</td>
                  <td><span className="text-success">5,347.40 </span></td>
                  <td>04-Jan-21</td>
                  <td style={{width: '15%'}}>add term</td>
                  <td className="txt-oflo">
                    <a id="btnShowInvoiceDetails2372_1609750348377" onclick="showInvoiceDetails(2372_1609750348377,'3EE27685DB973FB7D484F575561A6458');" title="Invoice details" className="btn btn-danger btn-sm"><i className="icon-info" /></a>
                    <a title="Print invoice" href="http://smtest.suffixit.com:8756/AKTWEB/sales/invoicePrint.jsp?sessionid=3EE27685DB973FB7D484F575561A6458&invNo=2372_1609750348377" target="_blank" className="btn btn-primary btn-sm"><i className="icon-printer" /></a>
                    <a title="Confirm Delivery Order" href="http://smtest.suffixit.com:8756/AKTWEB/sales/deliveryOrderPrint.jsp?sessionid=3EE27685DB973FB7D484F575561A6458&invNo=2372_1609750348377" target="_blank" className="btn btn-primary btn-sm"><i className="fa fa-truck" /></a>
                  </td>
                </tr>
                <tr>
                  <td className="txt-oflo">2</td>
                  <td className="txt-oflo">2372_1609609034172</td>
                  <td><span className="label label-megna label-rounded bg-primary">Sale</span></td>
                  <td className="txt-oflo">02-Jan-21</td>
                  <td><span className="text-success">3,728.00 </span></td>
                  <td>02-Jan-21</td>
                  <td style={{width: '15%'}}>add term</td>
                  <td className="txt-oflo">
                    <a id="btnShowInvoiceDetails2372_1609609034172" onclick="showInvoiceDetails(2372_1609609034172,'3EE27685DB973FB7D484F575561A6458');" title="Invoice details" className="btn btn-danger btn-sm"><i className="icon-info" /></a>
                    <a title="Print invoice" href="http://smtest.suffixit.com:8756/AKTWEB/sales/invoicePrint.jsp?sessionid=3EE27685DB973FB7D484F575561A6458&invNo=2372_1609609034172" target="_blank" className="btn btn-primary btn-sm"><i className="icon-printer" /></a>
                    <a title="Confirm Delivery Order" href="http://smtest.suffixit.com:8756/AKTWEB/sales/deliveryOrderPrint.jsp?sessionid=3EE27685DB973FB7D484F575561A6458&invNo=2372_1609609034172" target="_blank" className="btn btn-primary btn-sm"><i className="fa fa-truck" /></a>
                  </td>
                </tr>
                <tr>
                  <td className="txt-oflo">3</td>
                  <td className="txt-oflo">2371_1610283436941</td>
                  <td><span className="label label-megna label-rounded bg-primary">Sale</span></td>
                  <td className="txt-oflo">10-Jan-21</td>
                  <td><span className="text-success">3,956.00 </span></td>
                  <td>10-Jan-21</td>
                  <td style={{width: '15%'}}>add term</td>
                  <td className="txt-oflo">
                    <a id="btnShowInvoiceDetails2371_1610283436941" onclick="showInvoiceDetails(2371_1610283436941,'3EE27685DB973FB7D484F575561A6458');" title="Invoice details" className="btn btn-danger btn-sm"><i className="icon-info" /></a>
                    <a title="Print invoice" href="http://smtest.suffixit.com:8756/AKTWEB/sales/invoicePrint.jsp?sessionid=3EE27685DB973FB7D484F575561A6458&invNo=2371_1610283436941" target="_blank" className="btn btn-primary btn-sm"><i className="icon-printer" /></a>
                    <a title="Confirm Delivery Order" href="http://smtest.suffixit.com:8756/AKTWEB/sales/deliveryOrderPrint.jsp?sessionid=3EE27685DB973FB7D484F575561A6458&invNo=2371_1610283436941" target="_blank" className="btn btn-primary btn-sm"><i className="fa fa-truck" /></a>
                  </td>
                </tr>
                <tr>
                  <td className="txt-oflo">4</td>
                  <td className="txt-oflo">2371_1610240388771</td>
                  <td><span className="label label-megna label-rounded bg-primary">Sale</span></td>
                  <td className="txt-oflo">10-Jan-21</td>
                  <td><span className="text-success">8,187.00 </span></td>
                  <td>10-Jan-21</td>
                  <td style={{width: '15%'}}>add term</td>
                  <td className="txt-oflo">
                    <a id="btnShowInvoiceDetails2371_1610240388771" onclick="showInvoiceDetails(2371_1610240388771,'3EE27685DB973FB7D484F575561A6458');" title="Invoice details" className="btn btn-danger btn-sm"><i className="icon-info" /></a>
                    <a title="Print invoice" href="http://smtest.suffixit.com:8756/AKTWEB/sales/invoicePrint.jsp?sessionid=3EE27685DB973FB7D484F575561A6458&invNo=2371_1610240388771" target="_blank" className="btn btn-primary btn-sm"><i className="icon-printer" /></a>
                    <a title="Confirm Delivery Order" href="http://smtest.suffixit.com:8756/AKTWEB/sales/deliveryOrderPrint.jsp?sessionid=3EE27685DB973FB7D484F575561A6458&invNo=2371_1610240388771" target="_blank" className="btn btn-primary btn-sm"><i className="fa fa-truck" /></a>
                  </td>
                </tr>
                <tr>
                  <td className="txt-oflo">5</td>
                  <td className="txt-oflo">2371_1609750258619</td>
                  <td><span className="label label-megna label-rounded bg-primary">Sale</span></td>
                  <td className="txt-oflo">04-Jan-21</td>
                  <td><span className="text-success">2,448.80 </span></td>
                  <td>04-Jan-21</td>
                  <td style={{width: '15%'}}>add term</td>
                  <td className="txt-oflo">
                    <a id="btnShowInvoiceDetails2371_1609750258619" onclick="showInvoiceDetails(2371_1609750258619,'3EE27685DB973FB7D484F575561A6458');" title="Invoice details" className="btn btn-danger btn-sm"><i className="icon-info" /></a>
                    <a title="Print invoice" href="http://smtest.suffixit.com:8756/AKTWEB/sales/invoicePrint.jsp?sessionid=3EE27685DB973FB7D484F575561A6458&invNo=2371_1609750258619" target="_blank" className="btn btn-primary btn-sm"><i className="icon-printer" /></a>
                    <a title="Confirm Delivery Order" href="http://smtest.suffixit.com:8756/AKTWEB/sales/deliveryOrderPrint.jsp?sessionid=3EE27685DB973FB7D484F575561A6458&invNo=2371_1609750258619" target="_blank" className="btn btn-primary btn-sm"><i className="fa fa-truck" /></a>
                  </td>
                </tr>
              </tbody>
            </table> <a href="http://smtest.suffixit.com:8756/AKTWEB/sales/invoiceList.jsp?sessionid=3EE27685DB973FB7D484F575561A6458
">Check all the sales</a> </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
        <div className="row">
          <div className="col-md-12">
            <div className="white-box m-b-15">
              <h3 className="box-title">Product Alert</h3>
              <div className="row" style={{minHeight: 375}}>
                <div className="col-md-12 col-sm-6 col-xs-6">
                  <div className="table-responsive">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product Name</th>
                          <th>Warhouse Id</th>
                          <th>Qty</th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-12 col-sm-6 col-xs-6  m-t-30">
                  <a href="#">Show more</a>
                  <b /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.row */}
    {/*row */}
    <div className="row">
      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">Last 30 Days Sales</h3>
          <div id="myfirstchartMorris" style={{height: 340}} />
        </div>
      </div>
    </div>
    {/* /.row */}
    <div className>
      <div className="white-box">
        <h3 className="box-title">Location Map</h3>
        <style dangerouslySetInnerHTML={{__html: "\n                /* Always set the map height explicitly to define the size of the div\n                 * element that contains the map. */\n                #map {\n                    height: 100%;\n                }\n                #map {\n                    width: 100%;\n                    height: 100%;\n                    border: 1px solid blue;\n                }\n                #data, #allData,#geoLocationAllData {\n                    display: none;\n                }\n            " }} />
        <div id="data">[]</div>
        <div id="geoLocationAllData">[]</div>
        <div className="container" style={{height: 600, width: '100%', padding: 0}}>
          <div id="map" />
        </div>
      </div>
    </div>
  </div>
  </div>
  <footer class="footer text-center"> 2020 &copy; Suffix IT Limited</footer>
  </div>


 

    );
};

export default Dashwrap;