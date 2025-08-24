export interface Village {
  id: number;
  name: string;
  type: "village";
  characters: number[];
}

export interface VillageResponse {
  villages: Village[];
}
