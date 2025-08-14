import { Outlet } from "react-router"
import { useNaruto } from "../hooks/useNaruto"
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

import type { CharactersData } from "../interfaces/Character.interface";
import type { AkatsukiResponse } from "../interfaces/Akatsuki.interface";
import type { VillageResponse } from "../interfaces/Village.interface";
import type { ClanResponse } from "../interfaces/Clan.interface";
import type { TeamResponse } from "../interfaces/Team.interface";
import type { TailedBeastResponse } from "../interfaces/TailedBeast";
import type { KekkeiGenkaiResponse } from "../interfaces/KekkeiGenkai.interface";

export const RootLayout = () => {
	const { dispatch } = useNaruto();
	const { data: characters } = useFetch<CharactersData>("https://dattebayo-api.onrender.com/characters?limit=1431")
	const { data: akatsuki } = useFetch<AkatsukiResponse>("https://dattebayo-api.onrender.com/akatsuki?limit=44")
	const { data: villages } = useFetch<VillageResponse>("https://dattebayo-api.onrender.com/villages?limit=39")
	const { data: clans } = useFetch<ClanResponse>("https://dattebayo-api.onrender.com/clans?limit=58")
	const { data: teams } = useFetch<TeamResponse>("https://dattebayo-api.onrender.com/teams?limit=191")
	const { data: tailedBeasts } = useFetch<TailedBeastResponse>("https://dattebayo-api.onrender.com/tailed-beasts?limit=10")
	const { data: KekkeiGenkai } = useFetch<KekkeiGenkaiResponse>("https://dattebayo-api.onrender.com/kekkei-genkai?limit=39")
	
	useEffect(()=> {
		if(characters) dispatch({type: "add_character", payload: characters.characters!});
		if(akatsuki) dispatch({type: "add_akatsuki", payload: akatsuki.akatsuki!});
		if(villages) dispatch({type: "add_village", payload: villages.villages!});
		if(clans) dispatch({type: "add_clan", payload: clans.clans!});
		if(teams) dispatch({type: "add_team", payload: teams.teams!});
		if(tailedBeasts) dispatch({type: "add_tailed_beast", payload: tailedBeasts["tailed-beasts"]!});
		if(KekkeiGenkai) dispatch({type: "add_kekkei_genkai", payload: KekkeiGenkai["kekkei-genkai"]!});
	}, [dispatch, characters, akatsuki, villages, clans, teams, tailedBeasts, KekkeiGenkai])
	

  return (
	<div>
		<Outlet />
	</div>
  )
}