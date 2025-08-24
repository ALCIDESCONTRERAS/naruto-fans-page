export interface Akatsuki {
  id: number;
  name: string;
  images: string[];
  type: "akatsuki";
  debut?: {
    manga?: string;
    anime?: string;
    novel?: string;
    movie?: string;
    game?: string;
    ova?: string;
    appearsIn?: string;
  };
  family?: Record<string, string>;
  jutsu?: string[];
  natureType?: string[];
  personal?: {
    species?: string;
    status?: string;
    kekkeiGenkai?: string[];
    classification?: string[];
    tailedBeast?: string;
    occupation?: string;
    affiliation?: string;
    partner?: string[];
  };
  uniqueTraits?: string[];
  voiceActors?: {
    japanese?: string[];
    english?: string[];
  };
}

export interface AkatsukiResponse {
  akatsuki: Akatsuki[];
}
