export interface KekkeiGenkai {
  id: number;
  name: string;
  characters: number[];
}

export interface KekkeiGenkaiResponse {
  "kekkei-genkai": KekkeiGenkai[];
}
