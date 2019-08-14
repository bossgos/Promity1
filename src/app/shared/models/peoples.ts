export class PeopleViewModel {
  count: number;
  next: string;
  previous: string;
  results: People[];
}

export class People {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  created: Date;
  edited: Date;
  url: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
}
