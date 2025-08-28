import CardChar from "../../components/catalog/CardChar.component";
import { useNaruto } from "../../hooks/useNaruto";
import { usePagination } from "../../hooks/usePagination";

export default function Characters() {
  const { state } = useNaruto();
  const {currentItems, currentPage, setCurrentPage, totalPages} = usePagination(state.characters, 20);
  
  return (
    <main className="bg-[url(https://wallpapers.com/images/high/naruto-manga-ejwj7fzcl0a5hp5b.webp)]">
      <h1 className="mb-8 text-orange-400 text-4xl md:text-6xl lg:text-7xl text-center font-bold font-title">
        Characters
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-6">
        {currentItems.map((char) => (
          <CardChar key={char.id} item={char} />
        ))}
      </section>
      <section className="p-12 text-center">
          <button
            className="bg-gray-900 text-white px-3 rounded-lg m-1 text-center disabled:opacity-60 font-text"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="mx-2 font-bold font-title bg-amber-50/70 px-5">
            {currentPage} / {totalPages}
          </span>
          <button
            className="bg-gray-900 text-white px-3 rounded-lg m-1 text-center disabled:opacity-60 font-text"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
      </section>
    </main>
  );
}
