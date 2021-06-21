interface Localtion {
  name: string;
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: object;
  localtion?: Localtion;
  image: string;
  dimension?: string;
  created?: string;
}
