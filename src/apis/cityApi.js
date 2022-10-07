import axiosClient from "./axiosClient";

// api/cityApi.js
const cityApi = {
    getAll: (params) => {
        const url = '/storage/get_city_province';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_city_province/${id}`;
        return axiosClient.get(url);
    },

}
    export default cityApi;