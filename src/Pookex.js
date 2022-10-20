import wordBank from "./data/pookex-bank.txt"
import api from "./services/Api";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  let urlImg = "";
  
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArray = result.split(/\r\n/);
      todaysWord = "doduo";
      wordSet = new Set(wordArray);
    });

    await api.get(`pokemon-form/${todaysWord}`)
    .then((res) => urlImg = res.data.sprites.front_default)
    .catch(console.log)
    return {wordSet, todaysWord, urlImg}
}