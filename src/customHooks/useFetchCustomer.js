import { useEffect, useRef, useState } from "react";
import customerApi from "../apis/customerApi";


const useFetchCustomer = () => {
    const [customerList, setCustomerList] = useState([]);
    useEffect(() => 
    {
        const fetchCustomerList = async () => {
            const response = await customerApi.getAll();
            setCustomerList(response.data.customer) 
        }
        fetchCustomerList();
    }, [])
    return customerList;
}

export default useFetchCustomer

