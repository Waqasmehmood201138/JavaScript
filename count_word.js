

var spaces = 0;
var sentence = 0;
var vowels = 0;

var Data = [
    {
        Sentence: " This is sentence one.This is sentence one."
    },
    {
        Sentence: "This is sentence two!"
    },
    {
        Sentence: "This is sentence three."
    }
]

console.log(Data[0].Sentence);
console.log(Data[1].Sentence);
console.log(Data[2].Sentence);


for (let i = 0; i < Data.length; i++) {

    for (let j = 0; j < Data[i].Sentence.length; j++) {

        switch (Data[i].Sentence.charAt(j)) {

            case ' ':
                spaces++;
                break;

            case '.':
            case '!':
                sentence++;
                break;

            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels++;
                break;

        }


    }

    console.log(Data[i].Sentence);
    console.log("Spaces   : ".concat(spaces));
    console.log("Vowels   : ".concat(vowels));
    console.log("Sentences: ".concat(sentence));
    console.log("Character: ".concat(Data[i].Sentence.length))
    console.log("Words    :".concat(spaces+1))


    // for reseting
    spaces = 0;
    var sentence = 0;
    var vowels = 0;
}







