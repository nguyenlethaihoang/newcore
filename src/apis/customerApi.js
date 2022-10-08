import { PartyModeSharp } from "@mui/icons-material";
import axiosClient from "./axiosClient";

const customerApi = {
    getAll: (params) => {
        const url = '/customer/get_all_customer';
        return axiosClient.get(url, { params });
    },
    enquiry: (params) => {
        const url = '/customer/enquiry_customer';
        return axiosClient.post(url, {
            customerType: params.CustomerType,
            customerID: params.CustomerID,
            GB_FullName: params.GB_FullName,
            phoneNumber: params.PhoneNumber,
            docID: params.DocID,
            mainSector: params.MainSector,
            subSector: params.SubSector,
            mainIndustry: params.MainIndustry,
            subIndustry: params.SubIndustry
        });
    },
    getIndividual: (id) => {
        const url = `/customer/get_individual_customer/${id}`;
        return axiosClient.get(url);
    },
    getCorporate: (id) => {
        const url = `/customer/get_corporate_customer/${id}`;
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
    updateIndividual: async (params, id) => {
        const url = `/customer/update_individual_customer/${id}`;
        return await axiosClient.put(url, { 
                firstName: params.FirstName,
                lastName: params.LastName,
                middleName: params.MiddleName,    
                GB_ShortName: params.GBShortName,
                GB_FullName: params.GBFullName,
                birthday: params.Birthday,
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
                docID: params.DocID,
                docIssuePlace: params.DocIssuePlace,
                docIssueDate: params.DocExporyDate,
                mainIndustry: params.MainIndustry,
                industry: params.Industry,
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
    },

    updateCorporate: async (params, id) => {
        const url = `/customer/update_corporate_customer/${id}`;
        return await axiosClient.put(url, {    
                GB_ShortName: params.GBShortName,
                GB_FullName: params.GBFullName,
                GB_Street: params.GBStreet,
                GB_Towndist: params.GBTownDist,
                GB_Country: params.GBCountry,
                // incorpDate: params.IncorpDate,
                contactPerson: params.ContactPerson,
                position: params.Position,
                telephone: params.Telephone,
                officeNumber: params.OfficeNumber,

                emailAddress: params.EmailAddress,
                remarks: params.Remarks,
                cityProvince: params.CityProvince,
                GB_Country: params.GBCountry,
                nationality: params.Nationality,
                residence: params.Residence,
                doctype: params.DocType,
                docID: params.DocID,
                docIssuePlace: params.DocIssuePlace,
                // docIssueDate: params.DocExporyDate,
                mainIndustry: params.MainIndustry,
                industry: params.Industry,
                mainSector: params.MainSector ,
                sector: params.SubSector ,
                accountOfficer: params.AccountOfficer,
            })
            .then(res => {
                return ('success')
            })
            .catch(err => {
                console.log("err")
                console.log(err)
                return ('fail')
            })
        ;
    },

}
    export default customerApi;