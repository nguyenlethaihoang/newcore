import axiosClient from "./axiosClient";

const ChargeCollectionApi = {
    collectChargeAccount: (params) => {
        const url = '/charge/create_ccaccount';
        return axiosClient.post(url, { 
            ccAmount: params.CCAmount,
            ccDealRate: params.CCDealRate,
            ccVatSerialNo: params.CCVatSerialNo,
            ccNarrative: params.CCNarrative,
            ccCategory: params.CCCategory,
            account: params.Account,
            accountType: params.AccountType,
            ccAmountFCY: params.CCAmountFCY,
            vatAmountLCY: params.VatAmountLCY,
            vatAmountFCY: params.VatAmountFCY,
            totalAmountLCY: params.TotalAmountLCY,
            totalAmountFCY: params.TotalAmountFCY,
         })
        .then(res => {
            return ('success')
        })
        .catch(err => {
            console.log('err')
            console.log(err.response.data.message)
            return (err.response.data.message)
        })
    },
    collectChargeCash: (params) => {
        const url = '/charge/create_cccash';
        return axiosClient.post(url, {
            ccAmount: params.CCAmount,
            ccDealRate: params.CCDealRate,
            ccVatSerialNo: params.CCVatSerialNo,
            ccNarrative: params.CCNarrative,
            ccCategory: params.CCCategory,
            customerID: params.CustomerID,
            teller: params.TellerID,
            currency: params.Currency,
            legalID: params.LegalID,
            ccAmountFCY: params.ccAmountFCY,
            vatAmountLCY: params.VatAmountLCY,
            vatAmountFCY: params.VatAmountFCY,
            totalAmountLCY: params.TotalAmountLCY,
            totalAmountFCY: params.TotalAmountFCY,
            customerName: params.CustomerName,
            address: params.Address,
            issuedDate: params.IssuedDate,
            issuePlace: params.IssuePlace

        })
        .then(res => {
            return ('success')
        })
        .catch(err => {
            console.log('err')
            console.log(err.response.data.message)
            return (err.response.data.message)
        })
    },
    enquiry: async (params) => {
        const url = '/charge/enquiry';
        return axiosClient.post(url, {
            chargeType: params.chargeType,
            chargeID: params.chargeID,
            customerID: params.customerID,
            customerName: params.customerName,
            legalID: params.legalID,
            accountID: params.accountID,
            accountType: params.accountType,
            chargesAmountfr: params.chargesAmountfr,
            chargesAmountto: params.chargesAmountto
        })
    }, 
    validate:  async (params, id) => {
        const url = `/charge/validate/${id}`;
        return axiosClient.put(url, {
            status: params.Status
        })
        .then(res => {
            return ('success')
        })
        .catch(err => {
            console.log('err')
            console.log(err.response.data.message)
            return (err.response.data.message)
        })
    }, 
}
    export default ChargeCollectionApi;