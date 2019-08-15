export class SpeciesViewModel {
  count: number;
  next: string;
  previous: string;
  results: Species[];
}

export class Species {
  id: number;
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  average_lifespan: number;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  homeworld: string;
  language: string;
  url: string;
  people: string[];
  films: string[];
  created: Date;
  edited: Date;
}
