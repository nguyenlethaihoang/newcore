import axiosClient from "./axiosClient";

const industryApi = {
    getAll: (params) => {
        const url = '/storage/get_subindustry';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_subindustry/${id}`;
        return axiosClient.get(url);
    },

}
    export default industryApi;