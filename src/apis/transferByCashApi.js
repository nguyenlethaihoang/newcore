import axiosClient from "./axiosClient";

// api/transferByCashApi.js
const transferByCashApi = {
    getAll: (params) => {
        const url = `/storage/get_city_province`;
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_city_province/${id}`;
        return axiosClient.get(url);
    },
    postCreateTransfer: (params) => {
        const url = 'transfer/cash_create';
        return axiosClient.post(url, { 
            productID: params.ProductID,
            currency: params.Currency,
            bencom: params.Bencom,
            creditAccount: params.CreditAccount,
            cashAccount: params.CashAccount,
            amount: params.Amount,
            sendingName: params.SendingName,
            sendingAddress: params.SendingAddress,
            sendingPhone: params.SendingPhone,
            receiveName: params.ReceiveName,
            receiveBenAccount: params.ReceiveBenAccount,
            bankCode: params.BankCode,
            identityCard: params.IdentityCard,
            receiveIssueDate: params.ReceiveIssueDate,
            receiveIssuePlace: params.ReceiveIssuePlace,
            teller: params.Teller,
            narrative: params.Narrative,
            waiveCharges: params.WaiveCharges ?? true,
            province: params.Province
         }).then(res => {
            return ('success')
        })
        .catch(err => {
            return ('fail')
        });
    },

}
    export default transferByCashApi;