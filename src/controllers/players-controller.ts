import { Response, Request } from "express";
import * as playersServices from "../services/players-service";
import { noContent } from "../utils/http-helper";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await playersServices.getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await playersServices.getPlayerByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await playersServices.createPlayerService(bodyValue);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await playersServices.deletePlayerService(id);

  res.status(httpResponse?.statusCode).json(httpResponse.body);
};
