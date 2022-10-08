import { useEffect, useRef, useState } from "react";
import relationCodeApi from "../apis/relationCodeApi";


const useFetchRelationCode = () => {
    const cache = useRef({});
    const [relationCodeList, setRelationCodeList] = useState([]);
    useEffect(() => 
    {
        const fetchRelationCodeList = async () => {
            if (cache.current.length === undefined) {
                const response = await relationCodeApi.getAll();
                cache.current = response.rows
                setRelationCodeList(response.rows) 
            } else {
                setRelationCodeList(cache.current)
            }
        }
        fetchRelationCodeList();
    }, [])
    return relationCodeList;
}

export default useFetchRelationCode

