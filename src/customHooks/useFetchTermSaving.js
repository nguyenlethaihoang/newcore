import { useEffect, useRef, useState } from "react";
import termSavingApi from "../apis/termSavingApi";


const useFetchTermSaving = () => {
    const cache = useRef({});
    const [termSavingList, setTermSavingList] = useState([]);
    useEffect(() => 
    {
        const fetchTermSavingList = async () => {
            if (cache.current.length === undefined) {
                const response = await termSavingApi.getAll();
                cache.current = response.rows
                setTermSavingList(response.rows) 
            } else {
                setTermSavingList(cache.current)
            }
        }
        fetchTermSavingList();
    }, [])
    return termSavingList;
}

export default useFetchTermSaving

