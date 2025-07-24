interface Image {
	image: string;
}

interface Personal {
	birthdate?: string;
	sex?: string;
	clan?: string;
	affiliation?: string;
}

export interface Characters {
	id: number;
	name: string;
	image: Image[];
	personal: Personal
}