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

export default function SearchMenu() {
  const { state } = useNaruto();
  const lists = [
    state.characters,
    state.akatsukis,
    state.clans,
    state.kekkeiGenkais,
    state.tailedBeasts,
    state.teams,
    state.villages,
  ];

  const { filtered, query, setQuery } = useUnifiedSearch<SearchItems>(lists);

  return (
    <>
      <SearchInput query={query} setQuery={setQuery} />

      <div className="absolute top-14 w-50 md:w-80 bg-gray-800 z-10 max-h-90 overflow-auto">
        <ul className="text-sm text-gray-400 font-medium">
          {query &&
            filtered.map((item) => (
              <li
                key={item.id}
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
