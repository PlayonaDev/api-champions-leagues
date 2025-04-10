export interface ClubModel {
  id: number;
  name: string;
  foundationYear: number;
  country: string;
  league: string;
  stadium: string;
  titles: {
    national: string[];
    international: string[];
  };
  coach?: string;
  squadSize: number;
  value: string;
}
