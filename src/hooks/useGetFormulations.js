import useSWR from "swr";
import fetcher from "../lib/fetcher";
`${import.meta.env.VITE_API_URL}/api`
const useGetFormulations = () => {
    const {data, error, isLoading} = useSWR(`${import.meta.env.VITE_API_URL_MASTER}act=rf`, fetcher, {
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

export default useGetFormulations;