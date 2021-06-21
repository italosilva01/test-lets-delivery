export interface Location {
  name: string;
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: Location;
  location?: Location;
  image: string;
  dimension?: string;
  created?: string;
}
