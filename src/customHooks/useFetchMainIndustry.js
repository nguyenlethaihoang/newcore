import { useEffect, useRef, useState } from "react";
import mainIndustryApi from "../apis/mainIndustryApi";


const useFetchMainIndustry = () => {
    const cache = useRef({});
    const [mainIndustryList, setMainIndustryList] = useState([]);
    useEffect(() => 
    {
        const fetchMainIndustryList = async () => {
            if (cache.current.length === undefined) {
                const response = await mainIndustryApi.getAll();
                cache.current = response.rows
                setMainIndustryList(response.rows) 
            } else {
                setMainIndustryList(cache.current)
            }
        }
        fetchMainIndustryList();
    }, [])
    return mainIndustryList;
}

export default useFetchMainIndustry

