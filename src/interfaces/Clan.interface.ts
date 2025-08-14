export interface Clan {
  id: number;
  name: string;
  characters: number[];
}

export interface ClanResponse {
  clans: Clan[];
}

