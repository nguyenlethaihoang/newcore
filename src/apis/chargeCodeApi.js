import axiosClient from "./axiosClient";

const chargeCodeApi = {
    getAll: (params) => {
        const url = '/storage/get_charge_code';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_charge_code/${id}`;
        return axiosClient.get(url);
    },

}
    export default chargeCodeApi;