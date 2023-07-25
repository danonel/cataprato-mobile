import { RequestConfig, HttpClient } from "../../../http/http-client"
import { CreateUserDTO } from "../../dto/create-user.dto"
import { ApiUserResponse } from "../../types/api-response.type"
import { User } from "../../user.entity"

export class UserHttpService {
  constructor(private readonly client: HttpClient<User>) { }


  async create(user: CreateUserDTO): Promise<string> {
    const url = ''
    return await this.client.create({
      url: url,
      data: {
        email: user.email
      }
    })
  }

  async findOne(id: string, options?: RequestConfig): Promise<ApiUserResponse> {
    const url = ''
    const user = await this.client.getOne({
      url,
      id,
      ...options
    })
    return user
  }
}