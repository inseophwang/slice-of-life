// # Slice of Life


// ### Guidelines

// 1. For all challenges, you may either:
// a. use a `while` loop to iterate over the indices and build a new string as
//  you go, or
// b. use String.slice or String.replace.

// 2. Use `const` for all variables.



console.log('# Replacement Challenges');

console.log('### Challenge #1');

// For the string `Hello, there.`, console out the same string but with the
// first `e` replaced with an `o`.

const sentence = `Hello, there.`
console.log(sentence.replace('e', 'o'));


console.log('### Challenge #2');

// For the string `Hello, there.`, console out the same string but with the
// `there` replaced with `you`.

console.log(sentence.replace('there', 'you'));

console.log(`### Challenge #3`);

// For the string `Hello, there.`, console out the same string but with the
// first `e` replaced with an `i` and the `o` replaced with `y`. Hint: one way
// to do this involves repeating the same operation twice, though with
// different arguments.
console.log(sentence.replace('e','i'))

console.log(`### Challenge #4`);

// For the string `Hello, there.`, console out the same string but with _every_
// `e` replaced by an `o`. If you got this far, you are thoro af.

const oString = /e/gi;
const newString = sentence.replace(oString,'o');
console.log(newString);

console.log(`# Slice Challenges`);

console.log(`### Challenge #5`);

// For the string `Watch that speedbump!`, console out the first 5 characters.



console.log(`### Challenge #6`);

// For the string `Watch that speedbump!`, console out the first 6 characters.



console.log(`### Challenge #7`);

// For the string `Watch that speedbump!`, console out everything _except for_ the last 4
// characters.



console.log(`### Challenge #8`);

// For the strings `Hello, there.` and `Watch that speedbump!`, console out the
// last four characters of each one. There should be _two_ strings consoled for this one,
// but they should both be created using `slice` with the _exact_ same
// argument(s).

