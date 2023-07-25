import { HttpClient, RequestConfig } from "../../../../http/http-client"
import { User } from "../../../user.entity"
import { UserHttpServiceMock } from "../../mocks/user-http-service.mock"
import { CreateUserService } from "../create-user.service"


describe('CreateUser', () => {
  let getUserByIdService: CreateUserService
  beforeEach(() => {
    const client = {} as HttpClient<User>
    const userHttpService = new UserHttpServiceMock(client)
    getUserByIdService = new CreateUserService(userHttpService)
  })
  it('should call GetUserByIdService.findOne with correct params', async () => {
    jest.spyOn(getUserByIdService, 'create')
    await getUserByIdService.create({
      email: 'asbaba'
    })
    expect(getUserByIdService.create).toHaveBeenCalledWith({email: "asbaba"})
  })
})