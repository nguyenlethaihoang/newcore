import Home from "../pages/Home"
import Account_Management from "../pages/TellerOperation/Account_Management"
import Account_Transaction from "../pages/TellerOperation/Account_Management/Account_Transaction"
import Cheque_Management from "../pages/TellerOperation/Account_Management/Cheque_Management"
import Collect_Charges from "../pages/TellerOperation/Account_Management/Collect_Charges"
import Main_Account from "../pages/TellerOperation/Account_Management/Main_Account"
import Salary_Payment from "../pages/TellerOperation/Account_Management/Salary_Payment"
import Customer_Management from "../pages/TellerOperation/Customer_Management"
import Foreign_Exchange from "../pages/TellerOperation/Foreign_Exchange"
import Signature_Management from "../pages/TellerOperation/Signature_Management"
import Inward_Transaction from "../pages/TransferOperation/Inward_Transaction"
import Outward_Transaction from "../pages/TransferOperation/Outward_Transaction"

// Public Routes
const publicRoutes = [
    // { path: '/login', component: LoginPage},
]

// Private Routes
const privateRoutes = [
    { path: '/', component: Home},
    // { path: '/login', component: LoginPage},

    { path: '/customer_management', component: Customer_Management},
    { path: '/signature_management', component: Signature_Management},
    { path: '/account_management', component: Account_Management},
    { path: '/foreign_exchange', component: Foreign_Exchange},
    { path: '/account_transaction', component: Account_Transaction},
    { path: '/cheque_management', component: Cheque_Management},
    { path: '/collect_charges', component: Collect_Charges},
    { path: '/salary_payment', component: Salary_Payment},
    { path: '/main_account', component: Main_Account},
    
    
    { path: '/inward_transaction', component: Inward_Transaction},
    { path: '/outward_transaction', component: Outward_Transaction}

    

]

export { publicRoutes, privateRoutes }