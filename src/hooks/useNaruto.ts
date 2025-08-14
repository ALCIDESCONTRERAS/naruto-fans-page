import { useContext } from "react";
import { NarutoContext } from "../context/naruto/NarutoContext";

export const useNaruto = () => {
  const context = useContext(NarutoContext);

  if (!context) {
    throw new Error("useNaruto must be uses within an NarutoProvider");
  }

  return context;
};
