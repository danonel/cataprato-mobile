
import { UserHttpService } from "./services/http-service/user-http.service"
import { GetUserByIdService } from "./services/get-user-by-id/get-user-by-id.service"
import { UserHttpClient } from "./http-client/user-http-client"

export const getUserById = () => {
  const userHttpClient = new UserHttpClient()
  const userHttpService = new UserHttpService(userHttpClient)
  return new GetUserByIdService(userHttpService)
}