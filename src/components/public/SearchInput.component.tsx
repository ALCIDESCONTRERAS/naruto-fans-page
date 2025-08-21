interface Props {
  query: string;
  setQuery: (value: string) => void;
}

export default function SearchInput({ query, setQuery }: Props) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      className="border rounded w-50 md:w-80 p-2"
    />
  );
}
