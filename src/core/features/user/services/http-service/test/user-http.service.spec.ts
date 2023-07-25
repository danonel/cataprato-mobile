import { RequestConfig } from "../../../../http/http-client";
import { HttpUserClientSpy } from "./http-client.spy";
import { UserHttpService } from "../user-http.service";
import { User } from "../../../user.entity";


describe('get-user', () => {
  let userHttpService: UserHttpService;
  let httpClient: HttpUserClientSpy
  beforeEach(() => {
    httpClient = new HttpUserClientSpy()
    userHttpService = new UserHttpService(httpClient)
  })
  afterAll(() => {
    httpClient.clear()
  })
  describe('findOne', () => {

    it("should return a promise when calling only with an id", async () => {
      const newUserId = await userHttpService.create({
        email: 'asbaba',

      })
      const sut = jest.spyOn(userHttpService, 'findOne')

      const user = await userHttpService.findOne(newUserId)
      expect(sut).toHaveBeenCalledTimes(1)
      expect(sut).toHaveBeenCalledWith(newUserId)
      expect(user).toBeInstanceOf(User)
  
    })
    it("should return a promise with id and options", async () => {
      const newUserId = await userHttpService.create({
        email: 'asbaba',
      })
      const options: RequestConfig = {
        headers: {
          Authorization: 'asbaba'
        }
      }
      const sut = jest.spyOn(userHttpService, 'findOne')

      const user = await userHttpService.findOne(newUserId, options)
      expect(sut).toHaveBeenCalledTimes(1)
      expect(sut).toHaveBeenCalledWith(newUserId, { headers: { Authorization: 'asbaba' } })
      expect(user).toBeInstanceOf(User)
    })
    it('should throw a UserNotFound error when user not exists',async  () => {
      jest.spyOn(userHttpService, 'findOne')
      const user = userHttpService.findOne('asbaba')
      expect(user).rejects.toThrow('user already exists')
    })
  })
})