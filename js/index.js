// function fetchApi(word) {
//     wrapper.classList.remove("active");
//     infoText.style.color = "#000";
//     infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
//     let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
//     fetch(url).then(response => response.json()).then(result => data(result, word)).catch(() => {
//         infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
//     });
// }

function search() {
    const word = document.getElementById('word').value;
    console.log(word);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            // data(result, word)
            console.log(result[0])
        })
        .catch(() => {
            infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
        });
}