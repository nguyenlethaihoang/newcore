import axiosClient from "./axiosClient";

const relationCodeApi = {
    getAll: (params) => {
        const url = '/storage/get_relation';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_relation/${id}`;
        return axiosClient.get(url);
    },

}
    export default relationCodeApi;