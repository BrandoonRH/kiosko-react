import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useGetRawMaterials = () => {
    const {data, error, isLoading} = useSWR(`${import.meta.env.VITE_API_URL_MASTER}act=rp&nm=MP`, fetcher, {
        /*revalidateIfStale: false,
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

export default useGetRawMaterials;