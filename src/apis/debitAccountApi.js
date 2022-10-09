import axiosClient from "./axiosClient";

const debitAccountApi = {
    open: async (params) => {
        const url = 'account/debit_account/open';
        return axiosClient.post(url, {
            customerID: params.CustomerID,
            category: params.Category,
            productLine: params.ProductLine,
            currency: params.Currency,
            accountTitle: params.AccountTitle,
            shortTitle: params.ShortTitle,
            accountOffice: params.AccountOfficer,
            chargeCode: params.ChargeCode,
            joinHolder: params.JoinHolder,
            relationCode: params.RelationCode,
            joinNotes: params.JoinNotes
        })
        .then(res => {
            return ('success')
        })
        .catch(err => {
            return ('fail')
        })
    },
    enquiry: async (params) => {
        const url = 'account/debit_account/enquiry';
        return axiosClient.post(url, {
            account: params.AccountID,
            customerType: params.CustomerType,
            customerID: params.CustomerID,
            docID: params.DocID,
            GB_FullName: params.GB_FullName,
            productLine: params.ProductLine,
            category: params.Category,
            currency: params.Currency,
            status: params.Status
        })
    }

}
    export default debitAccountApi;