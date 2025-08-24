import { useNaruto } from "../../hooks/useNaruto";
import { useUnifiedSearch } from "../../hooks/useUnifiedSearch";
import type { Akatsuki } from "../../interfaces/Akatsuki.interface";
import type { Character } from "../../interfaces/Character.interface";
import type { Clan } from "../../interfaces/Clan.interface";
import type { KekkeiGenkai } from "../../interfaces/KekkeiGenkai.interface";
import type { TailedBeast } from "../../interfaces/TailedBeast";
import type { Team } from "../../interfaces/Team.interface";
import type { Village } from "../../interfaces/Village.interface";
import SearchInput from "./SearchInput.component";

type SearchItems =
  | Character
  | Akatsuki
  | Clan
  | KekkeiGenkai
  | TailedBeast
  | Team
  | Village;

export default function Search() {
  const { state } = useNaruto();
  
  const lists: SearchItems[][] = [
    state.characters.map((c) => ({ ...c, type: "character" })),
    state.akatsukis.map((a) => ({ ...a, type: "akatsuki" })),
    state.clans.map((c) => ({ ...c, type: "clan" })),
    state.kekkeiGenkais.map((k) => ({ ...k, type: "kekkeiGenkai" })),
    state.tailedBeasts.map((t) => ({ ...t, type: "tailed-beast" })),
    state.teams.map((t) => ({ ...t, type: "team" })),
    state.villages.map((v) => ({ ...v, type: "village" })),
  ];

  const { filtered, query, setQuery } = useUnifiedSearch<SearchItems>(lists);

  return (
    <>
      <SearchInput query={query} setQuery={setQuery} />

      <div className="absolute top-35 md:top-19 w-70 md:w-90 bg-gray-800 z-10 max-h-90 overflow-auto">
        <ul className="text-sm text-gray-400 font-medium font-title">
          {query &&
            filtered.map((item) => (
              <li
                key={item.id}
                className="flex justify-between px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                {item.name}
                <span className="text-xs text-gray-500">{item.type}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
