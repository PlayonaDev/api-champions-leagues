import { Response, Request, response } from "express";
import * as playersServices from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await playersServices.getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await playersServices.getPlayerByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
