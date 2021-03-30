import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const userToTurn = this.usersRepository.findById(user_id);
    if (!userToTurn) {
      throw new Error("There's no user attached to this id");
    }
    const nowAdmin = this.usersRepository.turnAdmin(userToTurn);
    return nowAdmin;
  }
}

export { TurnUserAdminUseCase };
