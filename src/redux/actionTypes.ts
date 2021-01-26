import { Ipoke } from "../interfaces";

export const START_FETCHING = "START_FETCHING";
export type StartFetchingAction = {
  type: typeof START_FETCHING;
};

export const STOP_FETCHING = "STOP_FETCHING";
export type StopFetchingAction = {
  type: typeof STOP_FETCHING;
};

export const SET_POKES = "SET_POKES";
export type SetPokesAction = {
  type: typeof SET_POKES;
  payload: Ipoke[];
};

export const SET_POKEMON = "SET_POKEMON";
export type SetPokemonAction = {
  type: typeof SET_POKEMON;
  payload: Ipoke;
};

export const CLEAN_CURRENT_POKEMON = "CLEAN_CURRENT_POKEMON";
export type CleanCurrentPokemonAction = {
  type: typeof CLEAN_CURRENT_POKEMON;
};

export type ActionTypes =
  | StartFetchingAction
  | StopFetchingAction
  | SetPokesAction
  | SetPokemonAction
  | CleanCurrentPokemonAction;
