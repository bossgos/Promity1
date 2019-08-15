export class VehiclesViewModel {
  count: number;
  next: string;
  previous: string;
  results: Vehicle[];
}

export class Vehicle {
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
  vehicle_class: string;
  url: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
}
