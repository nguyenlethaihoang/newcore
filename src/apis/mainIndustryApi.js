import axiosClient from "./axiosClient";

const mainIndustryApi = {
    getAll: (params) => {
        const url = '/storage/get_industry';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_industry/${id}`;
        return axiosClient.get(url);
    },

}
    export default mainIndustryApi;