type WordObject = {
  word: string;
  maxRepeatingLetters: number;
  occurencesOfMax: number;
};

type LetterCount = {
  [key: string]: number;
};

function SearchChallenge(str: string) {
  const words = str.split(" ");

  const wordList: WordObject[] = [];
  for (const word of words) {
    const letterCount: LetterCount = {};

    let maxRepeatingLettersInCurrentWord = 0;
    let occurencesOfMax = 0;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLocaleLowerCase();
      if (!letterCount[letter]) letterCount[letter] = 0;
      letterCount[letter]++;

      if (maxRepeatingLettersInCurrentWord < letterCount[letter]) {
        maxRepeatingLettersInCurrentWord = letterCount[letter];
      }
    }

    wordList.push({
      word: word,
      maxRepeatingLetters: maxRepeatingLettersInCurrentWord,
      occurencesOfMax: Object.values(letterCount).filter(
        (x) => x === maxRepeatingLettersInCurrentWord
      ).length,
    });
  }

  const repeatingLetters = wordList.filter((w) => w.maxRepeatingLetters > 1);

  if (repeatingLetters.length === 0) return -1;

  const maxRepeatedLettersInWords = repeatingLetters.reduce(
    (acc, current) => Math.max(acc, current.maxRepeatingLetters),
    0
  );
  const wordsWithMaxRepeatingLetters = repeatingLetters.filter(
    (w) => w.maxRepeatingLetters === maxRepeatedLettersInWords
  );

  if (wordsWithMaxRepeatingLetters.length === 1)
    return wordsWithMaxRepeatingLetters[0].word;

  const maxOccurencesInWords = repeatingLetters.reduce(
    (acc, current) => Math.max(acc, current.occurencesOfMax),
    0
  );

  const wordsWithMaxOccurrences = repeatingLetters.filter(
    (w) => w.occurencesOfMax === maxOccurencesInWords
  );

  //return the first element if there are multiple
  return wordsWithMaxOccurrences[0].word;
}

const result = SearchChallenge("This is the greatest day ever!");
console.log(result);

//Run in terminal
// tsc && node dist/searchChallenge.js
