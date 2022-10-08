import { useEffect, useRef, useState } from "react";
import currencyApi from "../apis/currencyApi";


const useFetchCurrency = () => {
    const cache = useRef({});
    const [currencyList, setCurrencyList] = useState([]);
    useEffect(() => 
    {
        const fetchCurrencyList = async () => {
            if (cache.current.length === undefined) {
                const response = await currencyApi.getAll();
                cache.current = response.rows
                setCurrencyList(response.rows) 
            } else {
                setCurrencyList(cache.current)
            }
        }
        fetchCurrencyList();
    }, [])
    return currencyList;
}

export default useFetchCurrency

