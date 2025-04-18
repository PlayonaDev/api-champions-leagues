import { PlayerModel } from "../models/players-model";
import { StatisticModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Messi",
    rating: 9.8,
    position: "Forward",
    team: "Paris Saint-Germain",
    goals: 129,
    assists: 41,
    statistics: {
      overall: 93,
      pace: 85,
      shooting: 92,
      passing: 91,
      dribbling: 95,
      defending: 38,
      physical: 65,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    rating: 9.9,
    position: "Forward",
    team: "Manchester United",
    goals: 140,
    assists: 42,
    statistics: {
      overall: 92,
      pace: 87,
      shooting: 93,
      passing: 82,
      dribbling: 88,
      defending: 35,
      physical: 77,
    },
  },
  {
    id: 3,
    name: "Karim Benzema",
    rating: 9.0,
    position: "Forward",
    team: "Real Madrid",
    goals: 90,
    assists: 28,
    statistics: {
      overall: 91,
      pace: 78,
      shooting: 89,
      passing: 84,
      dribbling: 87,
      defending: 40,
      physical: 79,
    },
  },
  {
    id: 4,
    name: "Luka Modrić",
    rating: 8.7,
    position: "Midfielder",
    team: "Real Madrid",
    goals: 7,
    assists: 15,
    statistics: {
      overall: 88,
      pace: 72,
      shooting: 76,
      passing: 89,
      dribbling: 89,
      defending: 72,
      physical: 67,
    },
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    rating: 9.1,
    position: "Forward",
    team: "Barcelona",
    goals: 92,
    assists: 25,
    statistics: {
      overall: 92,
      pace: 78,
      shooting: 93,
      passing: 79,
      dribbling: 85,
      defending: 44,
      physical: 83,
    },
  },
  {
    id: 6,
    name: "Erling Haaland",
    rating: 8.9,
    position: "Forward",
    team: "Manchester City",
    goals: 41,
    assists: 5,
    statistics: {
      overall: 91,
      pace: 89,
      shooting: 91,
      passing: 65,
      dribbling: 80,
      defending: 45,
      physical: 88,
    },
  },
  {
    id: 7,
    name: "Kylian Mbappé",
    rating: 9.0,
    position: "Forward",
    team: "Paris Saint-Germain",
    goals: 43,
    assists: 26,
    statistics: {
      overall: 92,
      pace: 97,
      shooting: 88,
      passing: 80,
      dribbling: 92,
      defending: 36,
      physical: 76,
    },
  },
  {
    id: 8,
    name: "Kevin De Bruyne",
    rating: 8.8,
    position: "Midfielder",
    team: "Manchester City",
    goals: 14,
    assists: 28,
    statistics: {
      overall: 91,
      pace: 76,
      shooting: 86,
      passing: 93,
      dribbling: 87,
      defending: 64,
      physical: 78,
    },
  },
  {
    id: 9,
    name: "Virgil van Dijk",
    rating: 8.5,
    position: "Defender",
    team: "Liverpool",
    goals: 5,
    assists: 3,
    statistics: {
      overall: 89,
      pace: 75,
      shooting: 60,
      passing: 70,
      dribbling: 68,
      defending: 91,
      physical: 86,
    },
  },
  {
    id: 10,
    name: "Manuel Neuer",
    rating: 8.6,
    position: "Goalkeeper",
    team: "Bayern Munich",
    goals: 0,
    assists: 2,
    statistics: {
      overall: 90,
      pace: 58,
      shooting: 40,
      passing: 85,
      dribbling: 60,
      defending: 20,
      physical: 80,
    },
  },
  {
    id: 11,
    name: "Mohamed Salah",
    rating: 8.9,
    position: "Forward",
    team: "Liverpool",
    goals: 48,
    assists: 15,
    statistics: {
      overall: 90,
      pace: 93,
      shooting: 86,
      passing: 80,
      dribbling: 90,
      defending: 45,
      physical: 74,
    },
  },
  {
    id: 12,
    name: "Vinícius Júnior",
    rating: 8.4,
    position: "Forward",
    team: "Real Madrid",
    goals: 16,
    assists: 19,
    statistics: {
      overall: 88,
      pace: 95,
      shooting: 80,
      passing: 77,
      dribbling: 91,
      defending: 36,
      physical: 69,
    },
  },
  {
    id: 13,
    name: "Toni Kroos",
    rating: 8.6,
    position: "Midfielder",
    team: "Real Madrid",
    goals: 10,
    assists: 15,
    statistics: {
      overall: 88,
      pace: 55,
      shooting: 82,
      passing: 91,
      dribbling: 81,
      defending: 70,
      physical: 68,
    },
  },
  {
    id: 14,
    name: "Neymar Jr.",
    rating: 8.7,
    position: "Forward",
    team: "Paris Saint-Germain",
    goals: 43,
    assists: 34,
    statistics: {
      overall: 91,
      pace: 89,
      shooting: 85,
      passing: 87,
      dribbling: 94,
      defending: 37,
      physical: 60,
    },
  },
  {
    id: 15,
    name: "Thomas Müller",
    rating: 8.5,
    position: "Forward",
    team: "Bayern Munich",
    goals: 53,
    assists: 26,
    statistics: {
      overall: 88,
      pace: 72,
      shooting: 84,
      passing: 85,
      dribbling: 80,
      defending: 55,
      physical: 77,
    },
  },
];

export const findALlPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const findIdAndStatistics = async (
  id: number,
  statistics: StatisticModel
): Promise<PlayerModel> => {
  const playerIndex = database.findIndex((player) => player.id === id);
  database[playerIndex].statistics = statistics;

  return database[playerIndex];
};

export const deletePlayerById = async (id: number) => {
  const index = database.findIndex((player) => player.id === id);

  if (index !== -1) {
    database.slice(index, 1);
    return true;
  }
  return false;
};
