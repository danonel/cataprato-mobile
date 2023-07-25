import { request } from "../../http/axios";
import { GetOneParams, HttpClient, PostParams } from "../../http/http-client";
import { ApiUserResponse } from "../types/api-response.type";


export class UserHttpClient implements HttpClient<ApiUserResponse> {
  
  async getOne(props: GetOneParams): Promise<ApiUserResponse> {
    const url = `${props.url}/${props.id}`
    const response = (await request.get<ApiUserResponse>(url, {...props.options}))
    return response.data
  }
  async create(props: PostParams<Omit<ApiUserResponse, "id">>): Promise<string> {
    const url = `${props.url}`
    const response = (await request.post<string>(url, props.data))
    return response.data
  }

}