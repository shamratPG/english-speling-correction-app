const wrapper = document.querySelector(".wrapper"),
    searchInput = wrapper.querySelector("input"),
    volume = wrapper.querySelector(".word i"),
    infoText = wrapper.querySelector(".info-text"),
    synonyms = wrapper.querySelector(".synonyms .list"),
    antonyms = wrapper.querySelector(".antonyms .list"),
    example = wrapper.querySelector(".example span"),
    removeIcon = wrapper.querySelector(".search span");
let audio, source, value, audioSrc;

function data(result, word) {
    if (result.title) {
        infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
        infoText.classList.add("text-danger");
    } else {
        wrapper.classList.add("active");
        infoText.classList.remove("text-danger");
        let meanings = result[0].meanings[0];
        let findExample = result[0].meanings[0].definitions;
        let definitions = result[0].meanings[0].definitions[0];
        let phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;

        document.querySelector(".word p").innerText = result[0].word;
        document.querySelector(".word span").innerText = phontetics;
        document.querySelector(".meaning span").innerText = definitions.definition;
        console.log(result);
        let exampleSrc = findExample.find(e => e.hasOwnProperty('example'));
        console.log(exampleSrc)


        source = result[0].phonetics;
        audioSrc = findValue(source, 'audio');

        audio = new Audio(audioSrc);


        if (!exampleSrc) {
            example.parentElement.style.display = "none";
            example.parentElement.parentElement.style.borderBottom = "none";
            example.parentElement.parentElement.style.paddingBottom = "0px";
            example.parentElement.parentElement.style.marginBottom = "0px";
        } else {
            example.parentElement.style.display = "block";
            example.parentElement.parentElement.style.borderBottom = "1px solid #D9D9D9";
            example.parentElement.parentElement.style.paddingBottom = "17px";
            example.parentElement.parentElement.style.marginBottom = "14px";
            example.innerHTML = exampleSrc.example;
        }


        if (meanings.synonyms[0] == undefined) {
            synonyms.parentElement.style.display = "none";
            synonyms.parentElement.parentElement.style.borderBottom = "none";
            synonyms.parentElement.parentElement.style.paddingBottom = "0px";
            synonyms.parentElement.parentElement.style.marginBottom = "0px";
        } else {
            synonyms.parentElement.style.display = "block";

            synonyms.parentElement.parentElement.style.borderBottom = "1px solid #D9D9D9";
            synonyms.parentElement.parentElement.style.paddingBottom = "17px";
            synonyms.parentElement.parentElement.style.marginBottom = "14px";
            synonyms.innerHTML = "";
            for (let i = 0; i < meanings.synonyms.length; i++) {
                let tag = `<span onclick="search('${meanings.synonyms[i]}')">${meanings.synonyms[i]},</span>`;
                synonyms.insertAdjacentHTML("beforeend", tag);
            }
            // for (let i = 0; i < 5; i++) {
            //     let tag = `<span onclick="search('${meanings.synonyms[i]}')">${meanings.synonyms[i]},</span>`;
            //     tag = i == 4 ? tag = `<span onclick="search('${meanings.synonyms[i]}')">${meanings.synonyms[4]}</span>` : tag;
            //     synonyms.insertAdjacentHTML("beforeend", tag);
            // }
        }
        if (meanings.antonyms[0] == undefined) {
            antonyms.parentElement.style.display = "none";
            antonyms.parentElement.parentElement.style.borderBottom = "none";
            antonyms.parentElement.parentElement.style.paddingBottom = "0px";
            antonyms.parentElement.parentElement.style.marginBottom = "0px";
        } else {
            antonyms.parentElement.style.display = "block";

            antonyms.parentElement.parentElement.style.borderBottom = "1px solid #D9D9D9";
            antonyms.parentElement.parentElement.style.paddingBottom = "17px";
            antonyms.parentElement.parentElement.style.marginBottom = "14px";
            antonyms.innerHTML = "";
            for (let i = 0; i < meanings.antonyms.length; i++) {
                let tag = `<span onclick="search('${meanings.antonyms[i]}')">${meanings.antonyms[i]},</span>`;
                antonyms.insertAdjacentHTML("beforeend", tag);
            }
        }
    }
}

function search(word) {
    fetchApi(word);
    searchInput.value = word;
}

function fetchApi(word) {
    wrapper.classList.remove("active");
    infoText.style.color = "#000";
    infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
        .then(response => response.json())
        .then(result => data(result, word))
        .catch(() => {
            infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
        });
}

searchInput.addEventListener("keyup", e => {
    let word = e.target.value.replace(/\s+/g, ' ');
    infoText.classList.remove("text-danger");
    if (e.key == "Enter" && word) {
        fetchApi(word);
    }
});

volume.addEventListener("click", () => {
    volume.style.color = "#4D59FB";
    audio.play();
    setTimeout(() => {
        volume.style.color = "#999";
    }, 800);
});

removeIcon.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    wrapper.classList.remove("active");
    infoText.style.color = "#9A9A9A";
    infoText.innerHTML = "Type any existing word and press enter to get meaning, example, synonyms, etc.";
});