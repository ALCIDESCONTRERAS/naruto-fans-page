import type { Akatsuki } from "../../interfaces/Akatsuki.interface";
import type { Character } from "../../interfaces/Character.interface";
import type { TailedBeast } from "../../interfaces/TailedBeast";

interface Props {
  item: Character | Akatsuki | TailedBeast
}

export default function CardChar({item}: Props) {

  const image = item.name === "Jiraya" ? "https://imgs.search.brave.com/8tXFjj4WyQuoia0I9QWiAkKhDItbqFk3gwkjUmOw7g0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U5Lzk3/L2Y2L2U5OTdmNjY0/NjIyNmRiZTg3MWI1/ZmNmZjdhYjJhZDJm/LmpwZw" : item.images[0]

  return (
    <article className="w-80 h-96 my-10 rounded-2xl flex flex-col justify-between shadow-xl bg-amber-50 hover:scale-110 transition-all duration-500">
      <img
        src={image}
        alt={item.name}
        className="w-full h-66 object-cover object-top rounded-t-2xl"
      />
      <span className="block text-center font-title text-2xl">
        {item.name}
      </span>
      <button className="block ml-auto mr-4 mb-3 py-1 px-6 text-amber-50 rounded-2xl bg-gray-400 font-text">
        Ver mas
      </button>
    </article>
  );
}
