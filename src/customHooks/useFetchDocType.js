import { useEffect, useRef, useState } from "react";
import docTypeApi from "../apis/docTypeApi";


const useFetchDocType = () => {
    const cache = useRef({});
    const [docTypeList, setDocTypeList] = useState([]);
    useEffect(() => 
    {
        const fetchDocTypeList = async () => {
            if (cache.current.length === undefined) {
                const response = await docTypeApi.getAll();
                cache.current = response.rows
                setDocTypeList(response.rows) 
            } else {
                setDocTypeList(cache.current)
            }
        }
        fetchDocTypeList();
    }, [])
    return docTypeList;
}

export default useFetchDocType

