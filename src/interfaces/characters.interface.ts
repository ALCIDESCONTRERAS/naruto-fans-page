interface Personal {
	birthdate?: string;
	sex?: string;
	clan?: string;
	affiliation?: string;
}



export interface Character {
	id: number;
	name: string;
	images: string[];
	personal: Personal
}

export interface Characters {
	characters : Character[]
}