const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-conter");
let wordsCount = document.getElementById("words-counter");

let userChar = 0;

// to update the character on screen
const updateCounter = () => {
    userChar = charval.value.length;
    totalCount.innerText = userChar;
    wordsCount.innerHTML = getWordCount(charval.value)
};

charval.addEventListener("keyup", () => updateCounter());

// to copy the text
const copyText = () => {
    charval.select();
    charval.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(charval.value);
};




function getWordCount(str) {
    return str.split(' ')
        .filter(function (n) { return n != '' })
        .length;
}

// const sentence = 'Give me the count of all words in this sentence!';
// console.log('Sentence: '+sentence);
// console.log('Total words: '+getWordCount(sentence));





