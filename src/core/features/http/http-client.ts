import { AxiosRequestConfig } from "axios";
import { User } from "../user/user.entity";
import { CreateUserDTO } from "../user/dto/create-user.dto";


export interface PostParams {
  url: string;
  data: CreateUserDTO
}

export interface GetOneParams {
  id?: string
  url: string
  options?: RequestConfig
}

export type RequestConfig = AxiosRequestConfig
export interface UserHttpClient {
  getOne(props: GetOneParams) : Promise<User>
  create(props: PostParams): Promise<string>
}
