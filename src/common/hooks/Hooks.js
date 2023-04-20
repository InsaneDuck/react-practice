import {useEffect, useState} from "react";

export const useFetch = (url, username, password) => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetchData(url, username, password).then(d => setData(d));
    }, [data]);
    return [data]
}

export async function fetchData(url, username, password) {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${username}:${password}`)}`
    }

    const response = await fetch(url, {headers});
    return await response.json();
}