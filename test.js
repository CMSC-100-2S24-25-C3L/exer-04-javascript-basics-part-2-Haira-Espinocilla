const {generateUniqueID, addAccount} = require('./index');

console.log(generateUniqueID("Alan", "Turing"));

console.log(addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]));
console.log(addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]));