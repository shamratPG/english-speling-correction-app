const findValue = (source, valueName) => {
    // console.log(source, valueName)
    value = source.find(e => e[valueName].length > 0);
    return value[valueName];

}
const findExample = (source, valueName) => {
    console.log(source, valueName)
    value = source.find(e => e.hasOwnProperty(valueName));
    return value[valueName];

}



// exampleSrc = findExample(result[0].meanings[0].definitions, 'example');
// console.log(exampleSrc);
// example.innerText = exampleSrc;

// exampleSrc = result[0].meanings[0].definitions;
// exe = findValue(exampleSrc, 'example');

// source = result[0].phonetics;



// if (!exampleSrc) {
//     example.parentElement.style.display = "none";
// } else {
//     example.parentElement.style.display = "block";
//     example.innerHTML = exampleSrc.example;
//     for (let i = 0; i < 5; i++) {
//         let tag = `<span onclick="search('${meanings.synonyms[i]}')">${meanings.synonyms[i]},</span>`;
//         tag = i == 4 ? tag = `<span onclick="search('${meanings.synonyms[i]}')">${meanings.synonyms[4]}</span>` : tag;
//         synonyms.insertAdjacentHTML("beforeend", tag);
//     }
// }

