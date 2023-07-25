import { CreateUserDTO } from "../../dto/create-user.dto";
import { UserHttpService } from "../http-service/user-http.service";

export class CreateUserService {
  constructor(private userHttpService: UserHttpService) {}

  async create(props: CreateUserDTO) {
    const user = await this.userHttpService.create({
      email: props.email
    })
    return user
  }
}