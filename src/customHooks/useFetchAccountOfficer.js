import { useEffect, useRef, useState } from "react";
import accountOfficerApi from "../apis/accountOfficerApi";


const useFetchAccountOfficer = () => {
    const cache = useRef({});
    const [accountOfficerList, setAccountOfficerList] = useState([]);
    useEffect(() => 
    {
        const fetchAccountOfficerList = async () => {
            if (cache.current.length === undefined) {
                const response = await accountOfficerApi.getAll();
                cache.current = response.rows
                setAccountOfficerList(response.rows) 
            } else {
                setAccountOfficerList(cache.current)
            }
        }
        fetchAccountOfficerList();
    }, [])
    return accountOfficerList;
}

export default useFetchAccountOfficer

