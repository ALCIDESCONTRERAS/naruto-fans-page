export interface Team {
  id: number;
  name: string;
  type: "team";
  characters: number[]; 
}

export interface TeamResponse {
  teams: Team[];
}
