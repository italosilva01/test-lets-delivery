import { AnyAction } from "redux";
export default function (state = [], action: AnyAction) {
  switch (action.type) {
    case "INSERT":
      return state;

    default:
      return state;
  }
}
