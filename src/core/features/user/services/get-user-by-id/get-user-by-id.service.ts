import { RequestConfig } from "../../../http/http-client";
import { UserHttpService } from "../http-service/user-http.service";

export class GetUserByIdService {
  constructor(private userHttpService: UserHttpService) {}

  async findOne(id: string, options?: RequestConfig) {
    const user = await this.userHttpService.findOne(id, {...options})
    return user
  }
}