import CardChar from "../../components/catalog/CardChar.component";
import { useNaruto } from "../../hooks/useNaruto";
import { usePagination } from "../../hooks/usePagination";

export default function AkatsukiPage() {
  const { state } = useNaruto();
  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(state.akatsukis, 21);

  return (
    <main className="bg-[url(https://imgs.search.brave.com/SPTyBuJ2C0Acgr_zcs_0w4gzRl3EwTKTBqqlAwcJIt4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ5ODA0/NDguanBn)] bg-white/50 bg-blend-overlay bg-contain">
      <h1 className="py-8 text-orange-400 text-4xl md:text-6xl lg:text-7xl text-center font-bold font-title">
        Akatsukis
      </h1>
      <section className="grid mx-auto xl:w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
        {currentItems.map((a) => (
          <CardChar key={a.id} item={a} />
        ))}
      </section>
      <aside className="py-12 text-center">
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
      </aside>
    </main>
  );
}
