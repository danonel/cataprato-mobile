import { RequestConfig, UserHttpClient, } from "../http/http-client"
import { CreateUserDTO } from "./dto/create-user.dto"
import { ApiUserResponse } from "./types/api-response.type"

export class UserHttpService {
  constructor(private readonly client: UserHttpClient) { }

  baseUrl: string = process.env.BASE_URL || ""

  async create(user: CreateUserDTO): Promise<string> {
    return await this.client.create({
      url: this.baseUrl,
      data: user
    })
  }

  async findOne(id: string, options?: RequestConfig): Promise<ApiUserResponse> {
    const user = await this.client.getOne({
      url: this.baseUrl,
      id,
      ...options
    })
    return user
  }
}