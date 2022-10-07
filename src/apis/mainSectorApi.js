import axiosClient from "./axiosClient";

const mainSectorApi = {
    getAll: (params) => {
        const url = '/storage/get_sector';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_sector/${id}`;
        return axiosClient.get(url);
    },

}
    export default mainSectorApi;