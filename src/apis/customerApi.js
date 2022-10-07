import axiosClient from "./axiosClient";

const customerApi = {
    getAll: (params) => {
        const url = '/customer/get_all_customer';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_country/${id}`;
        return axiosClient.get(url);
    },
    postIndividual: async (params) => {
        const url = '/customer/create_individual_customer';
        return await axiosClient.post(url, { 
                firstName: params.FirstName,
                lastName: params.LastName,
                middleName: params.MiddleName,    
                GB_ShortName: params.GBShortName,
                GB_FullName: params.GBFullName,
                GB_Street: params.GBStreet,
                GB_Towndist: params.GBTownDist,
                mobilePhone: params.MobilePhone,
                docID: params.DocID,
                emailAddress: params.EmailAddress,
    
                cityProvince: params.CityProvince,
                GB_Country: params.GBCountry,
                nationality: params.Nationality,
                residence: params.Residence,
                doctype: params.DocType,
                mainSector: params.MainSector,
                // mainIndustry: checkName(bioMainIndustry, txtMainIndustry),
                accountOfficer: params.AccountOfficer,
            })
            .then(res => {
                return ('success')
            })
            .catch(err => {
                return ('fail')
            })
        ;
    },
    postCorporate: async (params) => {
        const url = '/customer/create_corporate_customer';
        return await axiosClient.post(url, {     
                GB_ShortName: params.GBShortName,
                GB_FullName: params.GBFullName,
                GB_Street: params.GBStreet,
                GB_Towndist: params.GBTownDist,
                docID: params.DocID,
                // Time params cannot add
                // docIssuePlace: params.DocIssuePlace,
                // docIssueDate:  params.DocIssueDate,
                // docExpiryDate:  params.DocExpiryDate,

                contactPerson: params.ContactPerson,
                position: params.Position,
                officeNumber: params.Telephone,
                emailAddress: params.EmailAddress,
                remarks: params.Remarks,
    
                cityProvince: params.CityProvince ,
                GB_Country: params.GBCountry ,
                nationality: params.Nationality ,
                residence: params.Residence ,
                doctype: params.DocType ,
                mainSector: params.MainSector ,
                sector: params.SubSector ,
                mainIndustry: params.MainIndustry ,
                industry: params.Industry ,
                accountOfficer: params.AccountOfficer ,
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
    }

}
    export default customerApi;