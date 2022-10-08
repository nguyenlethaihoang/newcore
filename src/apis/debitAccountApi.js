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
    }

}
    export default debitAccountApi;