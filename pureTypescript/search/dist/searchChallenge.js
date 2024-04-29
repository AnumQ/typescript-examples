"use strict";
function SearchChallenge(str) {
    const words = str.split(" ");
    const wordList = [];
    for (const word of words) {
        const letterCount = {};
        let maxRepeatingLettersInCurrentWord = 0;
        for (let i = 0; i < word.length; i++) {
            const letter = word[i].toLocaleLowerCase();
            if (!letterCount[letter])
                letterCount[letter] = 0;
            letterCount[letter]++;
            if (maxRepeatingLettersInCurrentWord < letterCount[letter]) {
                maxRepeatingLettersInCurrentWord = letterCount[letter];
            }
        }
        wordList.push({
            word: word,
            maxRepeatingLetters: maxRepeatingLettersInCurrentWord,
            occurencesOfMax: Object.values(letterCount).filter((x) => x === maxRepeatingLettersInCurrentWord).length,
        });
    }
    const repeatingLetters = wordList.filter((w) => w.maxRepeatingLetters > 1);
    console.log(repeatingLetters);
    if (repeatingLetters.length === 0)
        return -1;
    const initial = {};
    const manipulated = repeatingLetters.reduce((acc, current) => {
        return {
            [current.maxRepeatingLetters]: acc[current.maxRepeatingLetters]
                ? [...acc[current.maxRepeatingLetters], current.word]
                : [current.word],
        };
    }, initial);
    console.log("manipulated");
    console.log(manipulated);
    const maxRepeatedLettersInWords = repeatingLetters.reduce((acc, current) => Math.max(acc, current.maxRepeatingLetters), 0);
    const wordsWithMaxRepeatingLetters = repeatingLetters.filter((w) => w.maxRepeatingLetters === maxRepeatedLettersInWords);
    if (wordsWithMaxRepeatingLetters.length === 1)
        return wordsWithMaxRepeatingLetters[0].word;
    const maxOccurencesInWords = repeatingLetters.reduce((acc, current) => Math.max(acc, current.occurencesOfMax), 0);
    const wordsWithMaxOccurrences = repeatingLetters.filter((w) => w.occurencesOfMax === maxOccurencesInWords);
    //return the first element if there are multiple
    return wordsWithMaxOccurrences[0].word;
}
const result = SearchChallenge("This is the eve haappier greatest day ever!");
console.log(result);
//Run in terminal
// tsc && node dist/searchChallenge.js
