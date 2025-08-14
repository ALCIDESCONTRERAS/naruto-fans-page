import type { Character } from "../interfaces/Character.interface"

export type InitialStateType = {
	loading: boolean;
	error: string;
	characters: Character[];
}

export type ActionType =
| {type: "add_character", payload: Character[]}



export const initialState : InitialStateType = {
	loading: false,
	error: "",
	characters: [],
}


export const narutoReducer = (state: InitialStateType, action: ActionType ) => {
	switch(action.type){
		case "add_character":
			return {
				...state, characters: action.payload
			}
	}
}