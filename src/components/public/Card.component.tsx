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
    <article className="h-80 w-72 border my-5 rounded-md text-center">
      <div className="h-60 mb-3">
        <img className="w-full h-full" src={item.images[0]} alt={item.name} />
      </div>
      <h2 className=" text-2xl font-bold">{item.name}</h2>
      {hasPersonal(item) && item.personal?.sex && (
        <span>{item.personal.sex}</span>
      )}
    </article>
  );
}
export default CardHome;
