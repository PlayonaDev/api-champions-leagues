import fs from "fs";
import { ClubModel } from "../models/club-model";
export const getClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFileSync("src/data/clubs.json");

  const clubs: ClubModel[] = JSON.parse(data.toString());

  return clubs;
};
