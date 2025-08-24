export interface KekkeiGenkai {
  id: number;
  name: string;
  type: "kekkeiGenkai";
  characters: number[];
}

export interface KekkeiGenkaiResponse {
  "kekkei-genkai": KekkeiGenkai[];
}
