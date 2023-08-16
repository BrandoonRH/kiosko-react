import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useGetUsers = () => {
    const {data, error, isLoading} = useSWR(`${import.meta.env.VITE_API_URL_MASTER}act=gusers`, fetcher, {
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

export default useGetUsers;