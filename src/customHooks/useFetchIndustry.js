import { useEffect, useRef, useState } from "react";
import industryApi from "../apis/industryApi";


const useFetchIndustry = () => {
    const cache = useRef({});
    const [industryList, setIndustryList] = useState([]);
    useEffect(() => 
    {
        const fetchIndustryList = async () => {
            if (cache.current.length === undefined) {
                const response = await industryApi.getAll();
                cache.current = response.data.subIndustry
                setIndustryList(response.data.subIndustry) 
            } else {
                setIndustryList(cache.current)
            }
        }
        fetchIndustryList();
    }, [])
    return industryList;
}

export default useFetchIndustry

