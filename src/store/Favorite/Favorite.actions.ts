import { Character } from "model/character";

export function insert(Character: Character) {
  return {
    type: "INSERT",
    payload: Character,
  };
}
