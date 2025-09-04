import CardChar from "../../components/catalog/CardChar.component";
import { useNaruto } from "../../hooks/useNaruto";
import { usePagination } from "../../hooks/usePagination";

export default function TailedBeastPage() {
  const { state } = useNaruto();
  const { currentItems, currentPage, setCurrentPage, totalPages } =
	usePagination(state.tailedBeasts, 10);

  return (
	<main className="bg-[url(https://imgs.search.brave.com/K25Xplvdqp5GLW0QpjlLv9UZthpfKK07qaUvj1Z1C_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDcvbmFydXRvLWFs/bC10YWlsZWQtYmVh/c3RzLmpwZz9xPTQ5/JmZpdD1jcm9wJnc9/ODI1JmRwcj0y)] bg-white/80 bg-blend-overlay bg-contain">
	  <h1 className="py-8 text-orange-400 text-4xl md:text-6xl lg:text-7xl text-center font-bold font-title">
		Tailed Beasts
	  </h1>
	  <section className="lg:w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center gap-6">
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
