import { useEffect, useRef, useState } from "react";
import countryApi from "../apis/countryApi";


const useFetchCountry = () => {
    const cache = useRef({});
    const [countryList, setCountryList] = useState([]);
    useEffect(() => 
    {
        const fetchCountryList = async () => {
            if (cache.current.length === undefined) {
                const response = await countryApi.getAll();
                cache.current = response.rows
                setCountryList(response.rows) 
            } else {
                setCountryList(cache.current)
            }
        }
        fetchCountryList();
    }, [])
    return countryList;
}

export default useFetchCountry

