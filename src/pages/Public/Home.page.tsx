import CarrouselHome from "../../components/public/CarrouselHome.component";
import HeroHome from "../../components/public/HeroHome.component";
import WelcomeText from "../../components/public/WelcomeText.component";

const HomePage = () => {
  return (
    <main className="relative">
      <div className="relative">
        <HeroHome />
        <WelcomeText />
      </div>
      <CarrouselHome />
    </main>
  );
};
export default HomePage;
