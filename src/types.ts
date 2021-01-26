//=====Ability Page

export type InfoAbilityType = {
  [key: string]: any;
};
export type InfoLangType = {
  name: string;
  url: string;
};
export type InfoType = {
  effect: string;
  language: InfoLangType;
  short_effect: string;
};
export type AbilityType = {
  name: string;
  url: string;
};
export type AbilitiyObjectType = {
  ability: AbilityType;
  is_hidden: boolean;
  slot: number;
};
