import axiosClient from "./axiosClient";

// api/savingAccountApi.js
const savingAccountApi = {
    getAll: (params) => {
        const url = '/storage/get_city_province';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_city_province/${id}`;
        return axiosClient.get(url);
    },
    postCreateArrear: async (params) => { 
        const url = '/account/saving_account/open_arrear';
        return await axiosClient.post(url, {
            customerID: params.CustomerID,
            category: params.Category,
            accountTitle: params.AccountTitle,
            shortTitle: params.ShortTitle,
            currency: params.Currency,
            productLine: params.ProductLine,
            joinHolder: params.JoinHolder,
            relationShip : params.Relationship,
            notes: params.Notes,
            accountOfficer: params.AccountOfficer,
            product: params.Product,
            principalAmount: params.Principal,
            // valueDate: '',
            term: params.Term,
            interestRate: params.InterestRate,
            debitAccount: params.DebitAccount,
            rolloverPR: params.RolloverPR,
            paymentCurrency: params.PaymentCCY,
            teller: params.Teller,
            narrative: params.Narrative,
            paymentNo: params.PaymentNumber
        })
            .then(res => {
                return ('success')
            })
            .catch(err => {
                console.log('params')
                console.log(params)
                console.log(err)
                console.log('err')
                return ('fail')
            })
        ;
    },
    postEnquiryArrear: async (params) => {
        const url = '/account/saving_account/enquiry_arrear';
        return await axiosClient.post(url, {
            // refID: req.body.refID,
            // status: req.body.status, 
            // category: req.body.category, 
            // customerID: req.body.customerID, 
            // productLine: req.body.productLine,
            // principalFrom: req.body.principalFrom,
            // principalTo: req.body.principalTo,
            // currency: req.body.currency
        })
        //     .then(res => {
        //         return ('success')
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         console.log('err')
        //         return ('fail')
        //     })
        // ;
    }
}
    export default savingAccountApi;