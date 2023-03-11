import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        const fetchData = async () => {
            try {
                const res = await fetchDataFromAPI(url);
                setLoading(false);
                setData(res);
            } catch (err) {
                setLoading(false);
                setError("Something went wrong!");
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
