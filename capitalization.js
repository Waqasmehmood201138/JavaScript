
let sentence = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.";

let word = sentence.split(" ")

for (let i = 0; i < word.length; i++) {

    word[i] = word[i][0].toUpperCase() + word[i].substring(1);

}

let Sentence = word.join(" ");

console.log(Sentence);