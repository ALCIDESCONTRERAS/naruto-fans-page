export interface TailedBeast {
  id: number;
  name: string;
  images: string[];
  debut?: {
    manga?: string;
    anime?: string;
    novel?: string;
    movie?: string;
    game?: string;
    ova?: string;
    appearsIn?: string;
  };
  family?: Record<string, string>; // claves dinámicas como "incarnation with the god tree"
  jutsu?: string[];
  natureType?: string[];
  personal?: {
    status?: string;
    kekkeiGenkai?: string;
    classification?: string;
    jinchūriki?: string[];
    titles?: string[];
  };
  uniqueTraits?: string[];
}

export interface TailedBeastResponse {
  "tailed-beasts": TailedBeast[];
}
