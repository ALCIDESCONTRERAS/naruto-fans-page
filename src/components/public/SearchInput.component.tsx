import { CircleX, Search } from "lucide-react";

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

export default function SearchInput({ query, setQuery }: Props) {
  return (
    <div className="relative w-70 md:w-90 ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className={`border-2 text-gray-300 border-gray-400 placeholder-gray-400 focus:placeholder-gray-300 font-text ${
          query && "rounded-b-none"
        } rounded-lg w-full p-2`}
      />
      {!query ? (
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400 font-text" />
      ) : (
        <CircleX
          onClick={() => setQuery("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400"
        />
      )}
    </div>
  );
}
