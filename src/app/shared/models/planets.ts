export class PlanetsViewModel {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

export class Planet {
  id: number;
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  url: string;
  films: string[];
  created: Date;
  edited: Date;
}
