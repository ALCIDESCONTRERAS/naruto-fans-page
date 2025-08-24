import { Link } from "react-router";
import type { Akatsuki } from "../../interfaces/Akatsuki.interface";
import type { Character } from "../../interfaces/Character.interface";
import type { TailedBeast } from "../../interfaces/TailedBeast";

interface Props {
  item: Character | Akatsuki | TailedBeast;
}

function CardHome({ item }: Props) {
  // esto se llama type guard es para mostrar algo solo si existe
  const hasPersonal = (
    item: Character | Akatsuki | TailedBeast
  ): item is Character => {
    return (item as Character).personal !== undefined;
  };

  return (
    // <article className="h-80 w-72 border my-5 rounded-md text-center">
    //   <div className="h-60 mb-3">
    //     <img className="w-full h-full" src={item.images[0]} alt={item.name} />
    //   </div>
    //   <h2 className=" text-2xl font-bold">{item.name}</h2>
    //   {hasPersonal(item) && item.personal?.sex && (
    //     <span>{item.personal.sex}</span>
    //   )}
    // </article>
    <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to="/login">
        <img className="rounded-t-lg w-full" src={item.images[0]} alt={item.name} />
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
        </a>
        {hasPersonal(item) && item.personal?.sex && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.personal.sex}
          </p>
        )}
        <Link
          to="/login"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
export default CardHome;
