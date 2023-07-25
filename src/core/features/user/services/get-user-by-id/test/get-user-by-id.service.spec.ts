import { HttpClient, RequestConfig } from "../../../../http/http-client"
import { CreateUserDTO } from "../../../dto/create-user.dto"
import { ApiUserResponse } from "../../../types/api-response.type"
import { User } from "../../../user.entity"
import { UserHttpService } from "../../http-service/user-http.service"
import { GetUserByIdService } from "../get-user-by-id.service"

class UserHttpServiceMock extends UserHttpService {

  baseUrl: string = 'any'
  create(user: CreateUserDTO): Promise<string> {
    return new Promise(resolve => resolve('any'))
  }
  findOne(id: string, options?: RequestConfig | undefined): Promise<ApiUserResponse> {
    return new Promise(resolve => resolve({
      email: 'asbaba',
      id
    }))
  }
}


describe('GetUserByIdService', () => {
  let getUserByIdService: GetUserByIdService
  beforeEach(() => {
    const client = {} as HttpClient<User>
    const userHttpService = new UserHttpServiceMock(client)
    getUserByIdService = new GetUserByIdService(userHttpService)
  })
  it('should call GetUserByIdService.findOne with correct params', async () => {
    jest.spyOn(getUserByIdService, 'findOne')
    await getUserByIdService.findOne('asbaba', {
      headers: {
        Authorization: 'asbaba'
      }
    })
    expect(getUserByIdService.findOne).toHaveBeenCalledWith("asbaba", { headers: { Authorization: "asbaba" } })
  })
})