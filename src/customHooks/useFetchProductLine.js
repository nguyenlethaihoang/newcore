import { useEffect, useRef, useState } from "react";
import productLineApi from "../apis/productLineApi";


const useFetchProductLine = () => {
    const cache = useRef({});
    const [productLineList, setProductLineList] = useState([]);
    useEffect(() => 
    {
        const fetchProductLineList = async () => {
            if (cache.current.length === undefined) {
                const response = await productLineApi.getAll();
                cache.current = response.rows
                setProductLineList(response.rows) 
            } else {
                setProductLineList(cache.current)
            }
        }
        fetchProductLineList();
    }, [])
    return productLineList;
}

export default useFetchProductLine

