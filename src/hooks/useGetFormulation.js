import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useGetFormulation = (id) => {

    const {data, error, isLoading} = useSWR(`${import.meta.env.VITE_API_URL_MASTER}act=mf&id=${id}`, fetcher, {
       /* revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false*/
        refreshInterval: 1000
    }); 
    return {
        data, 
        error,
        isLoading
    }
}

export default useGetFormulation;