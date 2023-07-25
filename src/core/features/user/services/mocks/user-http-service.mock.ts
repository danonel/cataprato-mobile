import { RequestConfig } from "../../../http/http-client"
import { CreateUserDTO } from "../../dto/create-user.dto"
import { ApiUserResponse } from "../../types/api-response.type"
import { UserHttpService } from "../http-service/user-http.service"

export class UserHttpServiceMock extends UserHttpService {

  create(user: CreateUserDTO): Promise<string> {
    return new Promise(resolve => resolve(user.email))
  }
  findOne(id: string, options?: RequestConfig | undefined): Promise<ApiUserResponse> {
    return new Promise(resolve => resolve({
      email: 'asbaba',
      id
    }))
  }
}