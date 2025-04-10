import * as clubsServices from "../services/clubs-service";
import { Request, Response } from "express";
export const getClubs = async (req: Request, res: Response) => {
  const httpResponse = await clubsServices.getClubsService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
