// TypeScript is a new language from Microsoft that adds Types to JavaScript!
// https://www.typescriptlang.org/

const greeting: string = "Hello, world!";
const luckyNumbers: number[] = [7, 13];

console.log(`${greeting} Your lucky numbers are: ${luckyNumbers}`);

// Types help you to be confident that your code is correct and avoid common mistakes
// TypeScript checks your code when it compiles, and will if there's an error

export const dots = (str: string) => str.split("").join(".");

console.log(dots("stringy")); // this is OK
// console.log(dots(0.1)); // this is not OK!

// Normally JavaScript kind of lets you do whatever the heck you want
// The bug with `dots` would result in:
// "TypeError: str.split is not a function"

// Custom Types can be declared like this!

export type Person = {
  name: string;
  age: number;
  dog?: string;
};

export const logPerson = (somebody: Person): void => {
  const { name, age, dog } = somebody;
  console.log(`Hi my name is ${name} and I am ${age} years old!`);
  if (dog) {
    console.log(`And my dog's name is ${dog}!`);
  }
};

// Here we will use the Person type, with and without `dog`

logPerson({
  name: "Shaggy",
  age: 17,
  dog: "Scooby Doo"
});

logPerson({
  name: "Old Man Jenkins",
  age: 82
});

// logPerson({
//   dog: "I require no owner!"
// }); // Not OK!

// Types can be imported or exported from other modules
// Many open source repos already declare their types
// Or else third-party @types declarations are available!

import max from "lodash/max";
console.log(max([100, 200, 300]));
// console.log(max({ not: "an array!" })); // Not OK!

// You can override TypeScript's typings if you need to, but beware...

const liarString = {} as string;
const lastLetter = (str: string) => str.slice(str.length - 1);
console.log(lastLetter(liarString)); // this will cause a runtime error!

// Now let's look at the output of our TS compilation!
// This file will produce the JavaScript file `index.js`
// as well as the typings declaration file `index.d.ts`
