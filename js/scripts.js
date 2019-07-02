function shuffle(array) {
    var counter = array.length, temp, index;

// While there are elements in the array
    while (counter > 0) {
// Pick a random index
        index = Math.floor(Math.random() * counter);
// Decrease counter by 1
        counter--;
// And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
var myArray = [
    "JavaScript",
    "PHP",
    "Python",
    "C",
    "C#",
    "C++",
    "Visual Basic",
    "SQL",
    "Ruby",
    "Swift",
    "Go",
    "Perl",
    "R",
    "SAS",
    "F#",
    "COBOL",
    "Rust",
    "Haskell"
];
shuffle(myArray);


