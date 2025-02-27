/*import packages*/
const fs = require('fs');
const { v4: uuid4 } = require('uuid');
const validator = require('validator');

function generateUniqueID(firstName, lastName) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string' || !firstName || !lastName) {
        throw new Error ("Invalid input!!!");
    }

    return firstName[0].toLowerCase() + lastName.toLowerCase() + uuidv4().replace(/-/g, '').substring(0, 8);
    //reference: https://www.w3schools.com/jsref/jsref_replace.asp
    //reference: https://www.w3schools.com/jsref/jsref_substring.asp
}

function addAccount(userArray) {
    if(!Array.isArray(userArray) || userArray.length !== 4) {
        return false;
    }

    const [firstName, lastName, email, age] = userArray;

    if (typeof firstName !== 'string' || !firstName.trim() || typeof lastName !== 'string' || !lastName.trim() || typeof email !== 'string' || !email.trim() || !validator.isEmail(email) || typeof age !== 'number' || age < 18 ) {
        return false;
    }

    const uniqueID = generateUniqueID (firstName, lastName);
    const userData = '${firstName}, ${lastName}, ${email}, ${age}, ${uniqueID}\n';

    fs.appendFileSync('users.txt', userData, 'utf8');

    return true;
}

module.exports = { generateUniqueID, addAccount };
