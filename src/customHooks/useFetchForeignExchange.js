import { useEffect, useRef, useState } from "react";
import foreignExchangeApi from "../apis/foreignExchangeApi";


const useFetchForeignExchange = () => {
    // const cache = useRef({});
    const [foreignExchangeList, setForeignExchangeList] = useState([]);
    useEffect(() => 
    {
        const fetchForeignExchangeList = async () => {
            const response = await foreignExchangeApi.getAll();
            setForeignExchangeList(response.data) 
        }
        fetchForeignExchangeList();
    }, [])
    return foreignExchangeList;
}

export default useFetchForeignExchange

