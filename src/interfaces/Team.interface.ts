export interface Team {
  id: number;
  name: string;
  characters: number[]; 
}

export interface TeamResponse {
  teams: Team[];
}
