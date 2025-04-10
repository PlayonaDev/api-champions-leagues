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

  Object.keys(player).length !== 0
    ? (await playerRepository.insertPlayer(player),
      (response = httpResponse.created()),
      console.log(`😅 Sucessful 😍 ${player.name} criado com sucesso.`))
    : ((response = httpResponse.badRequest()),
      console.log(
        `🤬 Bad Request 🫠 () => {Result Body} return: ${(await response).body}`
      ));

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  await playerRepository.deletePlayerById(id);
  response = httpResponse.ok({ message: "Sucessful delete" });

  return response;
};
