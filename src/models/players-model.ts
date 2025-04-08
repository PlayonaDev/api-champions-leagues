export interface PlayerModel {
  id: number;
  name: string;
  rating: number;
  position: string;
  team: string;
  goals: number;
  assists: number;
  statistics: {
    overall: number;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
}
