import type { Akatsuki } from "../interfaces/Akatsuki.interface";
import type { Character } from "../interfaces/Character.interface";
import type { Clan } from "../interfaces/Clan.interface";
import type { KekkeiGenkai } from "../interfaces/KekkeiGenkai.interface";
import type { TailedBeast } from "../interfaces/TailedBeast";
import type { Team } from "../interfaces/Team.interface";
import type { Village } from "../interfaces/Village.interface";

export type InitialStateType = {
  loading: boolean;
  error: string;
  characters: Character[];
  akatsukis: Akatsuki[];
  villages: Village[];
  clans: Clan[];
  tailedBeasts: TailedBeast[];
  kekkeiGenkais: KekkeiGenkai[];
  teams: Team[];
};

export type ActionType =
  | { type: "add_character"; payload: Character[] }
  | { type: "add_akatsuki"; payload: Akatsuki[] }
  | { type: "add_village"; payload: Village[] }
  | { type: "add_clan"; payload: Clan[] }
  | { type: "add_tailed_beast"; payload: TailedBeast[] }
  | { type: "add_kekkei_genkai"; payload: KekkeiGenkai[] }
  | { type: "add_team"; payload: Team[] };

export const initialState: InitialStateType = {
  loading: false,
  error: "",
  characters: [],
  akatsukis: [],
  villages: [],
  clans: [],
  tailedBeasts: [],
  kekkeiGenkais: [],
  teams: [],
};

export const narutoReducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case "add_character":
      return {
        ...state,
        characters: action.payload,
      };
    case "add_akatsuki":
      return {
        ...state,
        akatsukis: action.payload,
      };
    case "add_village":
      return {
        ...state,
        villages: action.payload,
      };
    case "add_clan":
      return {
        ...state,
        clans: action.payload,
      };
    case "add_tailed_beast":
      return {
        ...state,
        tailedBeasts: action.payload,
      };
    case "add_kekkei_genkai":
      return {
        ...state,
        kekkeiGenkais: action.payload,
      };
    case "add_team":
      return {
        ...state,
        teams: action.payload,
      };
    default:
      return state;
  }
};
