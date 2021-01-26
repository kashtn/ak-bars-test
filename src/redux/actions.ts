import { Ipoke } from "../interfaces";
import {
  ActionTypes,
  START_FETCHING,
  STOP_FETCHING,
  SetPokesAction,
  SET_POKES,
  SET_POKEMON,
  SetPokemonAction,
  CLEAN_CURRENT_POKEMON,
} from "./actionTypes";
import { AppDispatch } from "./store";
import env from "react-dotenv";

export function getPokes() {
  return async function (dispatch: AppDispatch) {
    dispatch(startFetching());
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const result = await response.json();
    dispatch(stopFetching());
    dispatch(setPokes(result.results));
  };
}

export function getPokemon(name: string) {
  return async function (dispatch: AppDispatch) {
    dispatch(startFetching());
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const result = await response.json();
    dispatch(stopFetching());
    dispatch(setCurrentPokemon(result));
  };
}

export function startFetching(): ActionTypes {
  return {
    type: START_FETCHING,
  };
}
export function stopFetching(): ActionTypes {
  return {
    type: STOP_FETCHING,
  };
}

export function setPokes(pokes: Ipoke[]): SetPokesAction {
  return {
    type: SET_POKES,
    payload: pokes,
  };
}
export function setCurrentPokemon(pokemon: Ipoke): SetPokemonAction {
  return {
    type: SET_POKEMON,
    payload: pokemon,
  };
}
export function cleanCurrentPokemon() {
  return {
    type: CLEAN_CURRENT_POKEMON,
  };
}
