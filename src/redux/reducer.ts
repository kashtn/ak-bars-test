import { Action } from "redux";
import { Ipoke } from "../interfaces";
import {
  ActionTypes,
  SET_POKES,
  START_FETCHING,
  STOP_FETCHING,
  SET_POKEMON,
  CLEAN_CURRENT_POKEMON
} from "./actionTypes";

export type StateType = {
  pokes: Ipoke[];
  loading: boolean;
  currentPokemon: Ipoke;
};

const initialState: StateType = {
  pokes: [],
  loading: false,
  currentPokemon: {},
};

export function reducer(state = initialState, action: ActionTypes): StateType {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case STOP_FETCHING:
      return {
        ...state,
        loading: false,
      };
    case SET_POKES:
      return {
        ...state,
        pokes: action.payload,
      };
    case SET_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload,
      };
      case CLEAN_CURRENT_POKEMON:
      return {
        ...state,
        currentPokemon: {},
      };
    default: {
      return state;
    }
  }
}
