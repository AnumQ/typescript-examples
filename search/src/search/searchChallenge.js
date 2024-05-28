var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function SearchChallenge(str) {
    var words = str.split(" ");
    var wordList = [];
    var _loop_1 = function (word) {
        var letterCount = {};
        var maxRepeatingLettersInCurrentWord = 0;
        for (var i = 0; i < word.length; i++) {
            var letter = word[i].toLocaleLowerCase();
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
            occurencesOfMax: Object.values(letterCount).filter(function (x) { return x === maxRepeatingLettersInCurrentWord; }).length,
        });
    };
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        _loop_1(word);
    }
    var repeatingLetters = wordList.filter(function (w) { return w.maxRepeatingLetters > 1; });
    console.log(repeatingLetters);
    if (repeatingLetters.length === 0)
        return -1;
    var initial = {};
    var manipulated = repeatingLetters.reduce(function (acc, current) {
        var _a;
        return _a = {},
            _a[current.maxRepeatingLetters] = acc[current.maxRepeatingLetters]
                ? __spreadArray(__spreadArray([], acc[current.maxRepeatingLetters], true), [current.word], false) : [current.word],
            _a;
    }, initial);
    console.log("manipulated");
    console.log(manipulated);
    var maxRepeatedLettersInWords = repeatingLetters.reduce(function (acc, current) { return Math.max(acc, current.maxRepeatingLetters); }, 0);
    var wordsWithMaxRepeatingLetters = repeatingLetters.filter(function (w) { return w.maxRepeatingLetters === maxRepeatedLettersInWords; });
    if (wordsWithMaxRepeatingLetters.length === 1)
        return wordsWithMaxRepeatingLetters[0].word;
    var maxOccurencesInWords = repeatingLetters.reduce(function (acc, current) { return Math.max(acc, current.occurencesOfMax); }, 0);
    var wordsWithMaxOccurrences = repeatingLetters.filter(function (w) { return w.occurencesOfMax === maxOccurencesInWords; });
    //return the first element if there are multiple
    return wordsWithMaxOccurrences[0].word;
}
var result = SearchChallenge("This is the eve haappier greatest day ever!");
console.log(result);
//Run in terminal
// tsc && node dist/searchChallenge.js
