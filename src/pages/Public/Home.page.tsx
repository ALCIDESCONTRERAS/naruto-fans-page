import CardHome from "../../components/public/CardHome.component";
import HeroHome from "../../components/public/HeroHome.component";
import WelcomeText from "../../components/public/WelcomeText.component";
import { useNaruto } from "../../hooks/useNaruto";

const HomePage = () => {
  const { state } = useNaruto();

  return (
    <main className="relative">
      <div className="relative">
        <HeroHome />
        <WelcomeText />
      </div>
      <div>
        {state.characters.slice(0, 5).map((char) => (
          <CardHome key={char.id} item={char} />
        ))}
      </div>
    </main>
  );
};
export default HomePage;
