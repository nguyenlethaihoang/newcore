
import axiosClient from "./axiosClient";

// api/inwardApi.js
const inwardApi = {

    createCashWithdrawal: async (params) => {
        const url = '/transfer/inward_cash_create'
        return axiosClient.post(url, {
            type: params.Type,
            clearingID: params.ClearingID,
            debitCurrency: params.DebitCurrency,
            debitAccount: params.DebitAccount,
            debitAmtLCY: params.DebitAmtLCY,
            debitAmtFCY: params.DebitAmtFCY,
            dealRate: params.DealRate,
            creditCurrency: params.CreditCurrency,
            creditAccount: params.CreditAccount,
            creditAmtLCY: params.CreditAmtLCY,
            creditAmtFCY: params.CreditAmtFCY,
            BOName: params.BOName,
            FOName: params.FOName,
            legalID: params.LegalID,
            telephone: params.Telephone,
            issueDate: params.IssueDate,
            issuePlace: params.IssuePlace,
            narrative: params.Narrative  
        }).then(res => {
            return ('success')
        })
        .catch(err => {
            console.log(err.response.data.message)
            return (err.response.data.message)
        })
    },

    createCredit: async (params) => {
        const url = '/transfer/inward_credit_create'
        return axiosClient.post(url, {
            clearingID: params.ClearingID,
            debitCurrency: params.DebitCurrency,
            debitAccount: params.DebitAccount,
            debitAmtLCY: params.DebitAmtLCY,
            debitAmtFCY: params.DebitAmtFCY,
            dealRate: params.DealRate,
            creditCurrency: params.CreditCurrency,
            creditAccount: params.CreditAccount,
            creditAmtLCY: params.CreditAmtLCY,
            creditAmtFCY: params.CreditAmtFCY,
            BOName: params.BOName,
            FOName: params.FOName,
            legalID: params.LegalID,
            telephone: params.Telephone,
            issueDate: params.IssueDate,
            issuePlace: params.IssuePlace,
            narrative: params.Narrative  
        }).then(res => {
            return ('success')
        })
        .catch(err => {
            console.log(err.response.data.message)
            return (err.response.data.message)
        })
    },

    getByID: async (id) => {
        const url = `/transfer/inward/${id}`
        return axiosClient.get(url)
    },

    validate: async (params, id) => {
        const url = `/transfer/inward/${id}`
        return axiosClient.put(url, {
            status: params.Status
         })
         .then(res => {
            return ('success')
        })
        .catch(err => {
            return (err.response.data.message)
        })
    },

    enquiry: async (params) => {
        const url = '/transfer/inward/enquiry'
        return axiosClient.post(url, {
            transactionType: params.TransactionType,
            BOName: params.BOName,
            FOName: params.FOName,
            FOlegalID: params.LegalID,
            refID: params.RefID,
            creditCurrency: params.CreditCurrency,
            amtFr: params.AmountFr,
            amtTo: params.AmountTo
        })
    }
}
    export default inwardApi;