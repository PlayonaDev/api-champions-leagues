import * as playerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await playerRepository.findALlPlayers();

  let response = null;

  data
    ? (response = httpResponse.ok(data))
    : (response = httpResponse.noContent());

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await playerRepository.findPlayerById(id);

  let response = null;

  data
    ? (response = httpResponse.ok(data))
    : (response = httpResponse.noContent());

  return response;
};
