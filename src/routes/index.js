import Home from "../pages/Home"
import Account_Management from "../pages/TellerOperation/Account_Management"
import Customer_Management from "../pages/TellerOperation/Customer_Management"
import Foreign_Exchange from "../pages/TellerOperation/Foreign_Exchange"
import Signature_Management from "../pages/TellerOperation/Signature_Management"
import Transactions from "../pages/TellerOperation/Transactions"
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
    { path: '/transactions', component: Transactions},
    { path: '/inward_transaction', component: Inward_Transaction},
    { path: '/outward_transaction', component: Outward_Transaction}

]

export { publicRoutes, privateRoutes }