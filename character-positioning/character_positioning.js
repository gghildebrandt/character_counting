/*
Instead of having your function countLetters return just the count of each letter, the requirement has changed to return
all the indices (zero-based positions) in the string where each character is found. So for each letter, we're no longer returning
just one number to represent its number of occurrences, but rather (potentially) multiple numbers to represent all
the places in the string that it shows up.
*/

var emptyObj = {};

    function positionLetters(str) {
        var noSpaces = str.split(" ").join("").toLowerCase();

        for (var letter of noSpaces) {
            emptyObj[letter] = [];
            i=0;
        }
        for (var letter of noSpaces) {
            emptyObj[letter].push(i);
            i++;

    }
    return emptyObj
}




console.log(positionLetters("lighthouse in the house"));
