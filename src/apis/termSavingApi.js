import axiosClient from "./axiosClient";

// api/termSavingApi.js
const termSavingApi = {
    getAll: (params) => {
        const url = '/storage/get_saving_term';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_saving_term/${id}`;
        return axiosClient.get(url);
    },

}
    export default termSavingApi;