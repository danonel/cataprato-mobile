
import { UserHttpService } from "./services/http-service/user-http.service"
import { GetUserByIdService } from "./services/get-user-by-id/get-user-by-id.service"
import { UserHttpClient } from "./http-client/user-http-client"
import { CreateUserService } from "./services/create-user/create-user.service"

const userHttpClient = new UserHttpClient()
const userHttpService = new UserHttpService(userHttpClient)

export const getUserById = () => {
  return new GetUserByIdService(userHttpService)
}

export const createUser = () => {
  return new CreateUserService(userHttpService)
}