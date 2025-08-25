import { Link } from "react-router";

interface CatalogType {
  img: string;
  to: string;
  title: string;
  description: string;
  span?: string;
}

export default function CatalogHome() {
  const catalogList: CatalogType[] = [
    {
      img: "https://imgs.search.brave.com/qy3g1CIUDDdfcdTm-1UCcpvXl56hdT5j2_ocuigOB-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQxMTUw/NTQuanBn",
      to: "/",
      title: "Characters",
      description: "es buena descripcion",
    },
    {
      img: "https://imgs.search.brave.com/gAfXtokBTiDeLOr4UM5FfN456x4RkJNCUHk5gKnk8nA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzlz/TlA0dDVkc0dYWUpk/S01ZenFKdGkuanBn",
      to: "/",
      title: "Akatsukis",
      description: "es buena descripcion",
    },
    {
      img: "https://imgs.search.brave.com/dQfruFGIyyfYHr0Tar6LkTD62H60a_mGBgALLU5UiZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC80LzIv/Zi84ODMxMDItMTky/MHgxMDgwLWRlc2t0/b3AtZnVsbC1oZC10/YWlsZWQtYmVhc3Rz/LW5hcnV0by13YWxs/cGFwZXItaW1hZ2Uu/anBn",
      to: "/",
      title: "Tailed Beasts",
      description: "es buena descripcion",
    },
    {
      img: "https://imgs.search.brave.com/4V2s3c715iQ7VZv-IeSrLkdHb6YG_lFRWqfyMMa0NkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDk3MDg2/MzMuanBn",
      to: "/",
      title: "Teams",
      description: "es buena descripcion",
    },
    {
      img: "https://imgs.search.brave.com/8Rcn6qKnFG2d5TzRBeAo0M-n1S7-xbRI0KNLNX9tvR8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaGlkZGVuLWxl/YWYtdmlsbGFnZS1v/cDYxaG9yZ3l5Yzdq/YzVvLmpwZw",
      to: "/",
      title: "Villages",
      description: "es buena descripcion",
    },
    {
      img: "https://imgs.search.brave.com/nXQBNxhnME3nJOGUzGf69wpjLFQufsIL4oB1zgcEBNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYW5n/YS1pbXBlcmlhbC5m/ci9jZG4vc2hvcC9h/cnRpY2xlcy9LZWtr/ZWktR2Vua2FpLW5h/cnV0b18wNTA5ZWU5/OC0wYTIxLTQxMWYt/YTc2NS05ZDgxZmFj/NWUyNjBfMTYwMHgu/anBnP3Y9MTY3MTg4/NzM3Mw",
      to: "/",
      title: "Kekekei Genkai",
      description: "es buena descripcion",
    },
    {
      img: "https://imgs.search.brave.com/6oSQzz9pgZ5bjsSI4bxGI2cCp5Z8AoEP-tpUZHmzFy0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAzL2Ex/L2IyLzAzYTFiMjIx/NGE1MDlkOThiMTVl/OGIxMTA5ZGQwYTg3/LmpwZw",
      to: "/",
      title: "Clans",
      description: "es buena descripcion",
	  span: "row-span-3"
    },
  ];

  return (
    <article className="my-8 grid grid-cols-3 gap-3">
      {catalogList.map(({ description, img, title, to, span }, index) => (
        <div key={index} className={`h-[30rem] w-[30rem] ${span ?? ""}`}>
          <Link to={to}>
            <img src={img} alt={title} className="w-full h-full" />
          </Link>
        </div>
      ))}
    </article>
  );
}
