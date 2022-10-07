import axiosClient from "./axiosClient";

const accountOfficerApi = {
    getAll: (params) => {
        const url = '/storage/get_account_officer';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_account_officer/${id}`;
        return axiosClient.get(url);
    },

}
    export default accountOfficerApi;