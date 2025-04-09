import { PlayerModel } from "../models/players-model";
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

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length === 0) {
    await playerRepository.insertPlayer(player);
    response = httpResponse.created();
    console.log(`Retorno player ${player}`);
  } else {
    response = httpResponse.badRequest();
    console.log(`Retorno bad request ${response}`);
  }
  // Object.keys(player).length === 0
  //   ? (await playerRepository.insertPlayer(player),
  //     (response = httpResponse.created()))
  //   : (response = httpResponse.badRequest());

  return response;
};
