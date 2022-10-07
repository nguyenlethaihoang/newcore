import axiosClient from "./axiosClient";

const subSectorApi = {
    getAll: (params) => {
        const url = '/storage/get_subsector';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_subsector/${id}`;
        return axiosClient.get(url);
    },

}
    export default subSectorApi;