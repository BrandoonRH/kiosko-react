import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useGetUnits = () => {
    const {data, error, isLoading} = useSWR(`${import.meta.env.VITE_API_URL_MASTER}act=gu`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    }); 
    return {
        data, 
        error,
        isLoading
    }
}

export default useGetUnits;