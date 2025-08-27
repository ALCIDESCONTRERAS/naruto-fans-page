import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

interface CarrouselType {
  img: string;
  to: string;
  title: string;
  description: string;
}

export default function CarrouselHome() {
  const [current, setCurrent] = useState(0);
  const carrouselList: CarrouselType[] = [
    {
      img: "https://imgs.search.brave.com/fnz4COUS3C6Jb7PYgZwg-qqQSG0yDFWyo05Vo4b9Ia4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbmFydXRvLWNo/YXJhY3RlcnMtcGlj/dHVyZXMtcGVvMWQ3/YzFhcXVnbm8zZS5q/cGc",
      to: "/",
      title: "Characters",
      description:
        "Ninjas rise above limits, carrying dreams, rivalries, and burdens. Some seek to become village leaders, others struggle with vengeance and redemption. Healers, warriors, and tacticians all leave unforgettable marks on this world.",
    },
    {
      img: "https://imgs.search.brave.com/9v5PiyASaSXiOem-o3nt7rU4fYoH4KZieXp9b9buZco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wNC53/YWxscGFwZXJiZXR0/ZXIuY29tL3dhbGxw/YXBlci81MDMvMjc5/LzcxNC9hbmltZS1u/YXJ1dG8tZGVpZGFy/YS1uYXJ1dG8taGlk/YW4tbmFydXRvLXdh/bGxwYXBlci1wcmV2/aWV3LmpwZw",
      to: "/",
      title: "Akatsukis",
      description:
        "A secretive group operates in the shadows, pursuing power and shaping the balance of the world. Their motives are mysterious, their presence feared, and their actions often bring chaos and challenge to every village.",
    },
    {
      img: "https://imgs.search.brave.com/dQfruFGIyyfYHr0Tar6LkTD62H60a_mGBgALLU5UiZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC80LzIv/Zi84ODMxMDItMTky/MHgxMDgwLWRlc2t0/b3AtZnVsbC1oZC10/YWlsZWQtYmVhc3Rz/LW5hcnV0by13YWxs/cGFwZXItaW1hZ2Uu/anBn",
      to: "/",
      title: "Tailed Beasts",
      description:
        "Immense creatures wield incredible power, influencing villages, warriors, and wars. Uncovering their secrets is a challenge only the bravest dare to face.",
    },
    {
      img: "https://imgs.search.brave.com/0HqOShufgEDptnaGdivrrZ8lVXtXlNfQNjsyskyemEU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDgyNjEx/NzQucG5n",
      to: "/",
      title: "Teams",
      description:
        "From small squads of ninjas to elite units and tactical groups, teams form to achieve missions, protect villages, or pursue larger goals. Collaboration, strategy, and loyalty define their success, while rivalries and conflicts test their strength.",
    },
    {
      img: "https://imgs.search.brave.com/8Rcn6qKnFG2d5TzRBeAo0M-n1S7-xbRI0KNLNX9tvR8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaGlkZGVuLWxl/YWYtdmlsbGFnZS1v/cDYxaG9yZ3l5Yzdq/YzVvLmpwZw",
      to: "/",
      title: "Villages",
      description:
        "Step into a world where ninjas, clans, and extraordinary powers shape the fate of nations. Discover the secrets behind each hidden village, from forests to deserts, icy lands, stormy mountains, and rocky fortresses.",
    },
    {
      img: "https://imgs.search.brave.com/WjKCUgEkySP9gIqByGgx0OpM4Wv3sTt7Ivp2ER1h-cY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbTEu/YW1pbm9hcHBzLmNv/bS82MDUxLzI4YWE3/MTM0MWQ3ZTJjNjNk/YTlmZDJhZGZmMzli/MjY2YzI5MzEyNGNf/aHEuanBn",
      to: "/",
      title: "Kekekei Genkai",
      description:
        "Rare powers run in certain families, from extraordinary vision and perception to controlling natural elements. These abilities define the path and destiny of their inheritors.",
    },
    {
      img: "https://imgs.search.brave.com/oO_P3dybCbuGEyNUhpRuKFCDb-1UpBc7adi0F7W940g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWNnLnNwb3J0c2tl/ZWRhLmNvbS9lZGl0/b3IvMjAyMi8xMS84/MTNiZi0xNjY3NDA2/MTQ0ODk3OC5wbmc",
      to: "/",
      title: "Clans",
      description:
        "Families with unique abilities and traditions shape villages and pass down secret techniques. Their influence affects combat, politics, and the balance of power across nations.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carrouselList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setCurrent((prev) => (prev + 1) % carrouselList.length);
  };

  const handlePrevImage = () => {
    setCurrent((prev) => prev === 0 ? carrouselList.length - 1 : prev - 1 );
  };

  return (
    <article className="w-full h-66 md:h-[70vh] lg:h-[100vh] relative flex justify-center items-center overflow-hidden bg-[url(https://preview.redd.it/pv1n441bvf781.jpg?width=1080&crop=smart&auto=webp&s=2f0d9868985fcede5af6bc984ec71f59a71fccfb)]">
      {carrouselList.map(({ description, img, title, to }, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-800 ease-in-out ${
            current === index ? "opacity-90" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link to={to} className="group w-full h-66 md:h-[70vh] lg:h-auto relative">
            <img
              src={img}
              alt={title}
              className="md:w-full lg:w-[56rem] lg:h-auto object-center md:object-contain lg:object-cover"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 " />
            <div className="absolute text-gray-200 bottom-0 px-4 opacity-0 group-hover:opacity-100 -translate-y-8 transition-all duration-400 space-y-4">
              <h5 className="text-4xl text-center font-title translate-y-8 group-hover:-translate-y-10 transition-all duration-500 ease-out delay-100">
                {title}
              </h5>
              <p className="font-text translate-y-10 group-hover:-translate-y-10 transition-all duration-500 ease-out delay-200">
                {description}
              </p>
            </div>
          </Link>
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 lg:-left-14.5 bg-white/50 text-gray-700 px-3 py-1 rounded-full animate-bounce "
          >
            <ArrowLeft className="md:h-8 md:w-8" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-0 lg:-right-14.5 bg-white/50 text-gray-700 px-3 py-1 rounded-full animate-bounce"
          >
            <ArrowRight className="w-5 h-5 md:h-8 md:w-8" />
          </button>
        </div>
      ))}
    </article>
  );
}
