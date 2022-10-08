import axiosClient from "./axiosClient";

const currencyApi = {
    getAll: (params) => {
        const url = '/storage/get_currency';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_currency/${id}`;
        return axiosClient.get(url);
    },

}
    export default currencyApi;