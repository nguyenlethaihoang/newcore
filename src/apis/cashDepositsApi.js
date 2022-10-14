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
            // accountType: 1,
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

    postCreateWithdrawal: (params) => {
        const url = 'transaction/create_withdrawal';
        return axiosClient.post(url, { 
            accountType: 1,
            account: params.Account,
            amount: params.Amount,
            narrative: params.Narrative,
            tellerID: params.TellerID,
            cashAccount: params.CashAccount,
            dealRate: params.DealRate,
            waiveCharges: params.WaiveCharges,
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
    postValidateWithdrawal: (id, params) => {
        const url = `transaction/validate_withdrawal/${id}`;
        return axiosClient.put(url, {
            status: params.Status,
        });        
    },
    postCreateTransfer: (params) => {
        const url = 'transaction/create_transfer';
        return axiosClient.post(url, { 
            accountType: params.AccountType, //int
            debitAccount: params.DebitAccount, //text
            transferAmount: params.TransferAmount, //(debitAmount) int
            creditAccount: params.CreditAccount,
            paidAmount: params.TransferAmount * params.DealRate,
            dealRate: params.DealRate, //float
            valueDate: params.ValueDate, //ex: "2022/05/09"
            waiveCharges: params.WaiveCharges, //bool
            narrative: params.Narrative, //text

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
    postValidateTransfer: (id, params) => {
        const url = `transaction/validate_transfer/${id}`;
        return axiosClient.put(url, {
            status: params.Status,
        });        
    },

}
    export default cashDepositsApi;