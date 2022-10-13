import axiosClient from "./axiosClient";

const debitAccountApi = {
    getAll: (params) => {
        const url = '/account/debit_aacount/get_all';
        return axiosClient.get(url, { params });
    },
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
            isBlocked: params.isBlocked,
            isClosed: params.isClosed,
            isActive: params.isActive
        })
    },
    getID: async (id) => {
        const url = `account/debit_account/get/${id}`
        return axiosClient.get(url)
    },
    updateAccount: async (params, id) => {
        const url = `account/debit_account/update/${id}`;
        return axiosClient.put(url, {
            customerID: params.CustomerID,
            category: params.Category,
            productLine: params.ProductLine,
            currency: params.Currency,
            accountTitle: params.AccountTitle,
            shortTitle: params.ShortTitle,
            accountOfficer: params.AccountOfficer,
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
    closeAccount: async (params, id) => {
        const url = `account/debit_account/close/${id}`;
        return axiosClient.put(url, {
            paymentType: params.PaymentType,
            transferredAccount: params.TransferredAccount,
            closeDate: params.CloseDate,
            notes: params.Notes
        })
        .then(res => {
            return ('success')
        })
        .catch(err => {
            return ('fail')
        })
    },
    getClosure:  async (id) => {
        const url = `account/debit_account/get_closure/${id}`;
        return axiosClient.get(url)

    },
    blockAccount: async (params, id) => {
        const url = `account/debit_account/block/${id}`;
        return axiosClient.post(url, {
            startDate: params.StartDate,
            endDate: params.EndDate,
            amount: params.Amount,
            notes: params.Notes
        })
        .then(res => {
            return ('success')
        })
        .catch(err => {
            return ('fail')
        })
    },
    getBlocked:  async (id) => {
        const url = `account/debit_account/get_blockage/${id}`;
        return axiosClient.get(url)

    },
    unBlock:  async (params, id ) => {
        const url = `account/debit_account/unblock/${id}`;
        return axiosClient.put(url, {
            relievedDate: params.RelievedDate,
            notes: params.Notes
        })
        .then(res => {
            return ('success')
        })
        .catch(err => {
            return ('fail')
        })
    },
}
    export default debitAccountApi;