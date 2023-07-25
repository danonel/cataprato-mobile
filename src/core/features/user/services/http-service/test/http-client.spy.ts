import {  GetOneParams, PostParams, HttpClient } from "../../../../http/http-client"
import { UserAlreadyExists } from "../../../errors/http-errors/user-already-exists.error"
import { UserNotFound } from "../../../errors/http-errors/user-not-found.error"
import { ApiUserResponse } from "../../../types/api-response.type"
import { User } from "../../../user.entity"



export class HttpUserClientSpy implements HttpClient<User> {

  private users: ApiUserResponse[] = []
  clear() {
    this.users = []
  }
  async create(props: PostParams<User>): Promise<string> {
    const newUser = new User(props.data.email)
    return new Promise((resolve, reject) => {
      const userAlreadyExists = this.users.find(user => user.id === newUser.id)
      if (userAlreadyExists) {
        throw new UserAlreadyExists(props.data.email)
      }
      this.users.push(newUser)
      resolve(newUser.id)
    })
  }
  async getOne({ id }: GetOneParams): Promise<ApiUserResponse> {
    return new Promise((resolve, reject) => {
      const user = this.users.find(user => user.id === id)
      if (!user) {
        return reject(new UserNotFound())
      }
      resolve(user)
    })
  }
}