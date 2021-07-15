export function getLetterMatchCount(guessedWord, secretWord) {
  const guessedLetterSet = new Set(guessedWord);
  const arraySecretWord = secretWord.split("");
  return arraySecretWord.filter((letter) => guessedLetterSet.has(letter))
    .length;
}
