import axios from "axios";
import { URL_GET_CHARACTERS } from "./urlsApi/urlApiNaruto";
import type { Characters } from "../interfaces/characters.interface";

export const getCharacters = async (): Promise<Characters | undefined> => {
  try {
    const res = await axios.get<Characters>(URL_GET_CHARACTERS);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
