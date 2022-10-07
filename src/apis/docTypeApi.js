import axiosClient from "./axiosClient";

const docTypeApi = {
    getAll: (params) => {
        const url = '/storage/get_doctype';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/storage/get_doctype/${id}`;
        return axiosClient.get(url);
    },

}
    export default docTypeApi;