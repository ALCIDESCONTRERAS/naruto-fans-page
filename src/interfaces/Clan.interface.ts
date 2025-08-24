export interface Clan {
  id: number;
  name: string;
  type: "clan";
  characters: number[];
}

export interface ClanResponse {
  clans: Clan[];
}

