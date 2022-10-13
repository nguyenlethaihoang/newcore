import axiosClient from "./axiosClient";

const chequeApi = {
    issue: async (params) => {
        const url = '/cheque/issue';
        return axiosClient.post(url, {
            workingAccount: params.WorkingAccount,
            currency: params.Currency,
            chequeID: params.ChequeID,
            chequeStatus: params.ChequeStatus,
            issueDate: params.IssueDate,
            issuedQuantity: params.IssueQuantity,
            chequeNoStart: params.ChequeNoStart
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
    validateIssue: async (params, id) => {
        const url = `/cheque/issue/validate/${id}`;
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
    getIssue: async (id) => {
        const url = `/cheque/issue/${id}`;
        return axiosClient.get(url)
    },
    enquiryIssue: async (params) => {
        const url = '/cheque/issue/enquiry';
        return axiosClient.post(url, {
            chequeRef: params.ChequeRef,
            chequeType: params.ChequeType,
            chequeNo: params.ChequeNo,
            workingAccount: params.WorkingAccount,
            issuedDate: params.IssuedDate
         })
    },
    withdrawal: async (params) => {
        const url = '/cheque/withdrawal';
        return axiosClient.post(url, {
            chequeID: params.ChequeID,
            chequeNo: params.ChequeNo,
            amountLCY: params.AmountLCY,
            chequeType: params.ChequeType,
            tellerID: params.TellerID,
            dealRate: params.DealRate,
            waiveCharges: params.WaiveCharges,
            narrative: params.Narrative,
            currency: params.Currency,
            currencyPaid: params.CurrencyPaid,
            beneficiaryName: params.BeneficiaryName,
            beneficiaryAddress: params.BeneficiaryAddress,
            beneficiaryLegalID: params.BeneficiaryLegalID,
            issuedDate: params.IssuedDate,
            placeOfIssue: params.PlaceOfIssue
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
    validateWithdrawal: async(params, id) => {
        const url = `/cheque/withdrawal/validate/${id}`;
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
    getWithdrawal: async(id) => {
        const url = `/cheque/withdrawal/get/${id}`;
        return axiosClient.get(url)
    },
    enquiryWithdrawal: async(params) => {
        const url = '/cheque/withdrawal/enquiry';
        return axiosClient.post(url, {
            withdrawalID: params.WithdrawalID,
            customerID: params.CustomerID,
            chequeType: params.ChequeType,
            workingAccount: params.WorkingAccount,
            customerName: params.CustomerName,
            legalID: params.LegalID,
            chequeNo: params.ChequeNo,
            withdrawalDate: params.WithdrawalDate,
            amountfr: params.Amountfr,
            amountto: params.Amountto

        })

    },
    transfer: async (params) => {
        const url = '/cheque/transfer';
        return axiosClient.post(url, {
            chequeID: params.ChequeID,
            chequeNo: params.ChequeNo,
            debitAmount: params.DebitAmount,
            chequeType: params.ChequeType,
            valueDate: params.ValueDate,
            dealRate: params.DealRate,
            creditAccount: params.CreditAccount,
            waiveCharges: params.WaiveCharges,
            exposureDate: params.ExposureDate,
            narrative: params.Narrative,
            beneficiaryName: params.BeneficiaryName,
            beneficiaryAddress: params.BeneficiaryAddress,
            beneficiaryLegalID: params.BeneficiaryLegalID,
            issuedDate: params.IssuedDate,
            placeOfIssue: params.PlaceOfIssue,
            debitCurrency: params.DebitCurrency,
            creditCurrency: params.CreditCurrency,
            beneficiaryAccount: params.BeneficiaryAccount
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
    validateTransfer: async(params, id) => {
        const url = `/cheque/transfer/validate/${id}`;
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
    getTransfer: async(id) => {
        const url = `/cheque/transfer/get/${id}`;
        return axiosClient.get(url)
    },
    enquiryTransfer:  async(params) => {
        const url = '/cheque/transfer/enquiry';
        return axiosClient.post(url, {
            transferID: params.TransferID,
            customerID: params.CustomerID,
            chequeType: params.ChequeType,
            workingAccount: params.WorkingAccount,
            customerName: params.CustomerName,
            legalID: params.LegalID,
            chequeNo: params.ChequeNo,
            transferDate: params.WithdrawalDate,
            amountfr: params.Amountfr,
            amountto: params.Amountto
        })

    },
}
    export default chequeApi;