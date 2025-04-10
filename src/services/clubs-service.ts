import * as clubsRepository from "../repositories/clubs-repository";
import * as httpResponse from "../utils/http-helper";
export const getClubsService = async () => {
  let response = null;
  const data = await clubsRepository.getClubs();

  data
    ? (response = httpResponse.ok(data))
    : (response = httpResponse.noContent());

  return response;
};
