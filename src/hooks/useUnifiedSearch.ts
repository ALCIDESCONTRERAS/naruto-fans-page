import { useMemo, useState } from "react";

type Searchable = { name: string; id: number };

export function useUnifiedSearch<T extends Searchable>(lists: T[][]) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const allItems = lists.flat();
    const searched = allItems.filter(
      (item) => (item.name.toLowerCase().includes(query.toLowerCase()))
    );
    const unique = Array.from(new Map(searched.map(u => [u.id, u])).values());
    return unique
    
  }, [lists, query]);

  return {
    query,
    setQuery,
    filtered,
  };
}
