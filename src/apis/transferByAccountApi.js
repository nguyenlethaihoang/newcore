import axiosClient from "./axiosClient";

// api/transferByAccountApi.js
const transferByAccountApi = {
    getAll: (params) => {
        const url = `/storage/get_city_province`;
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_city_province/${id}`;
        return axiosClient.get(url);
    },  
    postCreateTransfer: (params) => {
        const url = 'transfer/account_create';
        return axiosClient.post(url, { 
            productID: params.ProductID,
            currency: params.Currency,
            bencom: params.Bencom,
            creditAccount: params.CreditAccount,
            debitAccount: params.DebitAccount,
            amount: params.Amount,
            sendingName: params.SendingName,
            sendingAddress: params.SendingAddress,
            taxCode: params.TaxCode,
            receiveName: params.ReceiveName,
            benAccount: params.BenAccount,
            idCard: params.IDCard,
            receiveIssueDate: params.ReceiveIssueDate,
            receiveIssuePlace: params.ReceiveIssuePlace,
            receivePhone: params.ReceivePhone,
            bankCode: params.BankCode,
            bankName: params.BankName,
            tellerID: params.TellerID,
            narrative: params.Narrative,
            waiveCharge: params.WaiveCharge,
            province: params.Province
         }).then(res => {
            return ('success')
        })
        .catch(err => {
            console.log('err')
            console.log(err)
            return ('fail')
        });
    },

}
    export default transferByAccountApi;