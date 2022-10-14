import axiosClient from "./axiosClient";

// api/CategoryPL.js
const categoryPL = {
    getAll: (params) => {
        const url = '/storage/get_charge_category';
        return axiosClient.get(url, { params });
    }
}
    export default categoryPL;