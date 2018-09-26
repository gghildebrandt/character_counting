//Write a function countLetters that can return to us all the unique characters that exist in a string that is passed into the function.

//Furthermore, the function should also report back how many instances of each letter were found in the string.
//Note that we are skipping and not counting spaces

var emptyObj = {};

    function countLetters(str) {
        var noSpaces = str.split(" ").join("").toLowerCase();

        for (var letter of noSpaces) {
            emptyObj[letter] = 0;
        }
        for (var letter of noSpaces) {
            emptyObj[letter]+= 1

    }
    return emptyObj
}



//var x = countLetters("Lighthouse in the house")
//console.log(JSON.stringify(x, null, 2));
// to dipslay directly into different lines

console.log(countLetters("lighthouse in the house"));

/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/