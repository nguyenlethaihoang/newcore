import { useEffect, useRef, useState } from "react";
import chargeCodeApi from "../apis/chargeCodeApi";


const useFetchChargeCode = () => {
    const cache = useRef({});
    const [chargeCodeList, setChargeCodeList] = useState([]);
    useEffect(() => 
    {
        const fetchChargeCodeList = async () => {
            if (cache.current.length === undefined) {
                const response = await chargeCodeApi.getAll();
                cache.current = response.rows
                setChargeCodeList(response.rows) 
            } else {
                setChargeCodeList(cache.current)
            }
        }
        fetchChargeCodeList();
    }, [])
    return chargeCodeList;
}

export default useFetchChargeCode

