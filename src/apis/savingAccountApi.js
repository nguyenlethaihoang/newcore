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
    },

    postCreatePeriodic: async (params) => { 
        const url = '/account/saving_account/open_periodic';
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
                console.log('res')
                console.log(res)
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
    postEnquiryPeriodic: async (params) => {
        const url = '/account/saving_account/enquiry_periodic';
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
    },
    postCreateDiscounted: async (params) => { 
        const url = '/account/saving_account/open_discounted';
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
                console.log('res')
                console.log(res)
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
    postUpdate: async (id, params) => {
        const url = `/account/saving_account/update/${id}`;
        return await axiosClient.put(url, {
            customerID: params.CustomerID,
            valueDate: params.ValueDate,
            workingAccount: params.WorkingAccount,
            amountLCY: params.AmountLCY,
            amountFCY: params.AmountFCY,
            narrativeInterest: params.NarrativeInterest,
            narrative: params.Narrative,
            teller: params.Teller,
            ecxhRate: params.EcxhRate,
            paymentCurrency: params.PaymentCurrency,
            currency: params.Currency,
            account: params.Account,
            debitAccount: params.DebitAccount,
            creditAccount: params.CreditAccount,
            joinHolder: params.JoinHolder,
            productLine: params.ProductLine,
            term: params.Term,
            accountOfficer: params.AccountOfficer,
            dealRate: params.DealRate,
            amountLCYInterest: params.AmountLCYInterest,
            amountFCYInterest: params.AmountFCYInterest,
            category: params.Category,
            accountTitle: params.AccountTitle,
            shortTitle: params.ShortTitle,
            notes: params.Notes,
            product: params.Product,
            principalAmount: params.PrincipalAmount,
            interestRate: params.InterestRate,
            maturityDate: params.MaturityDate,
            accountNo: params.AccountNo,
            paymentNo: params.PaymentNo,
            schedules: params.Schedules,
            schedulesType: params.SchedulesType,
            frequency: params.Frequency,
            rolloverPR: params.FolloverPR,
            status: params.Status,
            relationShip: params.RelationShip
    })},
    postCloseArrear: async (id, params) => { 
        const url = `/account/saving_account/close/${id}`;
        return await axiosClient.post(url, {
            customerID: params.CustomerID,
            customerName: params.CustomerName,
            valueDate: params.ValueDate,
            endDate: params.EndDate,
            // số tiền khi tạo saving
            originPrincipal: params.OriginPrincipal,
            // số tiền khi tạo + lãi
            principal: params.Principal,
            // tỉ suất
            interestRate: params.InterestRate,
            // tiền lãi vn
            totalAmountLCY: params.TotalAmountLCY,
            // tiền lãi ngoại tệ
            totalAmountFCY: params.TotalAmountFCY,
            narrative: params.Narrative,
            dealRate: params.DealRate,
            tellerID: params.TellerID,
            // chả biết nữa
            creditCCY: params.CreditCCY,
            WorkingAccount: params.WorkingAccount,
            customerBalance: params.CustomerBalance,
        })
            .then(res => {
                return ('success')
            })
            .catch(err => {
                console.log('err')
                console.log(err)
                return ('fail')
            })
        ;
    },
} 
    export default savingAccountApi;