import axiosClient from "./axiosClient";

const countryApi = {
    getAll: (params) => {
        const url = '/storage/get_country';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_country/${id}`;
        return axiosClient.get(url);
    },

}
    export default countryApi;