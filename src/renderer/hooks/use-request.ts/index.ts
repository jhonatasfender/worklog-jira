import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

export const api = axios.create({ baseURL: 'http://localhost:9050' });

export type Request = AxiosRequestConfig;

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate'
  > {
  data?: Data;
  response?: AxiosResponse<Data>;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    'fallbackData'
  > {
  fallbackData?: Data;
}

export default function useRequest<Data = unknown, Error = unknown>(
  request: Request,
  { fallbackData, ...config }: Config<Data, Error> = {},
): Return<Data, Error> {
  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request && JSON.stringify(request),
    () => api.request<Data>(request),
    {
      ...config,
      fallbackData: fallbackData && {
        status: 200,
        statusText: 'InitialData',
        config: request,
        headers: {},
        data: fallbackData,
      },
    },
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    mutate,
  };
}
