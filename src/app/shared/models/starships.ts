export class StarshipsViewModel {
  count: number;
  next: string;
  previous: string;
  results: Starship[];
}

export class Starship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: number;
  starship_class: string;
  url: string;
  pilots: string[];
  created: Date;
  edited: Date;
}
