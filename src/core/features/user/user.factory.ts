import axios from "axios"
import { HttpClient } from "../http/http-client"
import { UserHttpService } from "./services/http-service/user-http.service"
import { GetUserByIdService } from "./services/get-user-by-id/get-user-by-id.service"
import { User } from "./user.entity"

export const getUserById = () => {
  const client: HttpClient<User> = {
    getOne: (props) => axios.get(`${props.url}/${props.id}`, props.options),
    create: (props) => axios.post(`${props.url}`, props.data),
  }
  const userHttpService = new UserHttpService(client)
  return new GetUserByIdService(userHttpService)
}