import { Link } from "react-router";
import HeroHome from "../../components/public/HeroHome.component";

const HomePage = () => {
  return (
    <main className="mb-6 relative">
      <HeroHome />
      <div className="absolute md:top-1/2 top-4 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-gray-700 space-y-10 px-4 md:px-0">
        <h1 className="text-4xl md:text-8xl font-bold font-title">Welcome to the Naruto universe</h1>
        <p className="text-xl md:text-3xl font-text">
          For those who dream of becoming Hokage, learning from every ninja and
          sharing every epic moment of the saga.
        </p>
        <p className="text-md md:text-xl font-text">
          Are you new here? You can create an account by{" "}
          <Link
            to="/register"
            className="text-orange-500 underline hover:text-orange-700"
          >
            sign up
          </Link>{" "}
          or, if you already have an account,{" "}
          <Link
            to="/login"
            className="text-orange-500 underline hover:text-orange-700 "
          >
            sign in
          </Link>
        </p>
      </div>
    </main>
  );
};
export default HomePage;
