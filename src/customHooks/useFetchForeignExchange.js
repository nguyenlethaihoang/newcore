import { useEffect, useRef, useState } from "react";
import foreignExchangeApi from "../apis/foreignExchangeApi";


const useFetchForeignExchange = () => {
    const cache = useRef({});
    const [foreignExchangeList, setForeignExchangeList] = useState([]);
    useEffect(() => 
    {
        const fetchForeignExchangeList = async () => {
            if (cache.current.length === undefined) {
                const response = await foreignExchangeApi.getAll();
                cache.current = response.data
                setForeignExchangeList(response.data) 
            } else {
                setForeignExchangeList(cache.current)
            }
        }
        fetchForeignExchangeList();
    }, [])
    return foreignExchangeList;
}

export default useFetchForeignExchange

