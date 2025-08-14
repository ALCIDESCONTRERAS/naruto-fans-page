import axios from "axios";
import type { Characters } from "../interfaces/Character.interface";
import { URL_CHARACTERS } from "./urlsApi/urlApiNaruto";

export const getCharacters = async (): Promise<Characters | undefined> => {
  try {
    const res = await axios.get<Characters>(URL_CHARACTERS);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
