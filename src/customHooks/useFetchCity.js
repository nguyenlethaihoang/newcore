import { useEffect, useRef, useState } from "react";
import cityApi from "../apis/cityApi";


const useFetchCity = () => {
    const cache = useRef({});
    const [cityList, setCityList] = useState([]);
    useEffect(() => 
    {
        const fetchCityList = async () => {
            if (cache.current.length === undefined) {
                const response = await cityApi.getAll();
                cache.current = response.rows
                setCityList(response.rows) 
            } else {
                setCityList(cache.current)
            }
        }
        fetchCityList();
    }, [])
    return cityList;
}

export default useFetchCity

