import readlineSync from "readline-sync";

function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

const name =capitalizeFirstLetter(readlineSync.question("What is your name? "));

// const nameCapitalised = name[0].toUpperCase() + name.slice(1).toLowerCase();   ohne die funktion

const birthYear =parseInt(readlineSync.question("In which year were you born? "));
const cityBorn =capitalizeFirstLetter(readlineSync.question("In which city were you born? "));
const liveCity =capitalizeFirstLetter(readlineSync.question("Where do you live now? "));
const currentYear =parseInt(readlineSync.question("What is the current year? "));

const ageUser =currentYear - birthYear;

const introduction = `Hello! my name is ${name}. I was born ${ageUser} years ago in ${cityBorn}. Now i live in ${liveCity}.`


console.log("\n" , introduction);
