import { useEffect, useRef, useState } from "react";
import mainSectorApi from "../apis/mainSectorApi";


const useFetchMainSector = () => {
    const cache = useRef({});
    const [mainSectorList, setMainSectorList] = useState([]);
    useEffect(() => 
    {
        const fetchMainSectorList = async () => {
            if (cache.current.length === undefined) {
                const response = await mainSectorApi.getAll();
                cache.current = response.rows
                setMainSectorList(response.rows) 
            } else {
                setMainSectorList(cache.current)
            }
        }
        fetchMainSectorList();
    }, [])
    return mainSectorList;
}

export default useFetchMainSector

