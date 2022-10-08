import axiosClient from "./axiosClient";

const productLineApi = {
    getAll: (params) => {
        const url = 'storage/get_product_line';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `storage/get_product_line/${id}`;
        return axiosClient.get(url);
    },

}
    export default productLineApi;