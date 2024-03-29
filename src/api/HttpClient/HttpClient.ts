import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_ENDPOINTS } from '../../utils/endpointConstants';
import { getLocalStorageValue } from '../../helpers/getLocalStorageValue';
import { LOCAL_STORAGE_TOKEN_OPTION } from '../../utils/globalConstants';

const axiosConfig = {
  baseURL: `${API_ENDPOINTS.BASE_URL}`,
};
const axiosInstance = axios.create(axiosConfig);

class HttpClient {
  private httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
    const token = getLocalStorageValue(LOCAL_STORAGE_TOKEN_OPTION);
    if (token) {
      this.httpClient.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;
    }
  }

  get<ResponseData>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ResponseData> {
    return this.httpClient.get(url, config);
  }

  post<ResponseData, RequestBody>(
    url: string,
    body: RequestBody,
    config?: AxiosRequestConfig,
  ): Promise<ResponseData> {
    return this.httpClient.post(url, body, config);
  }

  put<ResponseData, RequestBody>(
    url: string,
    body?: RequestBody,
    config?: AxiosRequestConfig,
  ): Promise<ResponseData> {
    return this.httpClient.put(url, body, config);
  }

  delete<ResponseData>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ResponseData> {
    return this.httpClient.delete(url, config);
  }
}

export const httpClient = new HttpClient(axiosInstance);
