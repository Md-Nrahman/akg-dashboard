import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';


import PrivateRoute from './PrivateRoute';
import Topnav from './Navbar/topnav';
import Sidenav from './Navbar/sidenav';
import Dashwrap from './Dashboard/dashwrap';
import Addcustomer from './pages/customer/addcustomer';
import Login from './Login/login';
import Setsrdailygiftrequisition from './pages/Gift Management/Setsrdailygiftrequisition';

import Customerlist from './pages/customer/customerlist';
import ManageChartOfAccount from './pages/Finance&Account/ManageChartOfAccount';
import ManageVoucher from './pages/Finance&Account/ManageVoucher';
import Dailygiftoutrequest from './pages/Gift Management/Dailygiftoutrequest';
import Salesoutdailyreturn from './pages/Gift Management/Salesoutdailyreturn';
import Addstockitem from './pages/Inventory Management/Addstockitem';
import Managestock from './pages/Inventory Management/Managestock';
import Stockreport from './pages/Inventory Management/Stockreport';
import MarketList from './pages/Market-Management/MarketList';
import MarketWiseTargetAdd from './pages/Market-Management/MarketWiseTargetAdd';
import SalesAssociateAdd from './pages/Market-Management/SalesAssociateAdd';
import SalesAssociateList from './pages/Market-Management/SalesAssociateList';
import SalesRepDailyTargetAdd from './pages/Market-Management/SalesRepDailyTargetAdd';
import SalesRepMonthlyTargetAdd from './pages/Market-Management/SalesRepMonthlyTargetAdd';
import AddProduct from './pages/Product Management/Addproduct';
import ProductCategoryList from './pages/Product Management/ProductCategoryList';
import Productlist from './pages/Product Management/Productlist';
import Balancesheet from './pages/Report/Balancesheet';
import Dailyroutevisitreport from './pages/Report/Dailyroutevisitreport';
import Dailysalesstatement from './pages/Report/Dailysalesstatement';
import Invoicewisesalesstatement from './pages/Report/Invoicewisesalesstatement';
import Ledger from './pages/Report/Ledger';
import Marketwisecustomerlist from './pages/Report/Marketwisecustomerlist';
import Receivablestatement from './pages/Report/Receivablestatement';
import Salesanalysis from './pages/Report/Salesanalysis';
import Salesbulletin from './pages/Report/Salesbulletin';
import Salesmandailyactivityformat from './pages/Report/Salesmandailyactivityformat';
import Srdailysalesstatement from './pages/Report/Srdailysalesstatement';
import Summaryofdailysalesstatement from './pages/Report/Summaryofdailysalesstatement';
import Summaryofvisitingstatus from './pages/Report/Summaryofvisitingstatus';
import TrialBalance from './pages/Report/TrialBalance';
import Voucher from './pages/Report/Voucher';
import Salesreturnlist from './pages/Sales Management/Salesreturnlist';
import Invoicelist from './pages/Sales Management/Invoicelist';
import Productsales from './pages/Sales Management/Productsales';
import ActivityList from './pages/UserManagement/ActivityList';
import AddRoles from './pages/UserManagement/AddRoles';
import AddUser from './pages/UserManagement/AddUser';
import Roles from './pages/UserManagement/Roles';
import Users from './pages/UserManagement/Users';



const App=()=>{
    return(

        <div>
            <Provider store={store}>
           <BrowserRouter>
           
           <div>
               <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <PrivateRoute path="/"><Topnav/><Sidenav/></PrivateRoute>
                    <PrivateRoute path="/dashboard"><Dashwrap></Dashwrap></PrivateRoute>
                    <PrivateRoute path="/addcustomer"><Addcustomer></Addcustomer></PrivateRoute>
                    <PrivateRoute path="/setsrdailygift"><Setsrdailygiftrequisition></Setsrdailygiftrequisition></PrivateRoute>
                </Switch>

           

               {/* <Route path="/" component={Topnav} />
               <Route path="/" component={Sidenav} /> */}
               <Route path="/" exact component={Dashwrap} />
               
               <Route path="/setsrdailygift" component={Setsrdailygiftrequisition} />
               <Route path="/addcustomer" component={Addcustomer} />
               <Route path="/customerlist" component={Customerlist} />
               <Route path="/managevoucher" component={ManageVoucher} />
               <Route path="/managechartofaccount" component={ManageChartOfAccount} />
               <Route path="/dailygiftoutrequest" component={Dailygiftoutrequest} />
               <Route path="/salesoutdailyreturn" component={Salesoutdailyreturn} />
               <Route path="/addstockitem" component={Addstockitem} />
               <Route path="/managestock" component={Managestock} />
               <Route path="/stockreport" component={Stockreport} />
               <Route path="/marketlist" component={MarketList} />
               <Route path="/MarketWiseTargetAdd" component={MarketWiseTargetAdd} />
               <Route path="/SalesAssociateAdd" component={SalesAssociateAdd} />
               <Route path="/SalesAssociateList" component={SalesAssociateList} />
               <Route path="/SalesRepDailyTargetAdd" component={SalesRepDailyTargetAdd} />
               <Route path="/SalesRepMonthlyTargetAdd" component={SalesRepMonthlyTargetAdd} />
               <Route path="/AddProduct" component={AddProduct} />
               <Route path="/ProductCategoryList" component={ProductCategoryList} />
               <Route path="/Productlist" component={Productlist} />
               <Route path="/Balancesheet" component={Balancesheet} />
               <Route path="/Dailysalesstatement" component={Dailysalesstatement} />
               <Route path="/Invoicewisesalesstatement" component={Invoicewisesalesstatement} />
               <Route path="/Dailyroutevisitreport" component={Dailyroutevisitreport} />
               <Route path="/Ledger" component={Ledger} />
               <Route path="/Marketwisecustomerlist" component={Marketwisecustomerlist} />
               <Route path="/Receivablestatement" component={Receivablestatement} />
               <Route path="/Salesanalysis" component={Salesanalysis} />
               <Route path="/Salesbulletin" component={Salesbulletin} />
               <Route path="/Salesmandailyactivityformat" component={Salesmandailyactivityformat} />
               <Route path="/Srdailysalesstatement" component={Srdailysalesstatement} />
               <Route path="/Summaryofdailysalesstatement" component={Summaryofdailysalesstatement} />
               <Route path="/Summaryofvisitingstatus" component={Summaryofvisitingstatus} />
               <Route path="/TrialBalance" component={TrialBalance} />
               <Route path="/Voucher" component={Voucher} />
               <Route path="/Salesreturnlist" component={Salesreturnlist} />
               <Route path="/Invoicelist" component={Invoicelist} />
               <Route path="/Productsales" component={Productsales} />
               <Route path="/ActivityList" component={ActivityList} />
               <Route path="/AddRoles" component={AddRoles} />
               <Route path="/Roles" component={Roles} />
               <Route path="/Users" component={Users} />
               <Route path="/AddUsers" component={AddUser} />
               
           </div>
           
           </BrowserRouter>
           </Provider>
        
        </div>
    );
};

export default App;
