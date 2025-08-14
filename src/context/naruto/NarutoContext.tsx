import { createContext } from "react";
import type { ActionType, InitialStateType } from "../../reducers/NarutoReducer";


type NarutoContextType = {
	state: InitialStateType;
	dispatch: React.Dispatch<ActionType>
}

export const NarutoContext = createContext<NarutoContextType | undefined>(undefined);