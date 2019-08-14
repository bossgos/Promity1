export class FilmViewModel {
  count: number;
  next: string;
  previous: string;
  results: Film[];
}

export class Film {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  created: Date;
  edited: Date;
  url: string;
  characters: string[];
  planets: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
}
