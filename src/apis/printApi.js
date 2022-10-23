import axiosClient from "./axiosClient";

const printApi = {
    individualCustomer: async (id) => {
        const url = `export/individual/${id}`;
        return axiosClient.get(url);
    }, 
    corporateCustomer:  async (id) => {
        const url = `export/corporate/${id}`;
        return axiosClient.get(url);
    }, 
    deposit: async (id) => {
        const url = `export/deposit/${id}`;
        return axiosClient.get(url);
    },
    withdrawal: async (id) => {
        const url = `export/withdrawal/${id}`;
        return axiosClient.get(url);
    },
    transfer: async (id) => {
        const url = `export/transfer/${id}`;
        return axiosClient.get(url);
    }
}
export default printApi;