import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      });
      return response.status(201).json(user);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
  // handle(request: Request, response: Response): Response {
  //   const { id } = request.params;
  //   const userNowAdmin = this.turnUserAdminUseCase.execute(id);
  //   return response.status(400).json(userNowAdmin);
  // }
}

export { TurnUserAdminController };
