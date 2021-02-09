import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import { useRedux } from "./Reducer";
import config from '../../config';

interface StateType<P> {
    initial: boolean;
    complete: boolean;
    loading: boolean;
    error: any;
    data: P | null;
}

type UseSpotifyReturn<P> = StateType<P> & {
    call: () => Promise<AxiosResponse<any>>
}

export const useSpotify = <P = any>(endpoint: string, options?: AxiosRequestConfig): UseSpotifyReturn<P> => {
    const [{token}] = useRedux()
    const [states, setStates] = useState<StateType<P>>({
        initial: true,
        complete: false,
        loading: false,
        data: null,
        error: null
    })
    return {
        ...states,
        call: () => {
            setStates(prev => ({
                ...prev,
                loading: true,
                complete: false,
            }))
            return axios.get(`${config.api.baseUrl}${endpoint}`, {
                ...options,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    ...options?.headers
                }
            }).then((response) => {
                setStates(prev => ({
                    ...prev,
                    initial: false,
                    loading: false,
                    complete: true,
                    data: response.data
                }))

                return response
            })
            .catch((error) => {
                setStates(prev => ({
                    ...prev,
                    initial: false,
                    loading: false,
                    complete: true,
                    error
                }))
                return 'response' in error ? error.response : error 
            })
        }
    }
}