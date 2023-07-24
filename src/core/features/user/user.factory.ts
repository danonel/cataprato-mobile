import axios from "axios"
import { UserHttpClient } from "../http/http-client"
import { UserHttpService } from "./user-http.service"
import { UserService } from "./user.service"

export const userService = () => {
  const client: UserHttpClient = {
    getOne: (props) => axios.get(`${props.url}/${props.id}`, props.options),
    create: (props) => axios.post(`${props.url}`, props.data),
  }
  const userHttpService = new UserHttpService(client)
  return new UserService(userHttpService)
}