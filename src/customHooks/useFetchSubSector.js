import { useEffect, useRef, useState } from "react";
import subSectorApi from "../apis/subSectorApi";


const useFetchSubSector = () => {
    const cache = useRef({});
    const [subSectorList, setSubSectorList] = useState([]);
    useEffect(() => 
    {
        const fetchSubSectorList = async () => {
            if (cache.current.length === undefined) {
                const response = await subSectorApi.getAll();
                cache.current = response.data.subsector
                setSubSectorList(response.data.subsector) 
            } else {
                setSubSectorList(cache.current)
            }
        }
        fetchSubSectorList();
    }, [])
    return subSectorList;
}

export default useFetchSubSector

