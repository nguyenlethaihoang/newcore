import axiosClient from "./axiosClient";

// api/cashDepositsApi.js
const cashDepositsApi = {
    postEnquiry: (params) => {
        const url = '/transaction/enquiry';
        return axiosClient.post(url, { 
            transactionType: params.TransactionType,
            refID: params.RefID,  // id transaction
            customerType: params.CustomerType, // C - P
            GB_FullName: params.GB_FullName,
            amountFr: params.AmountFr,
            amountTo: params.AmountTo ,
            accountType: 1,
            currency: params.Currency,
            customerID: params.CustomerID,
            customerAccount: params.CustomerAccount, //debit account
            date: params.Date
         });
    },
    postValidate: (id, params) => {
        const url = `transaction/validate_deposit/${id}`;
        return axiosClient.put(url, {
            status: params.Status,
        });        
    },
    get: (id) => {
        const url = `/storage/get_city_province/${id}`;
        return axiosClient.get(url);
    },
    postCreate: (params) => {
        const url = 'transaction/create_deposit';
        return axiosClient.post(url, { 
            accountType: 1,
            account: params.CustomerAccount,
            amount: params.AmountDeposited,
            dealRate: params.DealRate,
            waiveCharges: params.WaiveCharges,
            currencyDeposited: params.CurrencyDeposited,
            narrative: params.Narrative,
            tellerID: params.TellerID,
            cashAccount: params.CashAccount,
            // ccAmount: req.body.ccAmount,
            // ccCategory: req.body.ccCategory,
            // ccDealRate: req.body.ccDealRate,
            // ccVatSerialNo: req.body.ccVatSerialNo
         }).then(res => {
            return ('success')
        })
        .catch(err => {
            return ('fail')
        });
    },

}
    export default cashDepositsApi;