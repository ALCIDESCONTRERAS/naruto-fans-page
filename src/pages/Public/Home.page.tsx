import { useEffect, useState } from "react";
import type { Character } from "../../interfaces/Character.interface";
import { getCharacters } from "../../services/narutoApi";

function HomePage() {
  const [charactersApi, setCharactersApi] = useState<Character[] | null>(null);
 
  const getCharactersApi = async () => {
	const data = await getCharacters();
	if (data) {
	  setCharactersApi(data.characters);
	}
  };
  
  
  useEffect(() => {
	getCharactersApi();
  }, []);

  return (
	<>
	  {charactersApi?.map((character) => (
		<article key={character.id} className="flex flex-col">
		  <img
			className="w-46"
			src={character.images[0]}
			alt={character.name}
		  />
		  <span>{character.name}</span>
		  <span>{character.personal?.sex}</span>
		</article>
	  ))}
	</>
  );
}

export default HomePage;
