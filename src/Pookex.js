import api from "./services/Api";

export const CreateBoard = (correctPoke) => {
  const boardzin = Array(6)
    .fill()
    .map(() => Array(correctPoke.length).fill(""));
  return boardzin;
};

export const getPokemonImg = async (pokemonName) => {
  let urlImg = "";

  await api
    .get(`pokemon-form/${pokemonName.toLowerCase()}`)
    .then((res) => (urlImg = res.data.sprites.front_default))
    .catch(console.log);
  return urlImg;
};
