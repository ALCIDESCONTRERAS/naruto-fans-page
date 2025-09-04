import type { Village } from "../../interfaces/Village.interface";

interface Props {
  item: Village;
}

interface VillageType {
  id: number;
  image: string;
}

export default function CardVillage({ item }: Props) {
  const villages: VillageType[] = [
    {
      id: 0,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756899385/1000_muunvc.png",
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809102/1000_j2frzo.png",
    },
    //no image id
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809451/2878_f5ds8x.png",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809468/1000_s5vvdf.png",
    },
    //no image id 4
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809451/2878_f5ds8x.png",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756899008/1000_qwulmi.png",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809736/1000_dyx590.png",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809795/1000_jlgqu1.png",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809859/259_xs8924.png",
    },
    //no image id 9
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809859/259_xs8924.png",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809984/latest_imlh50.png",
    },
    {
      id: 11,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756810004/1000_kisyg1.jpg",
    },
    {
      id: 12,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756810098/1000_ffvyoz.png",
    },
    {
      id: 13,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756810152/latest_fjkr9i.png",
    },
    {
      id: 14,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756810174/latest_xw5ngo.png",
    },
    //no image id 15
    {
      id: 15,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809451/2878_f5ds8x.png",
    },
    {
      id: 16,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756899566/latest_zz2wi9.png",
    },
    {
      id: 17,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900773/1000_xlh3tn.png",
    },
    {
      id: 18,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900786/1000_n6owoz.png",
    },
    {
      id: 19,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900835/latest_kqzflh.png",
    },
    {
      id: 20,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900884/320_x0pth7.png",
    },
    {
      id: 21,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901097/320_nfxrke.png",
    },
    {
      id: 22,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900986/1000_rzydbu.png",
    },
    {
      id: 23,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900978/1000_jvgbbr.png",
    },
    {
      id: 24,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901328/latest_kwvjdf.jpg",
    },
    {
      id: 25,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901483/dec98-16651481780318_cgt9ju.jpg",
    },
    {
      id: 26,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809451/2878_f5ds8x.png",
    },
    {
      id: 27,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901805/1000_hxcjja.jpg",
    },
    {
      id: 28,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901888/1000_ecccxi.png",
    },
    {
      id: 29,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901939/1000_duzyh1.png",
    },
    {
      id: 30,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901965/1000_un0oms.png",
    },
    {
      id: 31,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902508/223_cfkeoh.jpg",
    },
    {
      id: 32,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902033/1000_rbpwig.png",
    },
    {
      id: 33,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902056/1000_qakqqg.png",
    },
    {
      id: 34,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902550/latest_x7ljsa.jpg",
    },
    {
      id: 35,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902594/1000_hscqyg.png",
    },
    {
      id: 36,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902645/1000_i3ku7y.png",
    },
    {
      id: 37,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902721/latest_xjjfvt.jpg",
    },
    {
      id: 38,
      image:
        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902791/latest_jnhfbg.png",
    },
  ];

  const villageImage = villages.find(v => item.id === v.id)?.image

  return (
    <article className="md:w-80 md:h-96 w-76 h-92 rounded-2xl flex flex-col justify-between shadow-xl bg-amber-50 hover:scale-110 transition-all duration-500">
        <img
          src={villageImage}
          alt={item.name}
          className="w-full h-66 object-cover object-top rounded-t-2xl"
        />
      <span className="block text-center font-title text-2xl">{item.name}</span>
      <button className="block ml-auto mr-4 mb-3 py-1 px-6 text-amber-50 rounded-2xl bg-gray-400 font-text">
        Ver mas
      </button>
    </article>
  );
}
