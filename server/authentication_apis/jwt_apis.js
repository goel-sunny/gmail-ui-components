'use strict';
const fs = require('fs');
const jwt = require('jsonwebtoken');

// jwt token signing options
const signingOption = {
    algorithm: "HS256"
}


exports.jwtTokenGeneration = function (req) {
    const privateKey = fs.readFileSync('./authentication_apis/private_key.pem');

    if (validateCredentials(req)) {
        // returning the JWT token    
        return (jwt.sign(req, privateKey, signingOption));
    } else {
        // returning 403 error code i.e. credentials not valid .
        return '403';
    }
}


exports.jwtTokenVerification = function (req) {
    const publicKey = fs.readFileSync('./authentication_apis/public_key.pem', 'utf8');


}

function validateCredentials(userCredentials) {
    const usersList = fs.readFileSync('./authentication_apis/fake_authentication_data.json', 'utf8');
    const records = JSON.parse(usersList).userRecords;
    for (let i = 0; i < records.length; i++) {

        // if user enter userID then check on that basis
        if (userCredentials.userID != undefined) {
            if (userCredentials.userID == records[i].userID && userCredentials.password == records[i].password) {
                return true;
            }
        } else {
            // if user enter emailID then check on that basis
            if (userCredentials.emailID == records[i].emailID && userCredentials.password == records[i].password) {
                return true;
            }
        }
    };
    return false;
}
