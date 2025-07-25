import { useEffect, useState } from "react";
import { getCharacters } from "./services/narutoApi";
import type { Characters } from "./interfaces/characters.interface";

function App() {
  const [charactersApi, setCharactersApi] = useState<Characters | null>(null);

  const getCharactersApi = async () => {
    const data = await getCharacters();
    if (data) {
      setCharactersApi(data!);
    }
  };

  console.log(charactersApi);

  useEffect(() => {
    getCharactersApi();
  }, []);

  return <>
  {
    charactersApi?.characters.map(character => (
      <article key={character.id} className="flex flex-col">
        <img className="w-46" src={character.images[0]} alt="" />
        <span>{character.name}</span>
        <span>{character.personal.sex}</span>
        <span>{character.personal.birthdate}</span>
        <span>{character.personal.affiliation}</span>
        <span>{character.personal.clan}</span>
      </article>
    ))
    }
  </>;
}

export default App;
