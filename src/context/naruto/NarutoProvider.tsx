import { useReducer } from "react";
import { initialState, narutoReducer } from "../../reducers/NarutoReducer";
import { NarutoContext } from "./NarutoContext";


interface Props {
	children: React.ReactNode;
}

export const NarutoProvider = ({ children }: Props) => {

	const [state, dispatch] = useReducer(narutoReducer, initialState);

	return (
		<NarutoContext.Provider value={{state, dispatch}}>
			{ children }
		</NarutoContext.Provider>
	)

}