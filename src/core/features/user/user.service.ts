import { RequestConfig } from "../http/http-client";
import { UserHttpService } from "./user-http.service";

export class UserService {
  constructor(private userHttpService: UserHttpService) {}

  async findOne(id: string, options?: RequestConfig) {
    const user = await this.userHttpService.findOne(id, {...options})
    return user
  }

}