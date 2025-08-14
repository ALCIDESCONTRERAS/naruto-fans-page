export interface Village {
  id: number;
  name: string;
  characters: number[];
}

export interface VillageResponse {
  villages: Village[];
}
