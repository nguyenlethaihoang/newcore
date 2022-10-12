import axiosClient from "./axiosClient";

// api/foreignExchangeApi.js
const foreignExchangeApi = {
    getAll: (params) => {
        const url = '/exchange/enquiry';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_city_province/${id}`;
        return axiosClient.get(url);
    },
    post: async (params) => {
        const url = '/account/saving_account/open_arrear';
        return await axiosClient.post(url, {
            // Params force
            customerName: params.CustomerName,
            address: params.Address,
            phoneNo: params.PhoneNumber,
            tellerIDst: params.TellerID,
            debitCurrency: params.DebitCurrency,
            debitAmtLCY: params.DebitAmtLCY,
            debitAmtFCY: params.DebitAmtFCY,
            debitDealRate: params.DebitDealRate,
            currencyPaid: params.CurrencyPaid,
            tellerIDnd: params.TellerID02,
            creditDealRate: params.CreditDealRate,
            narrative: params.Narrative,
            ccAmount:   null,
            ccCategory: null,
            ccDealRate: null,
            ccVatSerialNo: null,
        })
            .then(res => {
                return ('success')
            })
            .catch(err => {
                console.log(err)
                console.log('err')
                return ('fail')
            })
        ;
    },

}
    export default foreignExchangeApi;