/*import packages*/
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import validator from 'validator';

function generateUniqueID(firstName, lastName) { 
    if (typeof firstName !== 'string' || typeof lastName !== 'string' || !firstName || !lastName) {
        throw new Error ("Invalid input!!!");
    }

    return firstName[0].toLowerCase() + lastName.toLowerCase() + uuidv4().replace(/-/g, '').substring(0, 8);
    //example: aturing16271c5
    //reference: https://www.w3schools.com/jsref/jsref_replace.asp
    //reference: https://www.w3schools.com/jsref/jsref_substring.asp
}

function addAccount(userArray) {
    if(!Array.isArray(userArray) || userArray.length !== 4) {
        return false; //if not within requirements
    }

    const [firstName, lastName, email, age] = userArray; //array containing user info

    if (typeof firstName !== 'string' || !firstName.trim() || typeof lastName !== 'string' || !lastName.trim() || typeof email !== 'string' || !email.trim() || !validator.isEmail(email) || typeof age !== 'number' || age < 18 ) {
        return false; //if not within requirements
    }

    const uniqueID = generateUniqueID (firstName, lastName);
    const userData = `${firstName}, ${lastName}, ${email}, ${age}, ${uniqueID}\n`; //format of what to put in the users.txt

    fs.appendFileSync('users.txt', userData, 'utf8');

    return true; //return true if successful
}

export {generateUniqueID, addAccount};
