// basis om gegevens te loggen

//controleer het in de terminal met nodmon naam-van-je-bestand.js

console.log('Hallo JavaScript')
//uitkomst is hallo javascript

//variabelen
// variabelen mogen nooit een gereserveerd keyword zijn zoals if else enz
// labels moeten betekenis hebben zodat je kunt zien wat je wil doen
// kan nooit starten met een nummer spatie of symbolen
//gebruik geen hoofdletters
//gebruik zoveel mogelijk voor elke declarartie een eigen variabel

let names;
console.log(names);
//uitkomst undefined

let name = 'Obeth';
let lastname = 'Tuhumury';
console.log(name);
//uitkomst Naam

let intrestRate = 0.3;
intrestRate = 1;
console.log(intrestRate);
// uitkomst is 1

//types
//er zijn 2 soorten types
// 1: Primitives / ValueTypes
// . String
// . Number
// . Boolean
//. undefined
// . Null

//let name = 'names1'; //String Literal
//let age = 30; // Number Literal
//let isApproved = true; // Boolean Literal
//let isApproved = false; // Boolean Literal
//let fistName = undefined;
//let lastName = null;

// 2: Refrecnce Types
// .Object
// . Array
// . Function

//let name = 'names2'
//let age = 30;

let person = {
    name: 'Kees',
    age: 30
};
console.log(person); // Object
//uitkomst is { name: 'Kees', age: 30 }

// je kan ook de naam wijzigen door middel van

// Dot Notation
person.name = 'Henk';

// Bracket Notation
let selection = 'name'
person [selection] = 'Piet';

console.log(person.name);

// Array

let selectedColors = ['green', 'yellow'];
console.log(selectedColors);

// in onderstaand voorbeeld is de index van red 0 en blue 1

let selectColor = ['red', 'blue'];
    console.log(selectColor[0]);

// Arrays zijn dynamisch en kunnen veranderen
let selectedColor = ['red', 'blue'];
selectedColor[2] = 'pink'; // of
//selectedColor[2] = 1;;
console.log(selectedColor);

//function

// voert een taak uit
function greet(name, lastname) {
    console.log('Hallo ' +  name + ' ' + lastname);
}
greet(name,lastname);

// Berekend een waarde
function square(number) {
    return number * number;
}

let number = square (2);// dit hoeft niet dit kan ook gelijk in de log console.log(square (2));
console.log(number);
