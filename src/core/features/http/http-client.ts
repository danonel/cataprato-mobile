import { AxiosRequestConfig } from "axios";
export interface PostParams<T> {
  url: string;
  data: T
}

export interface GetOneParams {
  id: string
  url: string
  options?: RequestConfig
}

export type RequestConfig = AxiosRequestConfig
export interface HttpClient<T> {
  getOne(props: GetOneParams): Promise<T>
  create(props: PostParams<Omit<T, 'id'>>): Promise<string>
}
