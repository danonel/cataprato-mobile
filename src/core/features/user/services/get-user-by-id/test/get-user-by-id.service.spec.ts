import { HttpClient } from "../../../../http/http-client"
import { User } from "../../../user.entity"
import { UserHttpServiceMock } from "../../mocks/user-http-service.mock"
import { GetUserByIdService } from "../get-user-by-id.service"


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