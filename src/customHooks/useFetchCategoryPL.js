import { useEffect, useRef, useState } from "react";
import categoryplAPI from "../apis/categoryplAPI";


const useFetchCategoryPL = () => {
    const cache = useRef({});
    const [categoryPL, setCategoryPL] = useState([]);
    useEffect(() => 
    {
        const fetchCategoryPL = async () => {
            if (cache.current.length === undefined) {
                const response = await categoryplAPI.getAll();
                cache.current = response.rows
                setCategoryPL(response.rows) 
            } else {
                setCategoryPL(cache.current)
            }
        }
        fetchCategoryPL();
    }, [])
    return categoryPL;
}

export default useFetchCategoryPL