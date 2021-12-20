export type PokeType = {
  id: number;
  name: string;
  image: string;
};

export type PokeDetailType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {front_default: string};
  types: {type: {name: string}}[];
};

